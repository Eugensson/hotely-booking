"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  footer?: boolean;
}

export const Logo = ({ className, footer = false }: LogoProps) => {
  return (
    <>
      <ScrollLink
        smooth
        to="home"
        duration={500}
        delay={50}
        offset={-150}
        className={cn("cursor-pointer", className)}
      >
        <Image
          src={footer ? "/footer/logo.svg" : "/header/logo.svg"}
          alt="Hotely logo"
          width={90}
          height={46}
          className="mb-2"
        />
      </ScrollLink>
    </>
  );
};
