import { Navbar, Footer } from "@/components";
import TreatmentSection from "../treatment-section";
import TreatmentCards from "../treatment-cards";

export default function HairPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#212121]">
        {/* Hero Section */}
        <div
          className="pt-[10%] pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: "url('/image/hair-cover.jpg')" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Hair <span className="text-gray-600">Treatments</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your hair with our advanced treatments and expert
                care. From hair loss to balding, we have solutions for
                every hair concern.
              </p>
            </div>
          </div>
        </div>

        {/* Non-invasive Hair Program Section */}
        <TreatmentSection
          mainTitle="Hair Transplantation"
          treatments={[
            {
              description:
                "A permanent solution for baldness. Hair is taken from the back of your head (donor area) and implanted where hair is thinning or missing. The transplanted hair grows naturally and stays for life.",
              imageSrc: "/image/Hair-Transplantation.jpg",
              imageAlt: "Hair transplantation",
              imagePosition: "right",
            },
          ]}
          backgroundColor="bg-white"
          textColor="text-gray-900"
        />

        {/* Non-Surgical Hair Loss Treatments */}
        <TreatmentCards
          treatments={[
            {
              title: "QR678",
              description:
                "QR678, non-surgical therapy addresses the causes of thinning hair, helping you regrow hair naturally.",
              imageSrc: "/image/QR678.jpg",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "PRP",
              description:
                "Platelet Rich Plasma, non-surgical treatment that uses your own blood to stimulate hair growth and improve scalp circulation.",
              imageSrc: "/image/PRP.jpg",
              imageAlt: "PRP treatment with yellow liquid syringe injection",
            },
            {
              title: "GFC",
              description:
                "Growth Factor Concentrate is a non-surgical hair loss treatment that stimulates follicles for thicker, fuller hair.",
              imageSrc: "/image/GFC.jpg",
              imageAlt:
                "GFC treatment with clear syringe containing growth factors",
            },
          ]}
          backgroundColor="bg-white"
          textColor="text-gray-900"
        />

        <TreatmentSection
          mainTitle="Non-invasive Hair Program"
          treatments={[
            {
              title: "Scalp Cure",
              description:
                "Scalp Cure is your ultimate solution for a healthy, revitalized scalp. Combining advanced dermatological expertise with proven treatments, we address concerns like hair thinning, dandruff, excess oil, and scalp sensitivity. Our customized procedures promote scalp health, strengthen hair follicles, and enhance overall hair vitality. Whether you need deep cleansing, hydration, or targeted therapy, Scalp Cure restores balance and rejuvenates your scalp for long-term wellness.",
              imageSrc: "/image/Scalp-Cure.jpg",
              imageAlt: "Scalp treatment procedure with medical professional",
              imagePosition: "right",
            },
            {
              title: "Quick Fix",
              description:
                "Quick Fix is your go-to solution for instant care and visible results. Designed for fast and effective treatment, our targeted procedures refresh, restore, and revitalize your hair and scalp. From quick hydration boosts to scalp detox or instant glow, we provide professional care in minutes. Experience immediate improvement with our specialized quick-fix treatments that deliver noticeable results when you need them most.",
              imageSrc: "/image/Quick-Fix.jpg",
              imageAlt: "Quick fix treatment with micro-pigmentation procedure",
              imagePosition: "left",
            },
            {
              title: "Other Solutions",
              description:
                "Beyond scalp and quick-fix treatments, we offer a range of specialized solutions tailored to your unique hair and scalp needs. Whether you need to strengthen weak hair, balance scalp health, or address specific concerns, our expert-driven approaches ensure long-lasting results. We restore vitality, enhance texture, and promote overall wellness with comprehensive treatment options designed for your individual requirements.",
              imageSrc: "/image/Other-Solutions.jpg",
              imageAlt: "Person examining hair loss in mirror",
              imagePosition: "right",
            },
          ]}
          backgroundColor="bg-white"
          textColor="text-gray-900"
        />

        {/* Treatment Process */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Treatment Process
              </h2>
              <p className="text-lg text-gray-600">
                A simple 4-step process to achieve your hair goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Meet with our specialists to discuss your hair concerns and
                  goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive hair and scalp analysis to determine the best
                  treatment plan.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment</h3>
                <p className="text-gray-600">
                  Professional treatment using advanced techniques and premium
                  products.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Follow-up
                </h3>
                <p className="text-gray-600">
                  Regular follow-up sessions to maintain results and track
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Hair?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards
              achieving the hair you&apos;ve always dreamed of.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
