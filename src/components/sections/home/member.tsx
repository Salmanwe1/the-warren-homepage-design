import { Button } from '@/components/ui/button'
import Image from 'next/image'
import member from '@/assets/images/homepage/member/member-image.png'
import { Square } from 'lucide-react'

function Member() {
  return (
     <section className="py-20 flex items-center justify-between bg-white">
      {/* Left side - Image */}
      <div className="flex-[60%] h-screen flex items-center overflow-hidden">
        <Image
          src={member}
          alt="The Warren Manor House"
          width={650}
          height={700}
          className="w-full h-[90%] rounded-r-2xl object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="flex-[40%] px-16 bg-white flex flex-col justify-center">
        <h1 className="max-w-3xl text-[52px] font-extralight text-[#001330] mb-12 leading-tight tracking-[0.15em]">
          Become a Warren  Member and Earn Benefits! 
        </h1>

        <div className="max-w-lg space-y-6 text-lg text-stone-700 leading-8 tracking-[0.02em]">
          <p className="">
           Membership brings year-round exclusive benefits including: 
          </p>

          <ul className="">
            <li className='flex items-center gap-3'><Square size={14} className='text-[#c3a04d] fill-[#c3a04d]'/> <p>Discounted room hire</p></li>
            <li className='flex items-center gap-3'><Square size={14} className='text-[#c3a04d] fill-[#c3a04d]'/> <p>Cafe and bar savings</p></li>
            <li className='flex items-center gap-3'><Square size={14} className='text-[#c3a04d] fill-[#c3a04d]'/> <p>Access to the gym membership with sauna and steam room</p></li>
            <li className='flex items-center gap-3'><Square size={14} className='text-[#c3a04d] fill-[#c3a04d]'/> <p>Use of sports facilities</p></li>
          </ul>

          <p className="">
           Ordinary and honorary categories support current and retired police communities, with associate memberships available locally.  
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Button className="cursor-pointer bg-[#C9A959] hover:bg-[#c3a04d] text-white px-12 py-6 rounded-full text-lg font-medium tracking-[0.03em]">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Member