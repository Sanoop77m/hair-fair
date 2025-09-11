"use client";
import { Typography, IconButton } from "@material-tailwind/react";

const LINKS = ["About Us", "Skin", "Hair", "Contact Us", "FAQ"];

export function Footer() {
  return (
    <footer className="bg-black px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="/"
              target="_blank"
              variant="h2"
              color="white"
              className="mb-4"
            >
              Hair Fair
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              At Hair Fair, we blend advanced medical expertise with luxurious
              care to restore your hair and skin.<br /> Every treatment is designed to
              deliver safe, lasting, and confidence-boosting results
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
