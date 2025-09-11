import { Navbar, Footer } from "@/components";
import Faqs from "../faqs";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#212121]">
        {/* Hero Section */}
        <div
          className="pt-[10%] pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/faq-cover.jpg')" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Frequently Asked{" "}
                <span className="text-gray-600">Questions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our hair and skin
                treatments, appointments, and services. Can&apos;t find what
                you&apos;re looking for? Contact us!
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Faqs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
