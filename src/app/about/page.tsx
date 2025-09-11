import { Navbar, Footer } from "@/components";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#212121]">
        {/* Hero Section */}
        <div className="pt-[10%] pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                About <span className="text-gray-600">Hair Fair</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                We are dedicated to providing the highest quality hair and skin
                care solutions, combining advanced technology for
                optimal results.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  At Hair Fair, we redefine beauty by combining advanced skin
                  and hair care with a holistic approach to well-being. As a
                  trusted skin and hair clinic in Kerala, our mission is to
                  provide safe, effective, and personalized treatments that
                  enhance your natural beauty while boosting your confidence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Expert dermatologists and trichologists
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Advanced treatment technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Personalized care plans
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Natural and safe ingredients
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our team of experienced professionals dedicated to your
                hair and skin health.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Dr. Sarah Johnson
                  </h3>
                  <p className="text-blue-600 mb-3">Lead Dermatologist</p>
                  <p className="text-gray-600">
                    Specialized in advanced skin treatments with over 10 years
                    of experience.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Dr. Michael Chen
                  </h3>
                  <p className="text-blue-600 mb-3">Hair Specialist</p>
                  <p className="text-gray-600">
                    Expert in hair restoration and advanced hair care
                    treatments.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Dr. Emily Rodriguez
                  </h3>
                  <p className="text-blue-600 mb-3">Cosmetic Dermatologist</p>
                  <p className="text-gray-600">
                    Specialized in cosmetic procedures and anti-aging
                    treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Key Metrics Section */}
        <div className="py-16 bg-gradient-to-b from-black to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 border-b border-r border-gray-600">
                <div className="text-5xl font-bold text-white mb-2">11+</div>
                <div className="text-gray-300">Years of Expertise</div>
              </div>
              <div className="text-center p-8 border-t border-r border-gray-600">
                <div className="text-5xl font-bold text-white mb-2">20k+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center p-8 border-b border-l border-gray-600">
                <div className="text-5xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-300">Advanced Treatments</div>
              </div>
              <div className="text-center p-8 border-t border-l border-gray-600">
                <div className="text-5xl font-bold text-white mb-2">15k+</div>
                <div className="text-gray-300">Successful Transformations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
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
                  Quality
                </h3>
                <p className="text-gray-600">
                  We never compromise on quality, using only the finest
                  ingredients and latest technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Care</h3>
                <p className="text-gray-600">
                  Every treatment is personalized with genuine care for your
                  unique needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
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
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously innovate to bring you the most advanced and
                  effective treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
