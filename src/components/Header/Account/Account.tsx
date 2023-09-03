"use client";
import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { BiCaretDown } from "react-icons/bi";
import { useAppSelector } from "@/app/redux/hook";
import Background from "@/components/Header/Account/Background";
import AccountDropdownMenu from "@/components/Header/Account/AccountDropdownMenu";
import Link from "next/link";
import useShowAccountDropdownMenu from "@/hooks/useShowAccountDropdownMenu";

const Account = () => {
  const refAccount = useRef<HTMLDivElement | null>(null);
  const userInfo = useAppSelector((state) => state.app.userInfo);
  const [show] = useShowAccountDropdownMenu(refAccount);

  return (
    <>
      <div
        className="relative h-full shrink-0 group hidden sm:block"
        tabIndex={0}
        ref={refAccount as RefObject<HTMLDivElement>}
      >
        {userInfo ? (
          <button className="justify-start flex items-center sm:px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <Image
              width={32}
              height={32}
              src={userInfo.image}
              alt="userImage"
              className="rounded-full object-cover self-start"
            />
            <div className="text-xs text-start text-gray-100 flex flex-col justify-between self-start">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p className="flex flex-row items-end">
                {userInfo.email}{" "}
                <span>
                  <BiCaretDown />
                </span>
              </p>
            </div>
          </button>
        ) : (
          <Link
            href="#"
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex sm:px-2 shrink-0 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] flex-col justify-start"
            role="button"
          >
            <p className="font-bold">Hello, sign in</p>
            <p className="flex text-white font-bold items-center">
              Account & Lists <BiCaretDown />
            </p>
          </Link>
        )}
        <AccountDropdownMenu show={show} />
      </div>
      <Background show={show} />
    </>
  );
};

export default Account;
