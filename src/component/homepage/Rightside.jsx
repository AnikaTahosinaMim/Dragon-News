import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Rightside = () => {
  return (
    <div>
      <h2 className="text-lg font-bold">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn text-blue-500 border-blue-500"><FaGoogle/>login with google</button>
        <button className="btn"><FaGithub/>login with github</button>
      </div>
    </div>
  );
};

export default Rightside;
