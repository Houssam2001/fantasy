"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
import {
  EyeIcon,
  //   EyeOffIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      //   await signIn("credentials", {
      //     redirect: false,
      //     email,
      //     password,
      //   });
      router.push("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center  mx-14   mt-14 min-h-screen  ">
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center flex-row gap-4 items-center"
      >
        <h1 className="text-xl font-bold mb-4 mx-5 text-center text-[#37003C]">
          SignIn{" "}
        </h1>
        <div className="flex items-center z-40 ">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-serif  text-[#37003C] dark:text-white"
            >
               Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border w-72 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light border-b-2 "
              placeholder="email"
              required
            />
          </div>
        </div>
        <div className="flex items-center z-40  gap-4">
          <div className="mb-5 ">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
               Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
            
          </div>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="focus:outline-none"
          >
            {showPassword ? (
              <EyeIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400" />
            )}
          </button>
          </div>
          
        <button
          type="submit"
          className="bg-gradient-to-r text-black dark:text-gray-300 from-[#00FE8E] to-[#02EFFB] shadow-lg px-28 py-5  text-sm font-bold rounded-sm  hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
        >
          SignIn
        </button>
        <h1 className="text-lg font-bold mb-4  text-center text-[#37003C]">
          Forgot your password?{" "}
        </h1>
      </form>
      <p className="text-center mt-4">
        Don&apos;t have an account?{" "}
        <a href="/auth/register" className="text-blue-500 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
}
