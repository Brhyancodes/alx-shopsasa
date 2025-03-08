import { TestimonialCardProps } from '@/interfaces';
import { quicksand } from "@/fonts";
import React from 'react';
import Image from 'next/image';

// Import the images
import dennis from '@/public/images/dennis.png'; 
import kevin from '@/public/images/kevin.png'; 
import michelle from '@/public/images/michelle.png'; 

const testimonials: TestimonialCardProps[] = [
  {
    image: dennis,
    name: "Dennis",
    message: "ShopSasa has completely transformed my shopping experience. The prices are unbeatable, and the process is super convenient!"
  },
  {
    image: kevin,
    name: "Kevin",
    message: "ShopSasa has been a game changer for me! Great deals and a smooth buying experience. Highly recommended!"
  },
  {
    image: michelle,
    name: "Michelle",
    message: "I love how easy it is to find exactly what I need. The prices are unbeatable, and the customer service is top-notch!"
  }
];

function Testimonials() {
  return (
    <section className="py-10 px-5 bg-white text-gray-800">
      <div className={`${quicksand.className} w-[95%] mx-auto text-center`}>
        <h3 className="font-bold text-4xl">Testimonials</h3>
        <p className="lg:text-lg mt-3">Trusted by Comrades, Loved by All</p>
      </div>
      
      <div className="mt-8 w-[90%] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-32 h-32 relative mb-4 overflow-hidden rounded-full">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="font-semibold text-xl capitalize mb-2">
              {testimonial.name}
            </h3>
            <p className="text-center text-gray-600">
  &ldquo;{testimonial.message}&rdquo;
</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;