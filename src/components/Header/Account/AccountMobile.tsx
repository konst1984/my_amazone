import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/app/redux/hook";
import { AiOutlineUser } from "react-icons/ai";

const AccountMobile = () => {
  const userInfo = useAppSelector((state) => state.app.userInfo);

  return (
    <Link
      href="account"
      className="relative h-full shrink-0 group sm:hidden border border-transparent hover:border-white py-1"
    >
      <span className="flex items-center text-sm">
        <span>{userInfo ? "Sign out" : "Sign in"}</span>
        <span className="px-1">&#62;</span>
        <AiOutlineUser className="w-8 h-8" />
      </span>
    </Link>
  );
};

export default AccountMobile;
