"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { removeUser } from "@/app/redux/features/appSlice";

const SignInOut = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.app.userInfo);
  const SignItemMenu = userInfo ? "Sign out" : "Sign in";

  const handleClick = () => {
    if (SignItemMenu === "Sign in") {
      signIn();
    }
    if (SignItemMenu === "Sign out") {
      signOut();
      dispatch(removeUser());
    }
  };

  return (
    <li key={SignItemMenu}>
      <Link
        href="#"
        className="w-full text-sm py-4 pl-9 pr-5 capitalize bg-custom_yellow flex items-center justify-between hover:bg-gray-300 focus-visible:bg-gray-300"
        onClick={handleClick}
      >
        <span>{SignItemMenu}</span>
      </Link>
    </li>
  );
};

export default SignInOut;
