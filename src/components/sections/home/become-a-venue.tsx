import { Button } from "@/components/ui/button";
import Image from "next/image";
import first from "@/assets/images/homepage/become-a-venue/first.png";
import second from "@/assets/images/homepage/become-a-venue/second.png";
import { Square } from "lucide-react";

function BecomeAVenue() {
  return (
    <section className="py-32 flex items-center justify-between bg-white">
      {/* left side - Content */}
      <div className="flex-[40%] px-16 bg-white flex flex-col justify-center">
        <h1 className="text-[52px] font-extralight text-[#001330] mb-12 leading-tight tracking-[0.15em]">
          Become a Warren Conference Venues in London
        </h1>

        <div className="w-full text-lg text-stone-700 leading-8 tracking-[0.02em]">
          <ul className="text-left! w-full">
            <li className="flex items-center gap-3">
              <Square size={14} className="text-[#c3a04d] fill-[#c3a04d]" />
              <p>Country-house charm in 22 acres, minutes from Bromley </p>
            </li>

            <li className="flex items-center gap-3">
              <Square size={14} className="text-[#c3a04d] fill-[#c3a04d]" />
              <p>Flexible spaces for up to 300 guests</p>
            </li>

            <li className="flex items-center gap-3">
              <Square size={14} className="text-[#c3a04d] fill-[#c3a04d]" />
              <p>Licensed De Zoete Garden ceremonies for up to 220 guests </p>
            </li>

            <li className="flex items-center gap-3">
              <Square size={14} className="text-[#c3a04d] fill-[#c3a04d]" />
              <p>
                Corporate-ready with DDR packages, AV, Wi-Fi and effortless
                planning{" "}
              </p>
            </li>

            <li className="flex items-center gap-3">
              <Square size={14} className="text-[#c3a04d] fill-[#c3a04d]" />
              <p>
                Bespoke event menus, plus The Conservatory Café and The Warren
                Bar on site{" "}
              </p>
            </li>

            <li className="flex items-center gap-3">
              <Square size={14} className="text-[#c3a04d] fill-[#c3a04d]" />
              <p>
                Free parking in serene surroundings, accessible and step-free
                routes, clear booking{" "}
              </p>
            </li>
          </ul>
        </div>

      </div>

      {/* right side - Image */}
      <div className="flex-[60%] h-screen flex items-center gap-10 overflow-hidden">
        <Image
          src={second}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-[55%] h-[70%] rounded-2xl object-cover"
          priority
        />
        <Image
          src={first}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-[45%] h-[70%] rounded-l-2xl object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default BecomeAVenue;
