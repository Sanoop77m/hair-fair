"use client";

interface TreatmentItem {
  title?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

interface TreatmentSectionProps {
  mainTitle?: string;
  treatments: TreatmentItem[];
  backgroundColor?: string;
  textColor?: string;
}

export default function TreatmentSection({
  mainTitle,
  treatments,
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
}: TreatmentSectionProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
            {mainTitle}
          </h2>
        </div>

        {/* Treatment Sections */}
        <div className="space-y-20">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {treatment.imagePosition === "left" ? (
                <>
                  {/* Image */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img
                        src={treatment.imageSrc}
                        alt={treatment.imageAlt}
                        className="max-w-full h-[50vh] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center h-full">
                    {treatment.title && (
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {treatment.title}
                      </h3>
                    )}
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {treatment.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Content */}
                  <div className="flex flex-col justify-center h-full">
                    {treatment.title && (
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {treatment.title}
                      </h3>
                    )}
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img
                        src={treatment.imageSrc}
                        alt={treatment.imageAlt}
                        className="max-w-full h-[50vh] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
