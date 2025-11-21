import TheWarrenBar from "@/assets/images/homepage/cafe/the-warren-bar.png";
import TheConservatoryCafe from "@/assets/images/homepage/cafe/the-conservatory-cafe.png";
import Image from "next/image";

function Cafe() {
  return (
    <section className='py-20 w-full bg-[#EFEFEF]'>
        <div className='max-w-[88rem] mx-auto px-6 text-center flex flex-col items-center'>
            <h2 className='max-w-2xl font-extralight text-[45px] leading-14 tracking-tight uppercase mb-4'>Food, drink, and Get Togethers that Linger</h2>
            <p className='max-w-3xl mb-4 text-lg leading-8 tracking-wide text-[#454545]'>The Conservatory Cafe serves a full menu from Monday to Saturday, 9:00 am to 5:00 pm. The Warren Bar pours long into most evenings – a classic club bar adorned with memorabilia, showing big-screen sport when the games matter. Our menus graciously accommodate dietary requirements for events and private dining.</p>
            <p className='mb-16 max-w-3xl text-lg leading-8 tracking-wide text-[#454545]'>Everyone is welcome, and we encourage non-members to book a table. Membership unlocks 10% off selected food and drinks.</p>
            <div className="w-full grid grid-cols-2 gap-6">
          {/* The Warren Bar Image */}
          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-lg">
            <Image src={TheWarrenBar} alt="The Warren Bar" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <h3 className="text-white text-3xl font-light tracking-widest uppercase">The Warren Bar</h3>
            </div>
          </div>

          {/* The Conservatory Cafe Image */}
          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-lg">
            <Image src={TheConservatoryCafe} alt="The Conservatory Cafe" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <h3 className="text-white text-3xl font-light tracking-widest uppercase">The Conservatory Cafe</h3>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Cafe