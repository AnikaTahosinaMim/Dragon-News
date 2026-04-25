import Link from "next/link";
import React from "react";
import avatarImg from "@/app/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between my-8">
      <div></div>
      <ul className="flex items-center gap-2">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/carrer"}>Carrer</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <Image src={avatarImg} alt="imgae" width={40} height={40}></Image>
        <Link href={"/login"}>
          <button className="btn bg-black text-white">login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
