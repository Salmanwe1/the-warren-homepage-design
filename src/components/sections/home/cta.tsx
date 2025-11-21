import { Button } from "@/components/ui/button";
import React from "react";

type CTAProps = {
  headingText: string;
  paragraph: React.ReactNode;
  additionalContent?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
};

function CTA({
  headingText,
  paragraph,
  additionalContent,
  buttonText = "Manage my booking",
  buttonLink = "#",
}: CTAProps) {
  return (
    <section className="w-full bg-[#001330] py-20">
      <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between gap-10">
        
        {/* Left Heading */}
        <h3 className="flex-1 max-w-lg font-extralight text-[40px] leading-12 tracking-wide uppercase text-white">
          {headingText}
        </h3>

        {/* Middle Content */}
        <div className="flex-1 space-y-6 text-white">
          {paragraph}
          {additionalContent && <div>{additionalContent}</div>}
        </div>

        {/* Right Button */}
        <div className="flex-1 text-end">
          <Button
            asChild
            className="cursor-pointer rounded-full bg-[#d1b361] hover:bg-[#c3a04d] text-white px-9 py-6 text-lg"
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>

      </div>
    </section>
  );
}

export default CTA;
