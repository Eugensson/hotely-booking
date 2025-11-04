"use client";

import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  setMobileNav?: () => void;
}

export const Nav = ({
  containerStyles,
  listStyles,
  linkStyles,
  setMobileNav,
}: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {navItems.map(({ name, path, offset }) => (
          <li key={name}>
            <ScrollLink
              spy
              smooth
              to={path}
              duration={500}
              delay={50}
              offset={offset}
              className={cn("cursor-pointer", linkStyles)}
              onClick={setMobileNav}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
