"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Rightside = () => {
  const handleRightSide = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data,"googlr data");
  };
  const handleGithubSide = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data,"github data");
  };
  return (
    <div>
      <h2 className="text-lg font-bold">Login With</h2>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleRightSide}
          className="btn text-blue-500 border-blue-500"
        >
          <FaGoogle />
          login with google
        </button>
        <button onClick={handleGithubSide} className="btn">
          <FaGithub />
          login with github
        </button>
      </div>
    </div>
  );
};

export default Rightside;
