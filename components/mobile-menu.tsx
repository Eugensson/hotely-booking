"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-around p-10 h-full"
      >
        <SheetHeader className="mb-20">
          <SheetTitle>
            <Logo footer />
          </SheetTitle>
          <SheetDescription className="sr-only">Mobile menu</SheetDescription>
        </SheetHeader>
        <Nav listStyles="flex flex-col gap-y-6 text-2xl capitalize text-black" />
        <Socials
          containerStyles="flex items-center gap-x-4"
          linkStyles="text-black hover:text-soft-green transition-colors duration-300"
        />
      </SheetContent>
    </Sheet>
  );
};
