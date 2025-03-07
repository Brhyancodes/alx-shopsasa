import { quicksand } from "@/fonts";

function Vision() {
  return (
    <section className="bg-[#E5E7EB] py-10 px-4"> {/* Cool Grey */}
      <div className="mx-auto max-w-[350px]">
        <h2 className={`text-[#5E2A84] font-bold text-4xl md:text-5xl ${quicksand.className} flex justify-center`}> {/* Deep Purple */}
          Our Vision
        </h2>
        <div className="w-[150px] h-[5px] bg-[#FFB400] rounded-lg mx-auto mt-2"></div> {/* Bright Mustard */}
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-4 md:mt-6 max-w-[924px] lg:mx-auto lg:gap-32">
        <div className="space-y-4 mt-4 ml-4 self-center">
          <p className={`text-[#FF5722] text-2xl md:text-4xl ${quicksand.className}`}> {/* Sunset Orange */}
            Curious about our Vision?
          </p>
          <p className="text-[#1E293B] md:text-2xl leading-6"> {/* Charcoal Black */}
            To be the leading digital marketplace for campus comrades, fostering entrepreneurship 
            and financial independence by providing a seamless platform for buying and selling 
            affordable products.
          </p>
        </div>
        <div className="bg-[url(@/public/images/mission.jpg)] bg-cover bg-center aspect-square inset-shadow-translucent rounded-full h-72 md:h-96 w-72 md:rounded-[53px] self-center"></div>
      </div>
    </section>
  );
}

export default Vision;
