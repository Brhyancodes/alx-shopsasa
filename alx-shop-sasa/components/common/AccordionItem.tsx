import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ_QuestionProps } from "@/interfaces";
import { quicksand } from "@/fonts";

function AccordionItem({ question, answer }: FAQ_QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleAction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="shadow-lg">
      <div
        className={`${
          isOpen
            ? "bg-[#FF5722] text-white rounded-t-lg" // Sunset Orange
            : "bg-[#FAFAFA] text-[#1E293B] rounded-lg" // Warm White & Charcoal Black
        } py-3 flex justify-between items-center ${quicksand.className} cursor-pointer`}
        onClick={handleAction}
      >
        <p className="font-bold pl-4 text-base md:text-lg">{question}</p>
        <button className="pr-4">
          {isOpen ? (
            <ChevronUp size="24" color="white" />
          ) : (
            <ChevronDown size="24" color="#1E293B" /> // Charcoal Black
          )}
        </button>
      </div>
      <div
        className={`bg-[#FAFAFA] text-[#1E293B] overflow-hidden ${
          isOpen ? "text-opacity-100 rounded-b-lg" : "text-opacity-0"
        } transition-all duration-300`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="text-base md:max-w-[90%] md:text-lg p-4">{answer}</p>
      </div>
    </article>
  );
}

export default AccordionItem;
