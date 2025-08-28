"use client";

interface TreatmentCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TreatmentCardsProps {
  mainTitle?: string;
  treatments: TreatmentCard[];
  backgroundColor?: string;
  textColor?: string;
}

export default function TreatmentCards({
  mainTitle,
  treatments,
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
}: TreatmentCardsProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        {mainTitle && (
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
              {mainTitle}
            </h2>
          </div>
        )}

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={treatment.imageSrc}
                  alt={treatment.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {treatment.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
