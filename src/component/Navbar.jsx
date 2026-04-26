"use client";

import Link from "next/link";
import React from "react";
import avatarImg from "@/app/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session,isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, "from navbar image");

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

      { isPending? "Loading" : user ? (
        <div className="flex items-center gap-2">
          <h2>{user?.name}</h2>
          <Image
            src={user?.image || avatarImg}
            alt="imgae"
            width={40}
            height={40}
          ></Image>

          <Link href={"/login"}>
            <button className="btn bg-black text-white">Logout</button>
          </Link>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="btn bg-blue-500 text-white">LogIn</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
