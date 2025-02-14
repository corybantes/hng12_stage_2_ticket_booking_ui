import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const TechemberCard = () => {
  return (
    <div className="radial border border-tcr-bd text-white rounded-3xl text-center p-6">
      <div className="md:w-[50%] mx-auto mb-8">
        <h1 className="font-[roadRage] mb-2">Techember Fest &quot;25</h1>
        <p className="leading-relaxed">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
      </div>
      <div className="leading-relaxed flex flex-col md:w-[80%] mx-auto md:flex-row items-center md:justify-center text-center text-sm sm:text-base">
        <div className="flex text-center">
          <MapPinIcon className="w-5 h-5 text-red-500 mx-1" />
          [Event Location]
          <div className="mx-4 md:flex hidden items-center gap-2">
            <div className="h-3 bg-white w-[0.6px]" />
            <div className="h-3 bg-white w-[0.6px]" />
          </div>
        </div>
        <div className="flex text-center">
          March 15, 2025
          <span className="mx-2 my-auto flex">
            <div className="h-3 bg-white w-[0.6px]" />
          </span>
          7:00 PM
        </div>
      </div>
    </div>
  );
};

export default TechemberCard;
