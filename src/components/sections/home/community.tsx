import { Button } from "@/components/ui/button"
import Image from "next/image"
import community from "@/assets/images/homepage/community/community-image.png"


function Community() {
  return (
     <section className="py-32 flex items-center justify-between bg-white">
      {/* left side - Content */}
      <div className="flex-[35%] px-16 bg-white flex flex-col justify-center">
        <h1 className="text-[52px] font-extralight text-[#001330] mb-12 leading-tight tracking-[0.15em]">
          The Heart of our Hayes Community 
        </h1>

        <div className="text-lg text-stone-700 leading-8 tracking-[0.02em]">
          <p className="">
            The Warren is also a vibrant hub for our members and local residents. It’s where banter can be heard from afar for Fish & Chip Fridays, see families relaxing by our playground, and find wagging tails warmly welcomed in the bar! With an exciting calendar of events, from live entertainment to our annual fireworks display, there's always something happening, and a reason to gather.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Button className="cursor-pointer bg-[#C9A959] hover:bg-[#c3a04d] text-white px-12 py-6 rounded-full text-lg font-medium tracking-[0.03em]">
            See what&apos;s on
          </Button>
        </div>
      </div>

      {/* right side - Image */}
      <div className="flex-[65%] h-screen flex items-center overflow-hidden">
        <Image
          src={community}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-full h-[90%] rounded-l-2xl object-cover"
          priority
        />
      </div>
    </section>
  )
}

export default Community