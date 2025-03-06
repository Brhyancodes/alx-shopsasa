import { quicksand } from "@/fonts";
import { TestimonialCardProps } from "@/interfaces";
import TestimonialCard from "../common/TestimonialCard";
import dennis from "@/public/images/dennis.png";
import kevin from "@/public/images/kevin.png";
import scott from "@/public/images/scott.png";

const testimonials: TestimonialCardProps[] = [
  {
    image: aimee,
    name: "aimee",
    message: "All I can say is that they are worth giving a shot.",
  },
  {
    image: angelina,
    name: "angelina",
    message: "Ukulima has really help me increase sales.",
  },
  {
    image: scott,
    name: "Scott",
    message: "One of the best  sites ever.",
  },
];

function Testimonials() {
  return (
    <section className="py-10 px-5 bg-avocado text-white">
      <div className={`${quicksand.className} w-[95%] mx-auto text-center`}>
        <h3 className="font-bold text-4xl">Testimonials</h3>
        <p className="lg:text-lg mt-3">What our customers are saying about us</p>
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
