"use client";

import CountUp from "react-countup";

import { statsData } from "@/lib/data";

export const Stats = () => {
  return (
    <ul className="my-10 flex flex-col xl:flex-row gap-x-8 gap-y-4">
      {statsData.map(({ value, type, unit }) => (
        <li key={type} className="flex">
          <div className="flex items-baseline gap-x-2">
            <h3 className="h3 text-soft-green">
              <CountUp
                start={0}
                end={value}
                decimals={value % 1 !== 0 ? 1 : 0}
                duration={6}
              />
              {unit && <span>{unit}</span>}
            </h3>
            <span className="text-black font-medium">{type}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
