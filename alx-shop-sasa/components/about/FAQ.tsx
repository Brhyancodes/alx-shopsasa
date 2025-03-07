import { FAQ_QuestionProps } from "@/interfaces";
import { quicksand } from "@/fonts";
import AccordionItem from "../common/AccordionItem";

const questions: FAQ_QuestionProps[] = [
  {
    question: "What is ShopSasa?",
    answer:
      "ShopSasa is a Swahili word that means 'Shop now.' It is a platform that helps comrades (campus students) purchase products at a lower price and also sell various products.",
  },
  {
    question: "How does one place an order?",
    answer:
      "Browse through the products, add them to your cart, and follow the prompts to make payment. Follow the payment instructions to complete your purchase.",
  },
  {
    question: "Can one return a product that's defective after purchasing?",
    answer: "Yes, our return policy allows returns within 48 hours after receiving the item.",
  },
  {
    question: "How can I contact customer care centre?",
    answer: "Reach out to our support team via email or phone, on the contact page section of our website.",
  },
  {
    question: "Can I pay once the product is delivered?",
    answer:
      "Absolutely! We've partnered with various parcel centers where, once your product is delivered, you can go, collect it, and pay at the center.",
  },
];

function FAQ() {
  return (
    <section className="bg-[--color-mint-green] py-10 px-4">
      <div className="mx-auto max-w-[350px]">
        <h2 className={`text-[--color-electric-blue] text-center font-semibold text-4xl md:text-5xl ${quicksand.className}`}>
          FAQs
        </h2>
        <div className="w-[60px] h-[5px] bg-[--color-electric-blue] rounded-lg mx-auto mt-2"></div>
      </div>

      <div className="bg-[--color-warm-white] p-6 w-11/12 mx-auto mt-10 rounded-2xl space-y-5 shadow-lg border-l-4 border-[--color-sunset-orange]">
        {questions.map((item, idx) => (
          <AccordionItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
