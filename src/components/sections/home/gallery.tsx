"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import image from "@/assets/images/homepage/gallery/image.png"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const rooms = [
    { label: "CONFERENCE", src: image },
    { label: "CONEY", src: image },
    { label: "HOBBIT", src: image },
    { label: "WICKHAMS", src: image },
    { label: "THE HAYES ROOM", src: image },
  ];

  return (
    <section className="w-full py-20 bg-[#EFEFEF]">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-[45px] font-extralight leading-12 tracking-[0.18em] text-[#001330]">
          A SPACE FOR EVERY OCCASION
        </h2>

        <p className="mt-4 text-lg text-[#454545] leading-8">
          Our doors are open to everyone looking for an enchanting venue for
          hire in London, with free on-site parking, impeccable service and
          culinary delights from our 5-star-rated kitchen. With a versatile
          collection of rooms and a friendly, experienced team, we are waiting
          to bring your vision to life.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-16">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 220,
            modifier: 1.8,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="w-full mx-auto"
        >
          {rooms.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl tracking-[0.25em] font-light">
                    {item.label}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev Button */}
        <button className="prev-btn absolute left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-black">
          ←
        </button>

        {/* Next Button */}
        <button className="next-btn absolute right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-black">
          →
        </button>
      </div>
    </section>
  );
}
