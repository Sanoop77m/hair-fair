import { Navbar, Footer } from "@/components";

export default function HairPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Hair <span className="text-amber-600">Treatments</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your hair with our advanced treatments and expert
                care. From hair loss to styling, we have solutions for every
                hair concern.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Hair Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive hair care solutions tailored to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hair Loss Treatment */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hair Loss Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced solutions for hair thinning and baldness using PRP
                  therapy, hair transplants, and medical treatments.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• PRP Therapy</li>
                  <li>• Hair Transplantation</li>
                  <li>• Medical Hair Restoration</li>
                </ul>
              </div>

              {/* Hair Styling */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hair Styling
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional styling services including cuts, coloring, and
                  treatments for all hair types.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Haircuts & Styling</li>
                  <li>• Hair Coloring</li>
                  <li>• Keratin Treatment</li>
                </ul>
              </div>

              {/* Scalp Treatment */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scalp Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized treatments for scalp health including dandruff,
                  psoriasis, and scalp rejuvenation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Scalp Exfoliation</li>
                  <li>• Dandruff Treatment</li>
                  <li>• Scalp Rejuvenation</li>
                </ul>
              </div>

              {/* Hair Extensions */}
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hair Extensions
                </h3>
                <p className="text-gray-600 mb-4">
                  High-quality hair extensions for length, volume, and style
                  transformation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clip-in Extensions</li>
                  <li>• Tape-in Extensions</li>
                  <li>• Sew-in Extensions</li>
                </ul>
              </div>

              {/* Hair Care Products */}
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hair Care Products
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium hair care products formulated for different hair types
                  and concerns.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shampoos & Conditioners</li>
                  <li>• Hair Masks & Treatments</li>
                  <li>• Styling Products</li>
                </ul>
              </div>

              {/* Consultation */}
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Free Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Book a free consultation with our hair specialists to discuss
                  your hair goals and concerns.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hair Analysis</li>
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
                A simple 4-step process to achieve your hair goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">1</span>
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
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">2</span>
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
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Treatment
                </h3>
                <p className="text-gray-600">
                  Professional treatment using advanced techniques and premium
                  products.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">4</span>
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
        <div className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Hair?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards
              achieving the hair you&apos;ve always dreamed of.
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
