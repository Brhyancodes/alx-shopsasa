import { quicksand } from "@/fonts";
import { TestimonialCardProps } from "@/interfaces";
import TestimonialCard from "../common/TestimonialCard";
import dennis from "@/public/images/dennis.png";
import kevin from "@/public/images/kevin.png";
import michelle from "@/public/images/michelle.png";

const testimonials: TestimonialCardProps[] = [
 {
  "image": "dennis",
  "name": "dennis",
  "message": "ShopSasa has completely transformed my shopping experience. The prices are unbeatable, and the process is super convenient!"
},

  {
  "image": "kevin",
  "name": "kevin",
  "message": "ShopSasa has been a game changer for me! Great deals and a smooth buying experience. Highly recommended!"
},

  {
  "image": "michelle",
  "name": "michelle",
  "message": "I love how easy it is to find exactly what I need. The prices are unbeatable, and the customer service is top-notch!"
}

];

function Testimonials() {
  return (
    <section className="py-10 px-5 bg-avocado text-white">
      <div className={`${quicksand.className} w-[95%] mx-auto text-center`}>
        <h3 className="font-bold text-4xl">Testimonials</h3>
        <p className="lg:text-lg mt-3">Hear from Our Happy Comrades</p>
      </div>

      <div className="mt-8 w-[90%] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial: TestimonialCardProps, idx: number) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
