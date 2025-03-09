import { Formik, Form, FormikHelpers } from "formik";
import { signUpSchema } from "@/schemas";
import { nunito } from "@/fonts";
import Input from "@/components/common/Input";
import AuthButton from "@/components/common/AuthButton";
import logo from "@/public/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, Phone, Eye, EyeOff } from "lucide-react";
import { SignUpInitialValues } from "@/interfaces";
import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const initialValues: SignUpInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  };

  const handleSubmit = (
    values: SignUpInitialValues,
    action: FormikHelpers<SignUpInitialValues>
  ) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <section className={`${nunito.className} bg-[#FAFAFA] min-h-screen flex flex-col justify-center items-center`}> 
      <div className="mt-3">
        <Link href="/">
          <Image src={logo} alt="ShopSasa" className="w-12 h-12" />
        </Link>
      </div>

      <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={handleSubmit}>
        <Form className="w-11/12 max-w-lg bg-white shadow-md rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-[#008080] font-bold text-2xl">Create Account</h2>
            <p className="text-gray-500">Register here</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input type="text" Icon={FaUser} name="firstName" placeholder="First Name" />
            <Input type="text" Icon={FaUser} name="lastName" placeholder="Last Name" />
          </div>

          <Input type="email" Icon={Mail} name="email" placeholder="Email" />
          <Input type="text" Icon={Phone} name="phone" placeholder="Phone" />
          <Input type={showPassword ? "text" : "password"} Icon={showPassword ? Eye : EyeOff} name="password" placeholder="Password" togglePassword={togglePassword} />

          <div className="mt-6 text-center">
            <AuthButton moreStyles="px-6 py-2 bg-[#008080] text-white rounded-lg">Sign up</AuthButton>
            
            <p className="text-gray-500 mt-4">
              Already have an account? &nbsp;
              <Link href="/login" className="text-[#FFB400] hover:underline">Log in</Link>
            </p>

            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://twitter.com/briancodes_" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-[#1DA1F2] hover:scale-110 transition" />
              </a>
              <a href="https://instagram.com/brhyancodes_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl text-[#E1306C] hover:scale-110 transition" />
              </a>
              <a href="https://github.com/Brhyancodes" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-600 hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/in/brian-wakhale-896b6b2a3/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-[#0077B5] hover:scale-110 transition" />
              </a>
            </div>

            <p className="text-sm text-gray-400 mt-4">&copy; {new Date().getFullYear()} ShopSasa |All rights reserved.</p>
          </div>
        </Form>
      </Formik>
    </section>
  );
}

export default Signup;
