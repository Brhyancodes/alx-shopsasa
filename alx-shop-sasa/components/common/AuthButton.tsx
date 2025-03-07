import { useFormikContext } from "formik";
import { AuthButtonProps } from "@/interfaces";
import { ClipLoader } from "react-spinners";
import { nunito } from "@/fonts";

function AuthButton({ children, moreStyles }: AuthButtonProps) {
  const { isSubmitting } = useFormikContext();
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${moreStyles} ${nunito.className} bg-[#FFB400] text-white font-semibold rounded-4xl text-xl capitalize tracking-wider cursor-pointer disabled:bg-[#E5E7EB] disabled:cursor-not-allowed hover:bg-[#008080] active:scale-95`} // ShopSasa Colors
    >
      {isSubmitting ? <ClipLoader size={24} color="#ffffff" /> : children}
    </button>
  );
}

export default AuthButton;
