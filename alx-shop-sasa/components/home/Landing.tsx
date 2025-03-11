import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Landing() {
  return (
    <section
      className={`text-white min-h-screen bg-[url(/images/shop.jpg)] md:bg-[url(/images/home.jpg)] bg-no-repeat bg-cover bg-center md:bg-[position:70%] lg:bg-center inset-shadow-overlay md:inset-shadow-none flex justify-center items-center`}
    >
      <div className="pl-10 lg:pl-0 text-balance max-w-5xl">
        <h2 className="font-bold text-[#FFB400] text-2xl leading-12 md:text-3xl lg:text-5xl">
          Karibu ShopSasa empowering comrades!
        </h2>
        <p className="my-8 text-lg md:text-2xl font-normal">
          🔥 Buy & Sell with Ease | 💰 Affordable Deals | 📦 Seamless Shopping Experience
        </p>
        <Link
          href="/signup"
          className="flex justify-center items-center bg-[#008080] w-2/3 max-w-80 py-4 text-lg rounded-lg tracking-wider hover:bg-[#1F4E3C]"
        >
          <span>Ready, Set, Shop, Comrade!</span>
          <ArrowUpRight size={24} color="#ffffff" />
        </Link>
      </div>
    </section>
  );
}

export default Landing;
