"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

interface CustomSectionProps {
  // Layout props
  layout?: "left-image" | "right-image" | "center" | "grid";
  backgroundColor?: string;
  textColor?: string;

  // Content props
  title?: string;
  subtitle?: string;
  description?: string;

  // Image props
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;

  // Button props
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string;
  showButton?: boolean;

  // Additional content
  features?: Array<{
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;

  // Styling
  className?: string;
  containerClassName?: string;
}

export default function CustomSection({
  layout = "left-image",
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  title,
  subtitle,
  description = "This is a custom section with flexible props for easy customization.",
  imageSrc = "/image/hero.png",
  imageAlt = "Section Image",
  imageWidth = 500,
  imageHeight = 400,
  buttonText = "Learn More",
  buttonLink = "#",
  buttonColor = "blue",
  showButton = true,
  features = [],
  className = "",
  containerClassName = "",
}: CustomSectionProps) {
  const renderContent = () => (
    <div className="space-y-6">
      {subtitle && (
        <Typography
          variant="h6"
          color="blue"
          className="font-medium"
          {...({} as any)}
        >
          {subtitle}
        </Typography>
      )}

      <Typography
        variant="h2"
        className={`font-bold ${textColor}`}
        {...({} as any)}
      >
        {title}
      </Typography>

      <Typography
        variant="paragraph"
        className={`${textColor} opacity-80`}
        {...({} as any)}
      >
        {description}
      </Typography>

      {features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              {feature.icon && (
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
              )}
              <div>
                <Typography
                  variant="h6"
                  className={`font-semibold ${textColor}`}
                  {...({} as any)}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="small"
                  className={`${textColor} opacity-70`}
                  {...({} as any)}
                >
                  {feature.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      )}

      {showButton && (
        <div className="pt-4">
          <Button
            size="lg"
            color={buttonColor as any}
            className="flex items-center gap-2"
            onClick={() => buttonLink && window.open(buttonLink, "_blank")}
            {...({} as any)}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );

  const renderImage = () => (
    <div
      className={`flex ${
        layout === "left-image" ? "justify-start" : "justify-end"
      }`}
    >
      <Image
        width={imageWidth}
        height={imageHeight}
        src={imageSrc}
        alt={imageAlt}
        className="rounded-lg shadow-lg"
      />
    </div>
  );

  const renderLayout = () => {
    switch (layout) {
      case "left-image":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {renderImage()}
            {renderContent()}
          </div>
        );

      case "right-image":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {renderContent()}
            {renderImage()}
          </div>
        );

      case "center":
        return (
          <div className="text-center max-w-4xl mx-auto">
            {renderContent()}
            {imageSrc && (
              <div className="mt-12">
                <Image
                  width={imageWidth}
                  height={imageHeight}
                  src={imageSrc}
                  alt={imageAlt}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            )}
          </div>
        );

      case "grid":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border">
                {feature.icon && (
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                )}
                <Typography
                  variant="h5"
                  className={`font-semibold mb-2 ${textColor}`}
                  {...({} as any)}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="small"
                  className={`${textColor} opacity-70`}
                  {...({} as any)}
                >
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        );

      default:
        return renderContent();
    }
  };

  return (
    <section className={`py-20 px-8 ${backgroundColor} ${className}`}>
      <div className={`container mx-auto ${containerClassName}`}>
        {renderLayout()}
      </div>
    </section>
  );
}
