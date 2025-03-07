import { ProductDetailProps } from "@/interfaces";
import { nunito } from "@/fonts";
import Image from "next/image";
import Button from "../common/Button";

function ProductDetail({ imageUrl, name, price }: ProductDetailProps) {
  const addItemToCart = () => {};

  return (
    <article className="max-w-md bg-[#FAFAFA] rounded-xl pb-3 shadow-md">
      <Image
        src={imageUrl}
        alt={name}
        className="h-2/3 rounded-t-lg object-cover object-center"
      />

      <div className="m-4">
        <p className="text-2xl text-[#FFB400] font-semibold">{name}</p>
        <p
          className={`${nunito.className} font-medium text-lg text-[#008080] mb-4`}
        >
          Ksh. {price}
        </p>
        <Button
          action={addItemToCart}
          moreStyles="w-3/5 py-2 text-white md:text-lg font-bold bg-[#008080] hover:bg-[#5E2A84] rounded-md cursor-pointer"
        >
          Add to cart
        </Button>
      </div>
    </article>
  );
}

export default ProductDetail;
