import { nunito } from "@/fonts";

function Landing() {
  return (
    <section
      className={`min-h-screen bg-[url(/images/contact.jpg)] md:bg-[url(/images/call.jpg)] bg-center bg-cover inset-shadow-overlay ${nunito.className} text-white flex pt-32`}
    >
      <div className="space-y-8 pl-6 md:pl-12 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold lg:leading-18">Having burning Questions?</h2>
        <p className="text-lg max-w-md md:text-2xl text-balance">
          We&apos;re here to help! Reach out to us for inquiries, support, or
          feedback, and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}

export default Landing;
