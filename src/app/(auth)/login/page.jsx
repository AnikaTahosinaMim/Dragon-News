"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";


const Loginpages = () => {
  const { showpass, setShowpass } = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error, "response and errors");
  };
  console.log(errors, "errors");
  return (
    <div className="text-center justify-center items-center mx-auto max-w-[80vh] container">
      <h2 className="text-xl font-bold">Login your account</h2>
      <form onSubmit={handleSubmit(handleClick)}>
        <fieldset className="fieldset bg-base-200 mx-auto text-center items-center border-base-300 rounded-box w-xs border p-6">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <p className="text-red-500"> {errors.email.message} </p>
          )}

          <label className="label">Password</label>
          <input
            type={showpass ? "text" : "password"}
            className="input"
            placeholder="Password"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && (
            <p className="text-red-500"> {errors.password.message} </p>
          )}
           <span onClick={()=> setShowpass(!showpass)}>
            <FaEye></FaEye>
           </span>

          <button className="btn btn-neutral mt-4">Login</button>
          <p className="mt-3">
            Dont t Have An Account ?{" "}
            <Link href={"/register"} className="text-red-500">
              Register
            </Link>{" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Loginpages;
