import { Button } from "@/components/ui/button";

type HeroContentProps = {
  title: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

function HeroContent({ title, ctaPrimary, ctaSecondary }: HeroContentProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center text-white space-y-6">
      <h1 className="text-7xl leading-[70px] font-light tracking-wide max-w-[900px]">
        {title}
      </h1>

      <div className="flex items-center gap-6 mt-4">
        <Button className="cursor-pointer bg-[#d1b361] hover:bg-[#c3a04d] text-white px-8 py-6 rounded-full text-lg">
          {ctaPrimary}
        </Button>

        <Button
          variant="outline"
          className="cursor-pointer border-[#d1b361] bg-transparent text-[#d1b361] hover:text-white hover:bg-[#d1b361]/10 px-8 py-6 rounded-full text-lg"
        >
          {ctaSecondary}
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
