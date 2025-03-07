import Link from "next/link";
import Button from "./Button";

function FooterNav() {
  const linkStyles =
    "hover:text-[#FFB400] hover:translate-x-4 transition-transform duration-300 ease-in"; // Hover effect with Bright Mustard (Bright Mustard)

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex flex-col gap-6 text-white font-semibold">
      <Link href="/products" className={`${linkStyles}`}>
           See What We Have for You
      </Link>
      <Link href="/about" className={`${linkStyles}`}>
        About us
      </Link>
      <Link href="/contact" className={`${linkStyles}`}>
        Contact us
      </Link>
      <Button moreStyles={`${linkStyles} text-left`} action={scrollUp}>
        Scroll Up
      </Button>
    </nav>
  );
}

export default FooterNav;
