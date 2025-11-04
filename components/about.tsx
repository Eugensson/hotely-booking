"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

import { Stats } from "@/components/stats";
import { Button } from "@/components/ui/button";

import { fadeIn } from "@/lib/variants";

export const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : undefined,
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container flex flex-col xl:flex-row">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-1 relative"
        >
          <Image
            src="/about/img2.png"
            alt="Hotel picture"
            width={559}
            height={721}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="xl:max-w-117.5"
        >
          <h2 className="mb-10 h2 capitalize">About hotely</h2>
          <p>
            Hotely makes global hotel booking effortless. Our platform connects
            travelers with top-rated hotels, resorts, and apartments in every
            corner of the world. Compare prices, discover exclusive offers, and
            book your stay securely — all in one place.
          </p>
          <div className="my-5 xl:my-10 min-h-8.5">{inView && <Stats />}</div>
          <p className="mb-10">
            Whether you’re planning a business trip or a dream vacation, Hotely
            helps you find the perfect room to match your budget and style.
            Enjoy a fast, transparent, and reliable booking experience designed
            to make travel simple and inspiring.
          </p>
          <Button variant="accent" size="lg" className="capitalize min-w-70">
            Explore more
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
