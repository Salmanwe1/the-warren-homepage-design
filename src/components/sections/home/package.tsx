import { Button } from "@/components/ui/button";
import Image from "next/image";
import packageImage from "@/assets/images/homepage/packages/package-image.png";

function Package() {
  return (
    <section className="py-20 flex items-center justify-between bg-white">
      {/* left side - Content */}
      <div className="flex-[35%] px-16 bg-white flex flex-col justify-center">
        <h1 className="text-[52px] font-extralight text-[#001330] mb-12 leading-tight tracking-[0.15em]">
          Have a truly Unforgettable Wedding 
        </h1>

        <div className="space-y-6 text-lg text-stone-700 leading-8 tracking-[0.02em]">
          <p className="">
           Every couple finds a moment to treasure here – the quiet hush before the music begins, the first happy clink of glasses. What does your day look like?
          </p>

          <p className="">
           Will it be a sun-kissed ceremony in our licensed garden, where up to 220 guests can watch from our heel-friendly lawns? Or a grand banquet in one of our elegant rooms, where the history of our manor whispers its approval? Our timeless backdrop awaits a day that is wonderfully, perfectly you.
          </p>

          <p className="">
            From your first enquiry to the final farewell, our dedicated events team devotes their undivided attention to making your day perfect.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Button className="cursor-pointer bg-[#C9A959] hover:bg-[#c3a04d] text-white px-12 py-6 rounded-full text-lg font-medium tracking-[0.03em]">
            Find your wedding package
          </Button>
        </div>
      </div>

      {/* right side - Image */}
      <div className="flex-[65%] h-screen flex items-center overflow-hidden">
        <Image
          src={packageImage}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-full h-[90%] rounded-l-2xl object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default Package;

