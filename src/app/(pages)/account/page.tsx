"use client";
import Image from "next/image";
import LoginSign from "@/components/Header/Account/LoginSign";
import List from "@/components/Header/Account/List";
import { yourAccountList, yourLists } from "@/components/Header/Account/data";
import { useAppSelector } from "@/app/redux/hook";
import { FaUserCircle } from "react-icons/fa";
import React from "react";


const AccountPage = () => {
  const userInfo = useAppSelector((state) => state.app.userInfo);

  return (
    <div className="grow flex flex-col text-black">
      <div className="w-max flex mx-auto gap-4 my-4 justify-center items-center text-xl">
        {userInfo ? (
          <div className="shrink-0">
            <Image
              width={40}
              height={40}
              src={userInfo?.image}
              alt="userImage"
              className="rounded-full object-cover self-start"
            />
          </div>
        ) : (
          <FaUserCircle className="w-6 h-6" />
        )}
        <p>Hello, {userInfo?.name || "sign in"}</p>
      </div>
      <LoginSign />
      <div className="grow flex-col s:flex-row flex m-2 text-xs">
        <List list={yourLists} />
        <hr className="w-full s:w-[1px] h-auto bg-gray-300" />
        <List list={yourAccountList} />
      </div>
    </div>
  );
};

export default AccountPage;
