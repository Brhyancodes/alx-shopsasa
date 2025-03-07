import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";
import { quicksand } from "@/fonts";

function CategoryCard({ categoryImage, categoryName }: CategoryCardProps) {
  return (
    <article className="bg-[#FAFAFA] h-80 grid place-content-center gap-4 rounded-2xl shadow-lg hover:bg-[#FFB400] transition-colors duration-300"> {/* ShopSasa Colors */}
      <Image src={categoryImage} alt={categoryName} />
      <p className={`text-[#1E293B] text-center text-lg ${quicksand.className}`}> {/* ShopSasa Color */}
        {categoryName}
      </p>
    </article>
  );
}

export default CategoryCard;
