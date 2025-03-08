import { nunito } from "@/fonts";
import Subscription from "@/components/common/Subscription";
import FooterNav from "@/components/common/FooterNav";
import CompanyInfo from "@/components/common/CompanyInfo";
import { CompanyInfoProps } from "@/interfaces";
import { IoHome, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const info: CompanyInfoProps[] = [
  {
    Icon: IoHome,
    title: "Address",
    text: "50211 street, Nairobi, Lavington",
  },
  {
    Icon: IoMail,
    title: "Email",
    text: "Shopsasa@gmail.com",
  },
  {
    Icon: FaPhoneAlt,
    title: "Phone",
    text: "+254 712 345 678",
  },
];

function Footer() {
  return (
    <footer className={`${nunito.className}`}>
      <div className="bg-[#008080] grid sm:grid-cols-3 gap-12 py-10 pl-6 lg:py-14 lg:px-12 text-[#FAFAFA]">
        <Subscription />
        <FooterNav />
        <div>
          {info.map((item: CompanyInfoProps, idx: number) => (
            <CompanyInfo key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#1E293B] text-[#FAFAFA] text-sm py-4">
        <p>&copy; Copyright {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
