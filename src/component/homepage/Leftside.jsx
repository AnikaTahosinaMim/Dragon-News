import Link from "next/link";
import React from "react";

const Leftside = ({ cetagories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All catagory</h2>
      <ul className="flex flex-col gap-3">
        {cetagories.map((cetagory) => (
          <li
            key={cetagory.category_id}
            className={` text-sm font-bold text-center items-center justify-center rounded-md ${activeId === cetagory.category_id && "bg-gray-200"}`}
          >
            <Link className="block py-3" href={`/category/${cetagory.category_id}`}>
              {cetagory.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leftside;
