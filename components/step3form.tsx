import React, { useRef } from "react";
import html2canvas from "html2canvas";
import Ticket from "./ticket";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const Step3form = ({
  name,
  email,
  ticketType,
  ticketNumber,
  specialRequest,
  profile,
  handleTicket,
}: {
  name: string;
  email: string;
  ticketType: string;
  ticketNumber: number;
  specialRequest?: string;
  profile: string;
  handleTicket: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (formRef.current) {
      const canvas = await html2canvas(formRef.current);
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "ticket.png";
      link.click();
    }
  };
  return (
    <div className="bg-form-bg border border-form-bd p-6 md:p-12 rounded-3xl text-white">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-[jeju]">Ready</h2>
          <span className="text-base">Step 3/3</span>
        </div>
        <Progress value={100} className="" />
      </div>
      <div>
        <div className="mb-8 text-center">
          <h3 className="text-[32px] mb-4 font-semibold">
            Your Ticket is Booked!
          </h3>
          <p className="text-base">
            You can download or Check your email for a copy
          </p>
        </div>
        <div className="flex mb-6 justify-center">
          <Ticket
            name={name}
            email={email}
            ticketNumber={ticketNumber}
            ticketType={ticketType}
            specialRequest={specialRequest}
            profile={profile}
            formRef={formRef}
          />
          {/* <div>seperator</div> */}
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <Button
            variant={"tertiary"}
            className="w-full"
            onClick={handleTicket}
          >
            Book Another Ticket
          </Button>
          <Button
            variant={"secondary"}
            className="w-full"
            onClick={handleDownload}
          >
            Download Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step3form;
