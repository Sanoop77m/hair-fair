import { Navbar, Footer } from "@/components";
import TreatmentCards from "../treatment-cards";
import TreatmentSection from "../treatment-section";
export default function SkinPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#212121]">
        {/* Hero Section */}
        <div
          className="pt-[10%] pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/skin-cover.jpg')" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Skin <span className="text-gray-600">Treatments</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Rejuvenate your skin with our advanced treatments. From
                anti-aging to acne solutions, we help you achieve
                radiant, healthy skin.
              </p>
            </div>
          </div>
        </div>

        <TreatmentCards
          treatments={[
            {
              title: "Face PRP (Platelet Rich Plasma Therapy)",
              description:
                "A natural glow from within. Use your own blood’s platelets to stimulate collagen production and skin rejuvenation. Improves skin texture, reduces fine lines, wrinkles, and acne scars. Helps in enhancing overall radiance. Minimal downtime and completely natural, safe therapy. Ideal for: Anti-aging, glow therapy, acne scar reduction, dull skin.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "Chemical Peels",
              description:
                "Renewed, refreshed, radiant skin. Gentle exfoliation that removes dead skin layers and promotes new skin growth. Reduces pigmentation, acne marks, sun damage, and uneven skin tone. Available in light, medium, or deep peels depending on your skin’s needs. Enhances overall skin brightness, smoothness, and texture. Ideal for: Pigmentation issues, acne-prone skin, tanning, dull complexion.",
              imageSrc: "/image/hero.png",
              imageAlt: "PRP treatment with yellow liquid syringe injection",
            },
            {
              title: "Laser Hair Removal",
              description:
                "Smooth, hair-free skin that lasts. Permanent reduction of unwanted hair using advanced laser technology. Safe, painless, and effective for all skin types. Quick sessions with no downtime. Improves skin texture and reduces ingrown hairs. Ideal for: Long-term hair removal on face, arms, legs, and body.",
              imageSrc: "/image/hero.png",
              imageAlt:
                "GFC treatment with clear syringe containing growth factors",
            },
            {
              title: "Glutathione Therapy",
              description:
                "Glow from the inside out. Powerful antioxidant therapy that lightens and brightens the skin naturally. Detoxifies the body, fights free radicals, and improves overall skin health. Can be combined with other treatments for enhanced skin rejuvenation. Ideal for: Skin brightening, anti-aging, dull complexion, detox support. ",

              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "Warts Removal",
              description:
                "Safe and effective removal of warts, moles, and small skin growths. Advanced dermatological techniques ensure minimal discomfort and quick recovery. Reduces the risk of recurrence with proper aftercare. Ideal for: Warts, moles, skin tags, or small growths causing cosmetic concern.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
            },
            {
              title: "Advanced Facials & Skin Rejuvenation",
              description:
                "Luxury skincare, clinical precision. Customized facials targeting hydration, anti-aging, brightening, or acne care. Deep cleansing, extraction, exfoliation, and nutrient infusion for radiant skin. Combines medical-grade products and clinical expertise for long-lasting results. Ideal for: Instant glow, hydration, anti-aging maintenance, skin nourishment.",
              imageSrc: "/image/hero.png",
              imageAlt: "QR678 treatment with syringe injection to scalp",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  Treatment
                </h3>
                <p className="text-gray-600">
                  Professional treatment using advanced techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
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
              beautiful skin with our experts.
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
