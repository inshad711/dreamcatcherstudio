// import Image from "next/image";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroBanner from "./components/HeroBanner";
import MasonryGrid from "./components/MasonaryGridPortfolio";
import PhotographySection from "./components/PhotographySection";
import SpecialService from "./components/SpecialService";
// import StickyScroll from "./components/StickyScroll";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <PhotographySection />
      {/* <MasonryGrid /> */}
      <SpecialService />
      {/* <StickyScroll /> */}
      <ContactSection />
    </div>
  );
}
