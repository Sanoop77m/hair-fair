"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { BookOpen, MessageSquare } from "lucide-react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Luxury care for hair & skin <br /> where science meets beauty
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit, distinctio eos.
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
            At Hair Fair, we believe beauty begins with confidence. Our clinic
            offers world-class hair transplantation and advanced skin care
            treatments in a premium, trusted, and healing environment.Our team
            combines cutting-edge technology with personalized care, ensuring
            natural, safe, and lasting results
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
