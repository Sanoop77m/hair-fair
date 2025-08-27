import { Navbar, Footer } from "@/components";

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

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Skin Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive skin care solutions for all skin types and
                concerns.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Anti-Aging Treatments */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Anti-Aging Treatments
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced treatments to reduce fine lines, wrinkles, and
                  restore youthful skin.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Botox & Fillers</li>
                  <li>• Chemical Peels</li>
                  <li>• Laser Resurfacing</li>
                </ul>
              </div>

              {/* Acne Treatment */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Acne Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Effective solutions for all types of acne, from mild to severe
                  cases.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical Acne Treatment</li>
                  <li>• Blue Light Therapy</li>
                  <li>• Acne Scar Treatment</li>
                </ul>
              </div>

              {/* Skin Rejuvenation */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Skin Rejuvenation
                </h3>
                <p className="text-gray-600 mb-4">
                  Restore your skin&apos;s natural glow with advanced
                  rejuvenation treatments.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Microdermabrasion</li>
                  <li>• Hydrafacial</li>
                  <li>• LED Light Therapy</li>
                </ul>
              </div>

              {/* Pigmentation Treatment */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pigmentation Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Treat dark spots, melasma, and uneven skin tone with
                  specialized treatments.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Laser Treatment</li>
                  <li>• Chemical Peels</li>
                  <li>• Topical Treatments</li>
                </ul>
              </div>

              {/* Skin Care Products */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Skin Care Products
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium skin care products formulated for different skin types
                  and concerns.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cleansers & Toners</li>
                  <li>• Serums & Moisturizers</li>
                  <li>• Sun Protection</li>
                </ul>
              </div>

              {/* Consultation */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Free Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Book a free consultation with our dermatologists to discuss
                  your skin concerns and goals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Skin Analysis</li>
                  <li>• Treatment Planning</li>
                  <li>• Personalized Advice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Meet with our dermatologists to discuss your skin concerns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive skin analysis and condition evaluation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Planning
                </h3>
                <p className="text-gray-600">
                  Customized treatment plan tailored to your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Treatment
                </h3>
                <p className="text-gray-600">
                  Professional treatment using advanced techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">5</span>
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

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Skin Treatments?
              </h2>
              <p className="text-lg text-gray-600">
                Experience the difference with our advanced skin care solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expert Care
                </h3>
                <p className="text-gray-600">
                  Board-certified dermatologists with years of experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  Latest equipment and treatment methods for optimal results.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personalized
                </h3>
                <p className="text-gray-600">
                  Customized treatment plans for your unique skin needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Long-lasting
                </h3>
                <p className="text-gray-600">
                  Sustainable results with proper maintenance and care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Radiant Skin?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Book your consultation today and discover the path to healthy,
              beautiful skin with our expert dermatologists.
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
