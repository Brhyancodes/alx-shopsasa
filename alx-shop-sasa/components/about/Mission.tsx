import { quicksand } from "@/fonts";

function Mission() {
  return (
    <section className={`${quicksand.className} bg-[#FAFAFA] py-10 px-4`}> {/* Warm White */}
      <div className="mx-auto max-w-[300px]">
        <h2 className="text-[#1E293B] font-bold text-4xl md:text-5xl flex justify-center"> {/* Charcoal Black */}
          Our Mission
        </h2>
        <div className="w-[150px] h-[5px] bg-[#A7F3D0] rounded-lg mx-auto mt-2"></div> {/* Soft Mint Green */}
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:mt-6 max-w-[924px] lg:mx-auto lg:gap-32">
        <div className="space-y-4 mt-4 ml-4 self-center">
          <p className="text-[#FF5722] text-2xl md:text-4xl font-semibold"> {/* Sunset Orange */}
            Curious about our Mission?
          </p>
          <p className="text-[#1E293B] md:text-2xl leading-6"> {/* Charcoal Black */}
            We are dedicated to empowering the youth and campus comrades. Our goal is to create
            job opportunities in today&apos;s digital age and nurture future digital leaders!
          </p>
        </div>
        <div className="bg-[url(@public/images/vision.jpg)] bg-cover bg-center aspect-square rounded-full h-72 md:h-96 w-72 md:rounded-[53px] self-center inset-shadow-translucent"></div>
      </div>
    </section>
  );
}

export default Mission;
