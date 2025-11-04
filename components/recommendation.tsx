"use client";

import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";

import { RecommendationSlider } from "@/components/recommendation-slider";

import { fadeIn } from "@/lib/variants";

export const Recommendation = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="relative pb-12 xl:pt-40 xl:pb-28 bg-soft-green-secondary"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <RecommendationSlider />
      </motion.div>
      <Image
        src="/recommendation/pattern.svg"
        alt="Pattern"
        width={240}
        height={240}
        className="aspect-square hidden xl:flex absolute left-33.75 -bottom-30"
      />
    </motion.section>
  );
};
