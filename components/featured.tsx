"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

export const Featured = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="relative xl:-top-30 xl:h-60 max-w-325 ml-auto px-5 md:px-20 py-15 bg-soft-green-secondary rounded-l-3xl"
    >
      <div className="h-full flex flex-col xl:flex-row items-center gap-x-7 text-center xl:text-left">
        <Image
          src="/featured/icon.svg"
          alt="Heart icon"
          width={73}
          height={84}
          className="xl:mr-12"
        />
        <h2 className="h2 flex-1 text-soft-green leading-relaxed">
          Book an awesome room in less than 1 minute.
        </h2>
        <p className="flex-1 text-soft-green leading-loose">
          Discover and book hotels worldwide with ease. Compare prices, explore
          destinations, and secure your perfect stay in seconds - fast, simple,
          and reliable. Enjoy comfort wherever you travel.
        </p>
      </div>
    </motion.section>
  );
};
