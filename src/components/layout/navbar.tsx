"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/images/homepage/navbar/logo.png";
import envelope from "@/assets/icons/navbar/envelope.svg";
import phone from "@/assets/icons/navbar/phone-alt.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-5 left-0 right-0 w-full z-50 bg-transparent text-white py-4">
      <div className="max-w-420 mx-auto flex flex-col gap-5">
        {/* top */}
        <div className="flex items-center justify-between">
          {/* Left Contact Info */}
          <div className="flex flex-col items-start gap-4 text-base font-semibold">
            <div className="flex items-center gap-2">
              {/* phone icon */}
              <Phone size={16} className="fill-[#C2A65C] text-[#C2A65C]" />
              <span>020 8462 1266</span>
            </div>

            <div className="flex items-center gap-2">
              {/* email icon */}
              <Mail size={16} className="text-[#C2A65C]" />
              <span>enquiries@mpthewarren.com</span>
            </div>
          </div>

          {/* logo */}
          <div>
            <Image
              src={logo}
              alt=""
              width={50}
              height={50}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Right Button */}
          <Button className="cursor-pointer rounded-full bg-[#d1b361] hover:bg-[#c3a04d] text-white px-9 py-6 text-lg">
            Manage my booking
          </Button>
        </div>

        {/* ---------------- BOTTOM NAVIGATION ---------------- */}
        <div className="flex items-center mx-auto">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
             <NavigationMenuItem>
                <NavigationMenuLink className="cursor-pointer text-base hover:text-[#D5B253] hover:bg-transparent transition bg-transparent">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  Wedding
                </NavigationMenuTrigger>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  Functions
                </NavigationMenuTrigger>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  Corporate
                </NavigationMenuTrigger>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  Events At The Warren
                </NavigationMenuTrigger>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  Food & Drink
                </NavigationMenuTrigger>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  Membership
                </NavigationMenuTrigger>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger className="cursor-pointer text-base bg-transparent text-white hover:text-[#D5B253] transition hover:bg-transparent">
                  About us
                </NavigationMenuTrigger>
              </NavigationMenuItem>
             <NavigationMenuItem>
                <NavigationMenuLink className="cursor-pointer text-base hover:text-[#D5B253] hover:bg-transparent transition bg-transparent">
                  Reviews
                </NavigationMenuLink>
              </NavigationMenuItem>
             <NavigationMenuItem>
                <NavigationMenuLink className="cursor-pointer text-base hover:text-[#D5B253] hover:bg-transparent transition bg-transparent">
                  Contact us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
