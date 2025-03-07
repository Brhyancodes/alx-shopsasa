import { useField } from "formik";
import { InputProps } from "@/interfaces";

function Input({
  Icon,
  type,
  togglePassword,
  placeholder,
  ...props
}: InputProps) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <div
        className={`bg-[#FAFAFA]/15 rounded-lg flex items-center gap-3 w-full border-2 px-4 ${
          meta.touched && meta.error ? "border-[#FF5722]" : "border-transparent"
        }`} // Using Sunset Orange for error state border
      >
        {props.name === "password" ? (
          <Icon size={24} color="#06945D" onClick={togglePassword} className="cursor-pointer" />
        ) : (
          <Icon size={24} color="#06945D" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          {...field}
          {...props}
          className="outline-none border-none text-[#1E293B] placeholder:text-[#A7F3D0] flex-1 py-3" // Using Charcoal Black for text, Soft Mint Green for placeholder
        />
      </div>
      {meta.touched && meta.error && (
        <p className="text-[#FF5722] ml-3">{meta.error}</p> // Error text in Sunset Orange
      )}
    </div>
  );
}

export default Input;
