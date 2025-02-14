import React from "react";
import Image from "next/image";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Ticket = ({
  name,
  email,
  ticketType,
  ticketNumber,
  specialRequest,
  profile,
}: {
  name: string;
  email: string;
  ticketType: string;
  ticketNumber: number;
  specialRequest?: string;
  profile: string;
}) => {
  return (
    <div className="relative w-[300px] h-[600px] bg-ticket-pattern bg-no-repeat bg-cover bg-center rounded-[16px] p-[14px] flex justify-center">
      <div className="w-[260px] h-[446px] bg-transparent border border-ticket-bd rounded-[16px] p-[14px] flex flex-col">
        <div className="text-center">
          <h1 className="font-[roadRage] text-[34px] leading-snug font-normal">
            Techember Fest &quot;25
          </h1>
          <div className="flex flex-col text-[10px] font-bold">
            <div className="flex self-center">
              <MapPinIcon className="w-3 h-3 text-red-500 mx-1" />
              <p className="text-[10px] my-auto">
                04,Rumens road, Ikoyi, Lagos
              </p>
            </div>
            <div className="flex self-center">
              <CalendarDaysIcon className="w-3 h-3 text-white mx-1" />
              March 15, 2025
              <span className="mx-1 my-auto">
                <div className="h-2 bg-white w-[0.6px]" />
              </span>
              7:00 PM
            </div>
          </div>
        </div>
        <div className="relative w-[140px] h-[140px] self-center bg-image-empty my-4 p-6 rounded-[32px] border-4 border-image-empty_bd/50">
          <Image
            src={profile}
            alt="profile picture"
            fill
            className="object-cover rounded-[27px]"
          />
        </div>
        <div className="bg-ticket-sub_bg border border-ticket-sub_bd rounded-lg p-1">
          <div className="flex flex-col">
            <div className="border-b flex border-ticket-sub_bd">
              <div className="w-full max-w-[108px] border-r border-ticket-sub_bd mr-2 p-1">
                <h6 className="mb-1 text-[10px] text-text-sec/50">
                  Enter your name
                </h6>
                <p className="text-[12px]">{name}</p>
              </div>
              <div className="w-full max-w-[108px] p-1">
                <h6 className="mb-1 text-[10px] text-text-sec/50">
                  Enter your email*
                </h6>
                <p className="text-[12px]">{email}</p>
              </div>
            </div>
            <div className="border-b flex border-ticket-sub_bd">
              <div className="p-1 w-full border-r border-ticket-sub_bd mr-2">
                <h6 className="mb-1 text-[10px] text-text-sec/50">
                  Ticket Type:
                </h6>
                <p className="text-[12px]">{ticketType}</p>
              </div>
              <div className="w-full p-1">
                <h6 className="mb-1 text-[10px] text-text-sec/50">
                  Ticket for
                </h6>
                <p className="text-[12px]">{ticketNumber}</p>
              </div>
            </div>
            <div className="p-1">
              <h6 className="mb-1 text-[10px] text-text-sec/50">
                Special request?
              </h6>
              <p className="text-[12px]">{specialRequest}</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/barcode.svg"}
        width={236}
        height={68}
        alt="bar code"
        className="absolute bottom-5 left-8"
      />
    </div>
  );
};

export default Ticket;
