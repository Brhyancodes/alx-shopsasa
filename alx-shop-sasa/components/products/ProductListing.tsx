import { ProductDetailProps } from "@/interfaces";
import ProductDetails from "/products/ProductDetails";
import headphones from "/public/images/heaphones.jpg";
import laptop from "/public/images/laptop.jpg";
import charger from "/public/images/charger.jpg";
import watch from "/public/images/watch.jpg";

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
    imageUrl:laptop,
    name: "Gaming Laptop",
    category: "Electronics",
    price: "30000",
    description: "Lorem ipsum lorem ipsum",
  },
  {
    id: 3,
    imageUrl:charger,
    name: "Portable Charger",
    category: "Electronics",
    price: "1500",
    description: "A portable charger for your phone",
  },
  {
    id: 4,
    imageUrl:watch,
    name: "Smart Watch",
    category: "Accessories",
    price: "3000",
    description: "Lorem ipsum lorem ipsum",
  },
];

function ProductListing() {
  return (
    <div className="w-11/12 max-w-[85%] mx-auto my-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item: ProductDetailProps, idx: number) => (
        <Link key={idx} href={`/products/${encodeURIComponent(item.id)}`}>
          <ProductDetails {...item} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListing;
