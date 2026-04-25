import React from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Haader = () => {
  return (
    <div>
      <div className="text-center items-center space-y-4 mt-6">
        <Image className="mx-auto" src={logo} alt="logo" width={300} height={200}></Image>
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE,MMM,dd,yyyy")}</p>
      </div>
    </div>
  );
};

export default Haader;
