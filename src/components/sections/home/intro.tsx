import { Button } from '@/components/ui/button'
import Image from 'next/image'
import intro from "@/assets/images/homepage/intro/intro-image.png"

function Intro() {
  return (
   <section className="py-20 flex items-center justify-between bg-white">
      {/* Left side - Image */}
      <div className="flex-[55%] h-screen flex items-center overflow-hidden">
        <Image
          src={intro}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-full h-[90%] rounded-r-2xl object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="flex-[45%] px-16 bg-white flex flex-col justify-center">
        <h1 className="max-w-3xl text-[52px] font-extralight text-[#001330] mb-12 leading-tight tracking-[0.15em]">
          PICTURESQUE VENUE HIRE: LONDON&apos;S HIDDEN TREASURE
        </h1>

        <div className="max-w-3xl space-y-6 text-lg text-stone-700 leading-8 tracking-[0.02em]">
          <p className="">
            We are The Warren – a historic Grade II listed manor house, and home to the Metropolitan Police Hayes Sports
            Club, nestled within 22 acres of green space in Bromley. For decades, our space has been a much-loved
            cornerstone of the local community.
          </p>

          <p className="">
            We host all kinds of events and occasions such as weddings, conferences, and parties, served by our in-house
            kitchen, The Warren Bar, and The Conservatory Cafe. Our eight distinctive function rooms, manicured grounds,
            and warm hospitality inspire connection and cherished memories.
          </p>

          <p className="">
            Members and non-members alike are invited to enjoy everything we offer. We encourage non-members to book
            ahead for meals, tables or events to ensure the best experience.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Button className="cursor-pointer bg-[#C9A959] hover:bg-[#c3a04d] text-white px-12 py-6 rounded-full text-lg font-medium tracking-[0.03em]">
            Read our story
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Intro