import { TestimonialCardProps } from '@/interfaces';
import React from 'react';
import Image from 'next/image';

// Import the images
import dennis from '@/public/images/dennis.png'; 
import kevin from '@/public/images/kevin.png'; 
import michelle from '@/public/images/michelle.png'; 

const testimonials: TestimonialCardProps[] = [
  {
    image: dennis,
    name: "dennis",
    message: "ShopSasa has completely transformed my shopping experience. The prices are unbeatable, and the process is super convenient!"
  },
  {
    image: kevin,
    name: "kevin",
    message: "ShopSasa has been a game changer for me! Great deals and a smooth buying experience. Highly recommended!"
  },
  {
    image: michelle,
    name: "michelle",
    message: "I love how easy it is to find exactly what I need. The prices are unbeatable, and the customer service is top-notch!"
  }
];

const TestimonialList: React.FC = () => {
  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <Image 
            src={testimonial.image} 
            alt={testimonial.name} 
            width={500} 
            height={300} 
            layout="responsive" 
          />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;