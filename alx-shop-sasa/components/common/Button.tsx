import { ButtonProps } from "@/interfaces";

function Button({ children, moreStyles, action, disabled }: ButtonProps) { // <-- Add disabled here
  return (
    <button
      className={`${moreStyles}`}
      onClick={() => action()}
      disabled={disabled} // <-- Ensure disabled is applied
    >
      {children}
    </button>
  );
}

export default Button;
