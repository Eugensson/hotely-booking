"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { HotelCard } from "@/components/hotel-card";

import { hotels } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 mb-10"
          >
            Find the Perfect Hotel for Your Next Stay
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-180 mx-auto mb-10"
          >
            Explore top-rated hotels around the world and book your stay with
            ease. Compare prices, check real guest reviews, and discover the
            best deals — all in one convenient place for your perfect travel
            experience.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Button
              variant="accent"
              size="lg"
              className="capitalize px-12 mb-10 xl:mb-20 min-w-50"
            >
              View all
            </Button>
          </motion.div>
        </div>
        <motion.ul
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {hotels.map((hotel) => (
            <li key={hotel.id}>
              <HotelCard hotel={hotel} />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
