"use client";

import { motion } from "framer-motion";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Contacts } from "@/components/contacts";
import { Socials } from "@/components/socials";

import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="relative pt-12 xl:pt-0 bg-soft-green-secondary">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12 ">
            <div className="xl:w-115 mb-6 xl:mb-0">
              <Logo footer className="block mb-6" />
              <p className="leading-9">
                Hotely connects travelers with the best hotels worldwide - from
                luxury resorts to cozy city stays. Enjoy secure bookings,
                exclusive deals, and exceptional service designed to make every
                trip effortless and memorable.
              </p>
            </div>
            <div className="flex xl:gap-x-16 xl:ml-32">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <Nav
                  listStyles="flex flex-col gap-y-6 text-lg"
                  linkStyles="capitalize hover:text-soft-green transition-colors duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="h4 mb-6 capitalize">Contact us</h4>
                <Contacts />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="mb-4 xl:mb-0 text-sm text-black font-normal text-center">
            Copyright &copy; 2025. All rights reserved.
          </p>
          <Socials
            containerStyles="mx-auto xl:mx-0 flex items-center gap-x-4"
            linkStyles="text-black hover:text-soft-green transition-colors duration-300"
          />
        </div>
      </div>
    </footer>
  );
};
