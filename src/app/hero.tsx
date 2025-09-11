"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { BookOpen, MessageSquare } from "lucide-react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header
        className="grid !min-h-[49rem] bg-cover bg-fixed bg-no-repeat px-8"
        style={{ backgroundImage: "url('/image/home%20cover.jpg')" }}
      >
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Luxury care for hair & skin <br /> where science meets beauty
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              At Hair Fair, we blend advanced medical expertise with luxurious
              care to restore your hair and skin. Every treatment is designed to
              deliver safe, lasting, and confidence-boosting results
            </Typography>
            <div className="mb-4 flex items-center">
              <h6 className="text-white text-lg font-semibold">Get in touch</h6>
            </div>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
                onClick={() =>
                  window.open("https://wa.me/919048406969", "_blank")
                }
              >
                <MessageSquare className="w-6 h-6" />
                Whats App
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 "
          >
            At Hair Fair, we believe that healthy hair and glowing skin are the
            true foundations of confidence. The name “Hair Fair” was chosen
            because it represents fairness, balance, and beauty—a promise of
            transparent care and genuine results.
            <br />
            The word “Fair” also reflects our commitment to ethical practices,
            honest consultations, and treatments tailored to each client’s
            needs. It’s not just about looking good, but about feeling
            confident, empowered, and renewed.
            <br />
            With advanced science-backed solutions and a touch of luxury, Hair
            Fair is more than a clinic—it’s a destination where you restore your
            beauty, redefine yourself, and shine with confidence.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
