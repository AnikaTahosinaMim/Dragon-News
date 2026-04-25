import BreakingNews from "@/component/BreakingNews";
import Haader from "@/component/Haader";
import Navbar from "@/component/Navbar";
import React from "react";

const maninLaytout = ({ children }) => {
  return (
    <div>
      <Haader></Haader>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default maninLaytout;
