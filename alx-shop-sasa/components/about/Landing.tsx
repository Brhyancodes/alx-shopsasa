import { nunito } from "@/fonts";

function Landing() {
  return (
    <section className="min-h-screen text-white bg-[url(@/public/images/about2.jpg)] bg-cover bg-center inset-shadow-overlay flex  items-center ">
      <div className="space-y-8 pl-6 lg:pl-16">
        <h2
          className={`${nunito.className} font-bold text-[34px] md:text-5xl lg:text-6xl lg:max-w-3xl`}
        >
         Comrade shopping has been made easier! Karibu, Comrade!
        </h2>
        <p className="max-w-2xl text-balance md:text-lg">
         At ShopSasa, we're committed to making shopping easier for you, Comrades!
        </p>
      </div>
    </section>
  );
}

export default Landing;
