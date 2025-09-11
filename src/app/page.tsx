// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
// import VideoIntro from "./video-intro";
import CustomSection from "./custom-section";
import ImageGallery from "./image-gallery";
import Feature from "./feature";
// import MobileConvenience from "./mobile-convenience";
// import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomSection
        layout="right-image"
        backgroundColor="bg-black"
        textColor="text-white"
        title="Hair Treatment"
        description="At Hair Fair, we offer advanced hair transplantation and treatment solutions to restore your natural hair and confidence. Using state-of-the-art techniques like FUE , our expert team ensures natural-looking, permanent results with minimal downtime. We also provide PRP and GFC therapies to stimulate hair growth and strengthen existing follicles, along with QR678 therapy for non-surgical hair rejuvenation. Additional treatments like mesotherapy, dandruff care, and scalp nourishment help maintain healthy, thick, and vibrant hair. Personalized, safe, and effective, our treatments are designed to deliver visible results and lasting satisfaction."
        imageSrc="/image/hair-section.jpg"
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
        description="At Hair Fair, we provide advanced skin care solutions to help you achieve healthy, glowing, and youthful skin. Our treatments include glutathione therapy for skin brightening, chemical peels to improve texture and remove dead skin, mesotherapy for deep hydration and rejuvenation, laser hair removal for smooth, hair-free skin, and warts  removal to restore clarity. Using clinically proven techniques and personalized treatment plans, our experts ensure safe, effective, and natural results tailored to your skin type and concerns."
        imageSrc="/image/skin-section.jpg"
        imageAlt="Skin Treatment"
        imageWidth={500}
        imageHeight={400}
        buttonText="Know More"
      />

      <ImageGallery />

      <Feature />
      {/* <MobileConvenience /> */}
      {/* <Testimonials /> */}
      <Faqs />
      <Footer />
    </>
  );
}
