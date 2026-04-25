import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center w-[80vh] mx-auto">
      <h2>Loading</h2>
      <span className="loading loading-spinner text-accent"></span>
    </div>
  );
};

export default loading;
