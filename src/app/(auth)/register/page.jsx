"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Regsisterpages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = async (data) => {
    const { name, email, password, photo} = data;
    console.log(data);
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error, "data and error");
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SingUp successfully");
    }
    console.log(errors, name, photo, "errors");
  };

  console.log(errors,  "errors");
  return (
    <div className="text-center justify-center items-center mx-auto max-w-[80vh] container">
      <h2 className="text-xl font-bold">Register your account</h2>
      <form onSubmit={handleSubmit(handleClick)}>
        <fieldset className="fieldset bg-base-200 mx-auto text-center items-center border-base-300 rounded-box w-xs border p-6">
          <label className="label">Your name</label>
          <input
            type="text"
            className="input"
            placeholder="Your Name"
            {...register("name", { required: "name is required" })}
          />
          {errors.name && (
            <p className="text-red-500"> {errors.name.message} </p>
          )}
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input"
            placeholder="Your Photo"
            {...register("photo", { required: "photo is required" })}
          />
          {errors.photo && (
            <p className="text-red-500"> {errors.photo.message} </p>
          )}
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
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && (
            <p className="text-red-500"> {errors.password.message} </p>
          )}

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Regsisterpages;
