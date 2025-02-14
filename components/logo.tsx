import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-[40px] h-[36] bg-logo border-logo-border border px-2 py-[6px] inline-flex items-center rounded-xl">
        <Image width={22} height={20} alt="ticz" src={"/logo/logo.svg"} />
      </div>
      <Image
        width={47}
        height={26}
        alt="ticz"
        src={"/logo/logo_name.svg"}
        className="mx-1"
      />
    </div>
  );
};

export default Logo;
