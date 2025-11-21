import Image from 'next/image'
import logo from "@/assets/images/homepage/navbar/logo.png"
import { Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className='w-full bg-[#ffffff] pt-10'>
      <div className='py-10 max-w-[75rem] mx-auto grid grid-cols-3'>
        <div className='space-y-2'>
         <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="w-20 h-20 object-contain invert-100"
            />
          <p className='text-lg leading-9 tracking-wider'>A charming London community hub and venue for weddings, functions, and meetings. Our Grade II listed manor house has been a backdrop for memorable events for 30+ years.</p>
        </div>
        <div className='space-y-3'>
          <p className='font-light text-2xl leading-10 tracking-wider uppercase text-[#001330]'>company information</p>
          <div className="flex flex-col items-start gap-4 text-base">
            <div className="flex items-center gap-2">
              {/* email icon */}
              <Mail size={16} className="text-[#C2A65C]" />
              <span>enquiries@mpthewarren.com</span>
            </div>

            <div className="flex items-center gap-2">
              {/* phone icon */}
              <Phone size={16} className="fill-[#C2A65C] text-[#C2A65C]" />
              <span>020 8462 1266</span>
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <p className='font-light text-2xl leading-10 tracking-wider uppercase text-[#001330]'>links</p>
          <div className='grid grid-cols-2'>
            <div className='space-y-4 flex flex-col'>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Home</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>The warren</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Venue hire</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>What&apos;s on</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Members</span>
            </div>
            <div className='space-y-4 flex flex-col'>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Menus</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Contact us</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Disclaimer</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Privacy</span>
              <span className='cursor-pointer hover:text-[#C2A65C]'>Cookies</span>
            </div>
          </div>
        </div>
      </div>
      <div className='py-2 bg-[#F4F4F4]'>
        <p className='text-[#454545] font-normal leading-8 tracking-normal text-center'>Copyright ©2025 Make Me Local</p>
      </div>
    </footer>
  )
}

export default Footer