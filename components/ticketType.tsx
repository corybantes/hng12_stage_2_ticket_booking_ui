import React from "react";

const TicketType = ({
  ticketPrice,
  accessType,
}: {
  ticketPrice: number | string;
  accessType: string;
}) => {
  return (
    <div className="w-full bg-transparent border-2 border-form-bd p-3 rounded-xl hover:bg-ticketType-hover">
      <div className="mb-3 font-semibold text-2xl uppercase">{ticketPrice}</div>
      <p className="uppercase md:font-semibold">{accessType}</p>
      <p>20/52</p>
    </div>
  );
};

export default TicketType;
