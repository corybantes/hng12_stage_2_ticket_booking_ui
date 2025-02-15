import Logo from "./logo";
import Navbar from "./navbar";
import { Button } from "./ui/button";
// import { jeju } from "./fonts/fonts";
import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <div
      className={`w-[90%] mx-auto bg-header-bg border border-header-bd rounded-[12px] md:rounded-[24px] px-4 py-3 font-[jeju] text-header-text flex justify-between text-lg items-center`}
    >
      <Logo />
      <Navbar />
      <Button className="ticket">
        MY TICKETS
        <Image
          src={"/images/arrow.svg"}
          width={18}
          height={8}
          alt="arrow"
          className="rotate"
        />
      </Button>
    </div>
  );
};
export default Header;
