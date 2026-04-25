import Navbar from "@/component/Navbar";
import React from "react";
import { Montserr } from "../layout";

const authLayout = ({ children }) => {
  return (
    <div className={`${Montserr.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default authLayout;
