import { Navbar, Footer } from "@/components";
import TreatmentCards from "../treatment-cards";
import TreatmentSection from "../treatment-section";
export default function SkinPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#212121]">
        {/* Hero Section */}
        <div className="pt-[10%] pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Skin <span className="text-gray-600">Treatments</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Rejuvenate your skin with our advanced dermatological
                treatments. From anti-aging to acne solutions, we help you
                achieve radiant, healthy skin.
              </p>
            </div>
          </div>
        </div>

        <TreatmentCards
          treatments={[
            {
              title: "QR678",
              description:
                "QR678, non-surgical therapy addresses the causes of thinning hair, helping you regrow hair naturally.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "PRP",
              description:
                "Platelet Rich Plasma, non-surgical treatment that uses your own blood to stimulate hair growth and improve scalp circulation.",
              imageSrc: "/image/hero.png",
              imageAlt: "PRP treatment with yellow liquid syringe injection",
            },
            {
              title: "GFC",
              description:
                "Growth Factor Concentrate is a non-surgical hair loss treatment that stimulates follicles for thicker, fuller hair.",
              imageSrc: "/image/hero.png",
              imageAlt:
                "GFC treatment with clear syringe containing growth factors",
            },
            {
              title: "QR678",
              description:
                "QR678, non-surgical therapy addresses the causes of thinning hair, helping you regrow hair naturally.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "QR678",
              description:
                "QR678, non-surgical therapy addresses the causes of thinning hair, helping you regrow hair naturally.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "QR678",
              description:
                "QR678, non-surgical therapy addresses the causes of thinning hair, helping you regrow hair naturally.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
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
              imageSrc: "/image/hero.png",
              imageAlt: "Scalp treatment procedure with medical professional",
              imagePosition: "right",
            },
            {
              title: "Quick Fix",
              description:
                "Quick Fix is your go-to solution for instant care and visible results. Designed for fast and effective treatment, our targeted procedures refresh, restore, and revitalize your hair and scalp. From quick hydration boosts to scalp detox or instant glow, we provide professional care in minutes. Experience immediate improvement with our specialized quick-fix treatments that deliver noticeable results when you need them most.",
              imageSrc: "/image/hero.png",
              imageAlt: "Quick fix treatment with micro-pigmentation procedure",
              imagePosition: "left",
            },
            {
              title: "Other Solutions",
              description:
                "Beyond scalp and quick-fix treatments, we offer a range of specialized solutions tailored to your unique hair and scalp needs. Whether you need to strengthen weak hair, balance scalp health, or address specific concerns, our expert-driven approaches ensure long-lasting results. We restore vitality, enhance texture, and promote overall wellness with comprehensive treatment options designed for your individual requirements.",
              imageSrc: "/image/hero.png",
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
                A comprehensive 5-step process to achieve healthy, radiant skin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Meet with our dermatologists to discuss your skin concerns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive skin analysis and condition evaluation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Planning
                </h3>
                <p className="text-gray-600">
                  Customized treatment plan tailored to your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Treatment
                </h3>
                <p className="text-gray-600">
                  Professional treatment using advanced techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Follow-up
                </h3>
                <p className="text-gray-600">
                  Regular follow-up to maintain results and progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Radiant Skin?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Book your consultation today and discover the path to healthy,
              beautiful skin with our expert dermatologists.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
