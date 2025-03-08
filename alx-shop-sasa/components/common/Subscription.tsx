import { useState } from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";
import Button from "./Button";

function Subscription() {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    console.log("👉 Oyaaa! You’re officially part of the ShopSasa squad. Big things loading!");
  };

  return (
    <article className="border-r-2 pr-5 border-[#FAFAFA]">
      {/* Warm White border */}
      <div className="flex items-center space-x-6">
        <Image
          src={logo}
          alt="Company logo"
          className="w-9 h-9 sm:w-12 sm:h-12"
        />
        <p className="font-bold text-[#1E293B] text-xl">ShopSasa</p>
        {/* Charcoal Black text */}
      </div>
      <p className="max-w-sm font-semibold my-4 text-[#1E293B]">
        {/* Charcoal Black text for better visibility */}
        📢 Stay Updated with ShopSasa! 

        Join our newsletter and be the first to know about exclusive deals, new product listings, and exciting offers! 🚀

        📩 Subscribe now and never miss out!
      </p>
      <div className="bg-[#008080] rounded-md max-w-sm flex items-center">
        {/* Vibrant Teal background for better contrast */}
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          className="border-none text-[#FAFAFA] pl-3 flex-1 text-base outline-none placeholder:text-[#A7F3D0] w-full bg-transparent py-2"
          placeholder="Your email? e.g Brhyancodes@gmail.com"
        />
        <Button action={subscribe} moreStyles="mx-2 bg-[#FF5722] hover:bg-[#FFB400] text-white rounded-full">
          <IoMdSend size={28} color="#ffffff" />
          {/* Sunset Orange color */}
        </Button>
      </div>
    </article>
  );
}

export default Subscription;
