import Image from "next/image";
import { TestimonialCardProps } from "@/interfaces";
import { montserrat, nunito } from "@/fonts";

function TestimonialCard({ image, name, message }: TestimonialCardProps) {
  return (
    <article className="bg-[#FAFAFA] h-80 grid gap-4 place-content-center rounded-xl"> {/* Warm White background */}
      <Image src={image} alt={name} className="rounded-full w-40 mx-auto" />

      <div className="w-[80%] mx-auto text-center">
        <p className={`${montserrat.className} text-[#1E293B] capitalize`}> {/* Charcoal Black text */}
          {name}
        </p>
        <p className={`${nunito.className} text-[#1E293B]`}>
          &quot;{message}&quot; {/* Charcoal Black text for message */}
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;
