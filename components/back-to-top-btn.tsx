"use client";

import { useEffect, useState } from "react";
import { TbChevronsUp } from "react-icons/tb";
import { animateScroll as scroll } from "react-scroll";

export const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed right-15 bottom-16 z-10 size-12 flex justify-center items-center rounded-lg bg-soft-green cursor-pointer border-2 border-white"
        >
          <div className="relative">
            <TbChevronsUp
              size={26}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        </button>
      )}
    </>
  );
};
