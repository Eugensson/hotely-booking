import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Hotel } from "@/types";

interface HotelCardProps {
  hotel: Hotel;
}

export const HotelCard = ({ hotel }: HotelCardProps) => {
  const { image, name, location } = hotel;

  return (
    <Card className="w-full max-w-67.5 mx-auto overflow-hidden rounded-xl border-2 border-outline  hover:cursor-pointer group hover:bg-soft-green transition-colors duration-700">
      <CardContent className="p-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="aspect-square object-contain object-center"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="h4 group-hover:text-white transition-all duration-300 capitalize">
          {name}
        </CardTitle>
        <CardDescription className="group-hover:text-white transition-all duration-300">
          {location}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
