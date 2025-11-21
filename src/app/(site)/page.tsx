import Footer from "@/components/layout/footer";
import BecomeAVenue from "@/components/sections/home/become-a-venue";
import Booking from "@/components/sections/home/booking";
import Cafe from "@/components/sections/home/cafe";
import Community from "@/components/sections/home/community";
import CTA from "@/components/sections/home/cta";
import EventTypes from "@/components/sections/home/event-types";
import Gallery from "@/components/sections/home/gallery";
import Hero from "@/components/sections/home/hero";
import Intro from "@/components/sections/home/intro";
import Member from "@/components/sections/home/member";
import Package from "@/components/sections/home/package";
import Testimonials from "@/components/sections/home/testimonials";
import Venue from "@/components/sections/home/venue";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <EventTypes />
      <Testimonials />
      <Gallery />
      <CTA
        headingText="come, see for yourself"
        paragraph={
          <p className="font-normal text-lg leading-8 tracking-normal text-white">
            The best way to feel the magic of The Warren is to visit us. We
            would be delighted to show you around and hear all about your plans.
            Reach out to us, and we will be in touch to arrange your personal
            tour.
          </p>
        }
        additionalContent={
          <div className="flex flex-col items-start gap-4 text-base text-white font-semibold">
            <div className="flex items-center gap-2">
              <Phone size={16} className="fill-[#C2A65C] text-[#C2A65C]" />
              <span>020 8462 1266</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#C2A65C]" />
              <span>enquiries@mpthewarren.com</span>
            </div>
          </div>
        }
        buttonText="Manage my booking"
        buttonLink="/contact"
      />
      <Package />
      <Venue />
      <Community />
      <Booking />
      <Cafe />
      <Member />
      <BecomeAVenue />
      <CTA
        headingText="book a private meeting"
        paragraph={
          <p className="font-normal text-lg leading-8 tracking-normal text-white">
            See the garden, feel the history, picture the smiles – then make it
            yours. Call{" "}
            <span className="text-[#c3a04d] font-bold">020 8462 1266</span>{" "}
            today!
          </p>
        }
        buttonText="Manage my booking"
        buttonLink="tel:02084621266"
        additionalContent=""
      />
      <Footer />
    </div>
  );
}
