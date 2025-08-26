"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Luxury & Comfort",
    children: "Soothing, premium experience.",
  },
  {
    icon: HeartIcon,
    title: "Personalized Care",
    children: "Every treatment tailored to your unique needs.",
  },
  {
    icon: LockClosedIcon,
    title: "Clinical Excellence",
    children: "Certified specialists with international techniques.",
  },
  {
    icon: LightBulbIcon,
    title: "Natural Results",
    children: "Subtle, effective, and confidence-boosting.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Why Choose Hair Fair?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          At Hair Fair, we go beyond treatments and focus on transforming lives.
          Our mission is to provide world-class hair restoration and skin care
          in a premium, trusted, and healing environment.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
