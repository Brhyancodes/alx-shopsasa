import { Formik, Form, Field, FormikHelpers, FieldProps } from "formik";
import { ContactFormValues } from "@/interfaces";
import { contactFormSchema } from "@/schemas";
import AuthButton from "../common/AuthButton";

const initialValues: ContactFormValues = {
  firstName: "",
  email: "",
  message: "",
};

function ContactForm() {
  // Function to handle form submission
  const handleSubmit = (
    values: ContactFormValues,
    action: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <section className={`bg-[#FAFAFA] py-10 px-5`}>
      {/* Warm White background */}
      <div>
        <h3 className="text-[#008080] text-4xl md:text-5xl font-bold text-center">
          {/* Vibrant Teal text */}
          Comrade Connect
        </h3>
        <div className="w-[150px] h-1 bg-[#008080] rounded mx-auto"></div>
        {/* Vibrant Teal underline */}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="p-6 md:p-8 rounded-3xl bg-[#FAFAFA]/60 w-11/12 max-w-3xl mx-auto mt-6">
          {/* First Name Field */}
          <Field name="firstName">
            {({ field, meta }: FieldProps) => (
              <div>
                <div
                  className={`border-2 ${
                    meta.touched && meta.error
                      ? "border-[#FF5722]" // Sunset Orange border for errors
                      : "border-[#1E293B]/60" // Charcoal Black border for normal state
                  } rounded-lg bg-white`}
                >
                  <input
                    type="text"
                    placeholder="Enter your first name."
                    className="bg-transparent py-3 pl-4 text-[#1E293B] placeholder:text-[#A7F3D0] w-full outline-none text-lg" // Charcoal Black text and Soft Mint Green placeholder
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="text-[#FF5722] ml-4">{meta.error}</p> // Sunset Orange error text
                )}
              </div>
            )}
          </Field>

          {/* Email Field */}
          <Field name="email">
            {({ field, meta }: FieldProps) => (
              <div>
                <div
                  className={`border-2 mt-6 ${
                    meta.touched && meta.error
                      ? "border-[#FF5722]" // Sunset Orange border for errors
                      : "border-[#1E293B]/60" // Charcoal Black border for normal state
                  } rounded-lg bg-white`}
                >
                  <input
                    type="email"
                    placeholder="Enter your email."
                    className="bg-transparent py-3 pl-4 text-[#1E293B] placeholder:text-[#A7F3D0] w-full outline-none text-lg" // Charcoal Black text and Soft Mint Green placeholder
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="text-[#FF5722] ml-4">{meta.error}</p> // Sunset Orange error text
                )}
              </div>
            )}
          </Field>

          {/* Message Field */}
          <Field name="message">
            {({ field, meta }: FieldProps) => (
              <div>
                <div
                  className={`border-2 mt-6 ${
                    meta.touched && meta.error
                      ? "border-[#FF5722]" // Sunset Orange border for errors
                      : "border-[#1E293B]/60" // Charcoal Black border for normal state
                  } rounded-lg bg-white`}
                >
                  <textarea
                    placeholder="Enter your message."
                    className="bg-transparent py-3 pl-4 text-[#1E293B] placeholder:text-[#A7F3D0] w-full outline-none text-lg min-h-40" // Charcoal Black text and Soft Mint Green placeholder
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="text-[#FF5722] ml-4">{meta.error}</p> // Sunset Orange error text
                )}
              </div>
            )}
          </Field>

          {/* Submit Button */}
          <AuthButton moreStyles="capitalize bg-[#008080] hover:bg-[#0073E6] mt-10 w-56 py-3 block mx-auto rounded-lg">
            Comrade, Send Us a Message! {/* Vibrant Teal button */}
          </AuthButton>
        </Form>
      </Formik>
    </section>
  );
}

export default ContactForm;
