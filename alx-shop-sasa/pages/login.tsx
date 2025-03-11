import { Formik, Form, FormikHelpers } from "formik";
import { Mail, Eye, EyeOff } from "lucide-react";
import { nunito } from "@/fonts";
import { LoginInitialValues } from "@/interfaces";
import { loginSchema } from "@/schemas";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/common/Input";
import AuthButton from "@/components/common/AuthButton";
import logo from "@/public/icons/logo.png";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // Importing social icons

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues: LoginInitialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: LoginInitialValues,
    action: FormikHelpers<LoginInitialValues>
  ) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <section className={`${nunito.className} flex`}>
      <div className="hidden md:flex bg-[url(/images/sign.jpg)] bg-left-bottom bg-cover justify-center inset-shadow-translucent flex-1">
        <article className="space-y-12 text-[#FAFAFA] mt-28 text-center">
          <h2 className="font-bold text-4xl text-bright-mustard">ShopSasa</h2>
          <div className="italic font-normal space-y-4 text-lg max-w-[350px]">
            <p className="text-electric-blue">Empowering Campus Comrades.</p>
            <p className="text-soft-mint-green">
              - Creating Digital Leaders in the Digital World.
            </p>
          </div>
        </article>
      </div>

      <div className="flex-1">
        <div className="mt-3 ml-3">
          <Link href="/">
            <Image
              src={logo}
              alt="ShopSasa"
              className="w-9 h-9 sm:w-12 sm:h-12"
            />
          </Link>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-11/12 max-w-2xl mx-auto min-h-[90vh] relative">
            <div className="text-center mb-5">
              <h3 className="text-vibrant-teal font-bold text-3xl">
                Welcome back
              </h3>
              <p className="text-cool-grey text-base">Log in to your account</p>
            </div>

            <div className="space-y-2 mb-6">
              <label
                htmlFor="email"
                className="text-electric-blue font-bold text-lg"
              >
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email."
                Icon={Mail}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-electric-blue font-bold text-lg"
              >
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                Icon={showPassword ? Eye : EyeOff}
                placeholder="Enter your password."
                togglePassword={togglePassword}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 space-y-4">
              <div className="text-center">
                <AuthButton moreStyles="w-2/3 max-w-80 py-3 bg-bright-mustard hover:bg-electric-blue transition-all">
                  Log in
                </AuthButton>
              </div>

              <div className="text-center pb-5 text-sm space-y-2">
                <p className="text-cool-grey">
                  Don&apos;t have an account?
                  <Link
                    href="/signup"
                    className="text-deep-purple hover:underline"
                  >
                    &nbsp;Sign up
                  </Link>
                </p>
                {/* <p className="text-soft-mint-green">
                  &copy; {new Date().getFullYear()}, All rights reserved.
                </p> */}
              </div>
            </div>
          </Form>
        </Formik>

        {/* Footer with Social Media Links */}
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

          <p>&copy; {new Date().getFullYear()} ShopShasa |All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Login;
