import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2 className="font-bold text-center justify-center mx-auto flex flex-col text-purple-500">
        Not founded pages
      </h2>
      <Link href={"/"}>
        <button className="btn btn-primary text-center mx-auto justify-center items-center flex">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
