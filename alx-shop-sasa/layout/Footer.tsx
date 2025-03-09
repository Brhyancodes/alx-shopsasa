import { nunito } from "@/fonts";
import Subscription from "@/components/common/Subscription";
import FooterNav from "@/components/common/FooterNav";
import CompanyInfo from "@/components/common/CompanyInfo";
import { CompanyInfoProps } from "@/interfaces";
import { IoHome, IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

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
      {/* Top Section */}
      <div className="bg-[#008080] grid sm:grid-cols-3 gap-12 py-10 pl-6 lg:py-14 lg:px-12 text-[#FAFAFA]">
        <Subscription />
        <FooterNav />
        <div>
          {info.map((item: CompanyInfoProps, idx: number) => (
            <CompanyInfo key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#1E293B] text-[#FAFAFA] text-sm py-4 flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-2">
          <a href="https://twitter.com/briancodes_" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-[#1DA1F2] transition duration-300" />
          </a>
          <a href="https://instagram.com/brhyancodes_" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-[#E1306C] transition duration-300" />
          </a>
          <a href="https://github.com/Brhyancodes" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/brian-wakhale-896b6b2a3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-[#0077B5] transition duration-300" />
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} ShopSasa| All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
