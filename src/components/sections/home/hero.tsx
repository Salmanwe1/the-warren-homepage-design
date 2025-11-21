import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import HeroContent from "./heroContent";
import HeroBlueTray from "./heroBlueTray";
import bgHeroImage from "@/assets/images/homepage/hero/hero-bg-image.png"

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <Image /> */}
        <Image
          src={bgHeroImage}
          alt="hero background"
          fill
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#08204A]/70 to-[#08204A]/40" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <HeroContent
          title="A PLACE TO CELEBRATE, MEET, AND BELONG"
          ctaPrimary="Make an enquiry"
          ctaSecondary="Become a member"
        />
      </div>

      {/* Bottom tray */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <HeroBlueTray
          items={[
            "Grade II listed manor with 22-acre grounds",
            "Ample, free on-site parking",
            "Membership perks and community events",
          ]}
        />
      </div>
    </section>
  );
}

export default Hero;
