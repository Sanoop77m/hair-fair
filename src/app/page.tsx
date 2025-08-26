// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
// import VideoIntro from "./video-intro";
import CustomSection from "./custom-section";
import Feature from "./feature";
// import MobileConvenience from "./mobile-convenience";
// import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <VideoIntro /> */}
      <CustomSection
        layout="right-image"
        backgroundColor="bg-black"
        textColor="text-white"
        title="Hair Treatment"
        description="This is a custom section with flexible props for easy customization."
        imageSrc="/image/hero.png"
        imageAlt="Hair Treatment"
        imageWidth={500}
        imageHeight={400}
        buttonText="Know More"
      />
      <CustomSection
        layout="left-image"
        backgroundColor="bg-gray-100"
        textColor="text-gray-900"
        title="Skin Treatment"
        description="We combine advanced dermatology with premium care to make your skin radiant, youthful,
and healthy."
        imageSrc="/image/hero.png"
        imageAlt="Skin Treatment"
        imageWidth={500}
        imageHeight={400}
        buttonText="Know More"
      />
      <Feature />
      {/* <MobileConvenience /> */}
      {/* <Testimonials /> */}
      <Faqs />
      <Footer />
    </>
  );
}
