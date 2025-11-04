"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";

export const DatePicker = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full h-16 justify-between text-left font-medium bg-grey-secondary",
            !date && "text-black"
          )}
        >
          {date ? (
            format(date, "dd MMM")
          ) : (
            <span className="text-grey text-base">Pick a date</span>
          )}
          <CalendarIcon size={20} className="mr-2 text-soft-green" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none rounded-lg overflow-hidden">
        <Calendar
          mode="single"
          selected={date || undefined}
          onSelect={(newDate) => setDate(newDate || null)}
        />
      </PopoverContent>
    </Popover>
  );
};
