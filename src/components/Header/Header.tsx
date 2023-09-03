"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/app/redux/hook";
import { useSession } from "next-auth/react";
import { addUser } from "@/app/redux/features/appSlice";
import SearchField from "@/components/SearchField/SearchField";
import Location from "@/components/Header/Location/Location";
import SideMenu from "@/components/SideMenu/SideMenu";
import SubHeaderMenu from "@/components/Header/SubHeaderMenu";
import { LuMenu } from "react-icons/lu";
import useSideMenuOpen from "@/hooks/useSideMenuOpen";
import Account from "@/components/Header/Account/Account";
import FavoritesLink from "@/components/Header/FavoritesLink";
import AccountMobile from "@/components/Header/Account/AccountMobile";
import CartLink from "@/components/Header/CartLink";

const Header = () => {
  const { data: session } = useSession();
  const { isOpen, setOpenSideMenu, showSideMenu } = useSideMenuOpen();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session) {
      dispatch(addUser(session.user));
    }
  }, [dispatch, session]);

  return (
    <>
      <div className="w-full h-auto min-h-[80px] flex items-center bg-custom_blue text-lightText sticky top-0 z-50">
        <div
          className="h-full w-full p-2 mx-auto
        flex-wrap lgx:flex-nowrap
      inline-flex items-center justify-between gap-1 lg:gap-2 lgx:gap-3 px-2"
        >
          <div className="flex items-start gap-2 pt-1">
            <button
              onClick={showSideMenu}
              className="flex items-center justify-center lgx:hidden pt-1"
            >
              <LuMenu className="text-2xl" />
            </button>
            <Link
              href={"/"}
              className="w-24 md:w-max order-1 h-full px-2 border border-transparent
          hover:border-white cursor-pointer duration-300 flex items-center justify-start shrink-0 py-1"
              aria-label="Logo - go to home page"
            >
              <Image
                width={100}
                height={50}
                className="w-28 object-cover"
                src="/images/logo.webp"
                alt="logoImg"
              />
            </Link>
          </div>
          <div className="hidden xxl:inline-flex order-2">
            <Location />
          </div>
          <SearchField />
          <div className="md:pt-1 w-full justify-between s:w-fit order-4 flex gap-2 self-stretch items-center">
            <Account />
            <AccountMobile />
            <div className="hidden md:flex h-full">
              <FavoritesLink />
            </div>
            <CartLink />
          </div>
        </div>
      </div>
      <SideMenu open={isOpen} setOpen={setOpenSideMenu} />
      <SubHeaderMenu />
    </>
  );
};

export default Header;
