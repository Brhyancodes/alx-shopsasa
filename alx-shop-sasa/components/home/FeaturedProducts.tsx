import { quicksand } from "@/fonts";
import { CategoryCardProps } from "@/interfaces";
import CategoryCard from "../common/CategoryCard";

import speaker from "/public/images/speaker.jpg";
import headphones from "/public/images/heaphones.jpg";
import tvsmart from "/public/images/tvsmart.jpg";

const categories: CategoryCardProps[] = [
  {
    categoryImage: speaker,
    categoryName: "Bluetooth speaker",
  },
  {
    categoryImage: headphones,
    categoryName: "Headphones",
  },
  {
    categoryImage: tvsmart,
    categoryName: "Television",
  },
];

function FeaturedProducts() {
  return (
    <section className="py-10 bg-grey ">
      <div className="text-center  w-full">
        <h3
          className={`${quicksand.className} text-moss-green font-bold text-[32px] md:text-4xl`}
        >
          Our Featured products
        </h3>
        <div className="w-[220px] md:w-[280x] mt-1  h-1 mx-auto  rounded bg-moss-green"></div>
      </div>

      <div className="mt-8 w-[90%] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category: CategoryCardProps, idx: number) => (
          <CategoryCard key={idx} {...category} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
