import { Button } from '@/components/ui/button'
import { Square } from 'lucide-react'
import Image from 'next/image'
import first from "@/assets/images/homepage/venue/first.png"
import second from "@/assets/images/homepage/venue/second.png"

function Venue() {
  return (
    <section className="py-20 flex items-center justify-between bg-white">
        {/* left side - Image */}
      <div className="flex-[60%] h-screen flex items-center gap-10 overflow-hidden">
        <Image
          src={first}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-[45%] h-[70%] rounded-r-2xl object-cover"
          priority
        />
        <Image
          src={second}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-[55%] h-[70%] rounded-2xl object-cover"
          priority
        />
      </div>

      {/* right side - Content */}
      <div className="flex-[40%] px-16 bg-white flex flex-col justify-center">
        <h1 className="text-[52px] font-extralight text-[#001330] mb-12 leading-tight tracking-[0.15em]">
         Commercial and Conference Venues in London
        </h1>

        <div className="w-full space-y-6 text-lg text-stone-700 leading-8 tracking-[0.02em]">
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

          </ul>

          <p className="">
           Our spaces suit meetings, conferences, product launches, trade showcases, and even team building away days. From boardroom to theatre, we set the scene with AV, Wi-Fi, and a friendly on-site team. Choose our Day Delegate Rates for business made easy. And when the work is done, wander our serene grounds for breakout moments or an unhurried, post-meeting exhale.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Button className="cursor-pointer bg-[#C9A959] hover:bg-[#c3a04d] text-white px-12 py-6 rounded-full text-lg font-medium tracking-[0.03em]">
            View our Day Delegate Rates
          </Button>
        </div>
      </div>

      
    </section>
  )
}

export default Venue