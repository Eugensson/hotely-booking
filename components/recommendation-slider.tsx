"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";

import { recommendationData } from "@/lib/data";

import "swiper/css";

export const RecommendationSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      loop
      speed={2000}
      spaceBetween={30}
      slidesPerView={1}
    >
      {recommendationData.map(
        ({ id, name, image, location, description, price, testimonial }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col xl:flex-row xl:pl-34 gap-y-12 xl:gap-y-0">
              <div className="max-w-86 xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                <h2 className="h2 mb-4">{name}</h2>
                <p className="text-soft-green text-sm mb-6">{location}</p>
                <p className="mb-15">{description}</p>
                <div className="flex items-center gap-x-12.5">
                  <Button
                    variant="accent"
                    size="lg"
                    className="px-11 capitalize"
                  >
                    Book now
                  </Button>
                  <div className="text-black">
                    <span className="font-semibold text-2xl">${price}</span>
                    <span className="text-sm">/Night</span>
                  </div>
                </div>
              </div>
              <div className="relative h-159 order-1 xl:order-2 flex flex-1 justify-center xl:justify-end">
                <div>
                  <Image
                    src={image}
                    alt={name}
                    width={905}
                    height={528}
                    quality={100}
                    className="xl:rounded-l-[20px]"
                  />
                  <div className="xl:absolute xl:bottom-0 xl:translate-x-1/2 p-4 xl:px-10 xl:max-w-117 xl:min-h-53 bg-soft-green text-white text-center xl:text-left xl:rounded-xl">
                    <p className="mb-3 xl:mb-6 max-w-md mx-auto xl:max-w-none xl:mx-0 italic font-medium line-clamp-4">
                      {testimonial.message}
                    </p>
                    <p className="text-lg font-semibold">
                      {testimonial.personName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
