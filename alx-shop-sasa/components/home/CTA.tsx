import { montserrat, nunito } from "@/fonts";
import Link from "next/link";

function CTA() {
  return (
    <div className="bg-[url(@/public/images/cta.jpg)] bg-cover bg-right md:bg-center inset-shadow-overlay h-[450px] flex gap-6 flex-col justify-center py-6 pl-6">
      <p
        className={`${montserrat.className} text-white font-bold text-3xl md:text-3xl max-w-3xl`}
      >
        🚀 Shop. Sell. Save.
        Join ShopSasa today and enjoy the best deals on campus!
        <br />
        👉 Get Started Now!
      </p>
      <div className={`${nunito.className} flex gap-5 items-center `}>
        <Link
          href="/about"
          className="bg-[#008080] hover:scale-105 rounded-lg text-white py-2 px-8" // Vibrant Teal background
        >
          Why Shop with Us?
        </Link>
        <Link
          href="/contact"
          className="border-2 border-white hover:scale-105 rounded-lg text-white bg-transparent py-2 px-8" // White border and text
        >
          Chat with Us
        </Link>
      </div>
    </div>
  );
}

export default CTA;
