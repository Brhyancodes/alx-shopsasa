import { nunito } from "@/fonts";

function Landing() {
  return (
    <section className="min-h-screen text-white bg-[url(/images/landing1.jpg)] bg-cover bg-center flex items-center inset-shadow-overlay">
      <div className="space-y-8 pl-6 lg:pl-16">
        <h2
          className={`${nunito.className} font-bold text-[34px] md:text-5xl lg:text-6xl lg:max-w-3xl text-[--color-tangerine]`}
        >
          Comrade shopping has been made easier! Karibu, Comrade!
        </h2>
        <p className="max-w-2xl text-balance md:text-lg text-[--color-grey]">
          At <span className="text-[--color-lime-green] font-semibold">ShopSasa</span>, 
          we&apos;re committed to making shopping easier for you, Comrades!
        </p>
      </div>
    </section>
  );
}

export default Landing;
