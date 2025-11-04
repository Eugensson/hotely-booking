"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialsData } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export const TestimonialsSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="xl:h-170 overflow-hidden"
    >
      {testimonialsData.map(({ id, image, message, personName, location }) => (
        <SwiperSlide key={id}>
          <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
            <Image
              src={image}
              alt={personName}
              width={470}
              height={470}
              quality={100}
              className="hidden xl:flex aspect-square object-cover object-center rounded-3xl overflow-hidden"
            />
            <div className="flex-1 bg-white/20 text-white p-12">
              <p className="text-lg leading-9 mb-8 italic font-medium">
                {message}
              </p>
              <p className="text-xl font-semibold mb-4">{personName}</p>
              <p className="text-sm">{location}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
