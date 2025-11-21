"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nicholas Aldridge",
    date: "July 31, 2020",
    rating: 5,
    text: "The graphics are crisp, tagging helps conveniently categorize and filter reviews, the software is intuitive and easy to use.",
    avatar: "",
  },
  {
    id: 2,
    name: "Nicholas Aldridge",
    date: "July 31, 2020",
    rating: 5,
    text: "The graphics are crisp, tagging helps conveniently categorize and filter reviews, the software is intuitive and easy to use.",
    avatar: "",
  },
  {
    id: 3,
    name: "Nicholas Aldridge",
    date: "July 31, 2020",
    rating: 5,
    text: "The graphics are crisp, tagging helps conveniently categorize and filter reviews, the software is intuitive and easy to use.",
    avatar: "",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[90rem] w-full mx-auto px-8">
        {/* Header */}
        <h2 className="text-[40px] font-extralight text-center text-[#001330] mb-16 tracking-[0.12em] leading-tight">
          WHY OUR GUESTS LOVE
          <br />
          THE WARREN
        </h2>

        {/* Testimonials Carousel */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft
              size={32}
              className="text-stone-700"
              strokeWidth={1.5}
            />
          </button>

          {/* Testimonials Grid */}
          <div className="w-full flex gap-6 justify-center flex-1 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <div
                  key={index}
                  className="flex-1 bg-gray-100 rounded-2xl p-8 flex flex-col"
                  style={{ minHeight: "280px" }}
                >
                  {/* Avatar and Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12 rounded-full shrink-0 bg-gray-300">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full shrink-0 bg-gray-300"
                    /> */}
                    <div className="flex-1">
                      <h3 className="font-bold text-stone-900 text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-stone-500 text-sm">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-teal-600 text-teal-600"
                        />
                      ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-stone-700 text-base leading-relaxed tracking-[0.01em] flex-1">
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight
              size={32}
              className="text-stone-700"
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center">
          <Button className="cursor-pointer rounded-full bg-[#d1b361] hover:bg-[#c3a04d] text-white px-9 py-6 text-lg">
            Read more
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
