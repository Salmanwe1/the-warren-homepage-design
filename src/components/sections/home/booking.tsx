"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import booking from "@/assets/images/homepage/booking/booking.png";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
    tourType: "",
    enquiryType: "",
    notRobot: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, notRobot: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex w-full">
      {/* Left Image - 55% width */}
      <div className="relative w-[60%] h-[1000px] overflow-hidden">
        <Image
          src={booking}
          fill
          alt="The Warren Building"
          className="object-cover"
          priority
        />
      </div>

      {/* Right Form - 45% width */}
      <div className="w-[40%] bg-[#001330] px-12 py-16 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h3 className="text-[40px] font-extralight tracking-widest leading-12 text-white mb-6">
            HOW TO MAKE A BOOKING
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 leading-8 tracking-tighter">
            Use our enquiry form to tell us what you&apos;d like to book and
            we&apos;ll get right back to you. Alternatively, you can reach us
            directly:
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="">
              {/* <label className="text-sm text-gray-300 block mb-2">Name</label> */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white transition-colors pb-2"
                placeholder="Name"
              />
            </div>

            {/* Email */}
            <div>
              {/* <label className="text-sm text-gray-300 block mb-2">Email</label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white transition-colors pb-2"
                placeholder="Email"
              />
            </div>

            {/* Telephone */}
            <div>
              {/* <label className="text-sm text-gray-300 block mb-2">Telephone</label> */}
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white transition-colors pb-2"
                placeholder="Telephone"
              />
            </div>

            {/* Your message */}
            <div>
              {/* <label className="text-sm text-gray-300 block mb-2">Your message</label> */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-white focus:outline-none focus:border-white transition-colors pb-2 resize-none"
                rows={1}
                placeholder="Your message"
              />
            </div>

            {/* Tour Type Select */}
            <div>
              <Select
                value={formData.tourType}
                onValueChange={(value) => handleSelectChange("tourType", value)}
              >
                <SelectTrigger className="w-full bg-transparent border-0 border-b border-gray-400 text-white rounded-none focus:ring-0 focus:border-white pb-2">
                  <SelectValue placeholder="Book a tour of The Warren" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a2b4d] border-gray-600">
                  <SelectItem value="tour-full">Full Tour</SelectItem>
                  <SelectItem value="tour-partial">Partial Tour</SelectItem>
                  <SelectItem value="tour-virtual">Virtual Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Enquiry Type 1 */}
            <div>
              <Select
                value={formData.enquiryType}
                onValueChange={(value) =>
                  handleSelectChange("enquiryType", value)
                }
              >
                <SelectTrigger className="w-full bg-transparent border-0 border-b border-gray-400 text-white rounded-none focus:ring-0 focus:border-white pb-2">
                  <SelectValue placeholder="General venue and event enquiries" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a2b4d] border-gray-600">
                  <SelectItem value="general-venue">General Venue</SelectItem>
                  <SelectItem value="general-events">General Events</SelectItem>
                  <SelectItem value="general-both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Wedding Enquiries */}
            <div>
              <Select>
                <SelectTrigger className="w-full bg-transparent border-0 border-b border-gray-400 text-white rounded-none focus:ring-0 focus:border-white pb-2">
                  <SelectValue placeholder="Wedding enquiries" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a2b4d] border-gray-600">
                  <SelectItem value="wedding-ceremony">
                    Ceremony Only
                  </SelectItem>
                  <SelectItem value="wedding-reception">
                    Reception Only
                  </SelectItem>
                  <SelectItem value="wedding-full">Full Wedding</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Food and Drink */}
            <div>
              <Select>
                <SelectTrigger className="w-full bg-transparent border-0 border-b border-gray-400 text-white rounded-none focus:ring-0 focus:border-white pb-2">
                  <SelectValue placeholder="Food and drink" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a2b4d] border-gray-600">
                  <SelectItem value="food-catering">Catering</SelectItem>
                  <SelectItem value="food-bar">Bar Service</SelectItem>
                  <SelectItem value="food-both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sports and Membership */}
            <div>
              <Select>
                <SelectTrigger className="w-full bg-transparent border-0 border-b border-gray-400 text-white rounded-none focus:ring-0 focus:border-white pb-2">
                  <SelectValue placeholder="Sports and membership" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a2b4d] border-gray-600">
                  <SelectItem value="sports-enquiry">Sports Enquiry</SelectItem>
                  <SelectItem value="membership">Membership</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              {/* Checkbox */}
              <div className="flex items-center gap-3 pt-4">
                <Checkbox
                  id="robot"
                  checked={formData.notRobot}
                  onCheckedChange={handleCheckboxChange}
                  className="border-gray-400 bg-transparent size-8"
                />
                <label
                  htmlFor="robot"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  I&apos;m not a robot
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="bg-[#d1b361] hover:bg-[#c3a04d] text-white px-8 py-3 rounded-full font-medium tracking-wide"
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
