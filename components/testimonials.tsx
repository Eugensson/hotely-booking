"use client";

import { motion } from "framer-motion";

import { TestimonialsSlider } from "@/components/testimonials-slider";

import { fadeIn } from "@/lib/variants";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="xl:h-220 bg-soft-green"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="container"
      >
        <TestimonialsSlider />
      </motion.div>
    </motion.section>
  );
};
