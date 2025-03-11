import { ProductDetailProps } from "@/interfaces";
import ProductDetail from "./ProductDetails";
import headphones from "@/public/images/heaphones.jpg";
import laptop from "@/public/images/laptop.jpg";
import charger from "@/public/images/charger.jpg";
import watch from "@/public/images/watch.jpg";
import Image from "next/image";
import Link from "next/link";

export const items: ProductDetailProps[] = [
  {
    id: 1,
    imageUrl: headphones,
    name: "Head Phones",
    category: "Head Phones",
    price: "1500",
    description: "Heavy bass headphones,grab one comrade!",
  },
  {
    id: 2,
    imageUrl: laptop,
    name: "Gaming Laptop",
    category: "Electronics",
    price: "30000",
    description: "Best Laptop for Video Games",
  },
  {
    id: 3,
    imageUrl: charger,
    name: "Portable Charger",
    category: "Electronics",
    price: "1500",
    description: "A portable charger for your phone",
  },
  {
    id: 4,
    imageUrl: watch,
    name: "Smart Watch",
    category: "Accessories",
    price: "3000",
    description: "A quality and durable watch",
  },
];

function ProductListing() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item: ProductDetailProps, idx: number) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <Link
              href={`/products/${encodeURIComponent(item.id)}`}
              className="block relative w-full pt-[75%]"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                  priority={idx < 2} // Prioritize loading the first two images
                />
              </div>
            </Link>
            <div className="p-4 flex-grow">
              <Link href={`/products/${encodeURIComponent(item.id)}`}>
                <h3 className="text-lg font-medium hover:text-blue-600 transition-colors">{item.name}</h3>
              </Link>
              <p className="text-gray-500 text-sm">{item.category}</p>
              <p className="text-gray-900 font-bold mt-2">KSh {item.price}</p>
              <p className="text-gray-600 text-sm mt-1 mb-4 line-clamp-2">{item.description}</p>
              
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto"
                onClick={(e) => {
                  e.preventDefault();
              
                  console.log(`Added ${item.name} to cart`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;