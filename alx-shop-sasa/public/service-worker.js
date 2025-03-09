const CACHE_NAME = 'shopSasa-cache-v1';  // Use a versioned cache name
const urlsToCache = [
  '/', // Main page
  '/offline.html', // Fallback page
  '/favicon.ico',  // You might want to cache the favicon as well
  '/styles/globals.css', // Cache CSS files
  '/icons/icon-192x192.png', // Icon for PWA install
  '/icons/icon-512x512.png', // Icon for PWA install
  // Add other important assets to the cache list
];

// Install Event - Caching assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache); // Cache all important files
    })
  );
});

// Fetch Event - Network and Cache Handling
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached response if available
        return cachedResponse;
      }
      
      // If not in cache, fetch from network
      return fetch(event.request).catch(() => {
        // If network fails, return offline page (fallback)
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });
    })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];  // Keep only the current cache version
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            // Delete old caches
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
