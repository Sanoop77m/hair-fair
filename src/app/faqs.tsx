"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "How effective is a hair transplant procedure?",
    desc: "A hair transplant restores natural hairlines and density. Success depends on technique (FUE, FUT), donor hair quality, and surgeon’s expertise. Perfect graft placement ensures natural-looking results.",
  },
  {
    title: "Is a hair transplant safe?",
    desc: "Yes, when performed by skilled and certified surgeons in a medical environment. Procedures are minimally invasive, usually completed in a few hours, and provide permanent results.",
  },
  {
    title: "Are there risks or complications?",
    desc: "Hair transplants are generally safe. Mild side effects may include redness, itching, swelling, or temporary acne in the transplanted area. Rarely, improper technique can cause scarring or poor growth.",
  },
  {
    title: "What is the difference between FUT and FUE?",
    desc: "FUT (Follicular Unit Transplant): A strip of scalp is removed, follicles separated, and implanted. Leaves a linear scar. FUE (Follicular Unit Extraction): Individual follicles are removed using micromotors and transplanted. Leaves minimal scars.",
  },
  {
    title: "How does the FUE procedure work?",
    desc: " Donor hair extraction: Follicles are taken from the back of the head under local anesthesia.",
  },
  {
    title: "What is the success rate of hair transplantation?",
    desc: "Average survival rate varies by clinic, but high-quality procedures (like FUE) show 90%+graft survival rates. Success depends on the surgeon’s skills, patient health, and properaftercare.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
