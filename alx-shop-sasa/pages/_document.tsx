import { Html, Head, Main, NextScript } from "next/document";
import { mulish } from "@/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* PWA Icon */}
        <link rel="icon" href="/public/images/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/public/images/android-chrome-512x512.png" sizes="512x512" />
        {/* Apple Icons */}
        <link rel="apple-touch-icon" href="/public/images/apple-touch-icon.png" />
        {/* Theme Color */}
        <meta name="theme-color" content="#008080" />
      </Head>
      <body className={`"antialiased" ${mulish.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
