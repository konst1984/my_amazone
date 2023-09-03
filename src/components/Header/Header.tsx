"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { useSession } from "next-auth/react";
import { addUser } from "@/app/redux/features/appSlice";
import SearchField from "@/components/SearchField/SearchField";
import Location from "@/components/Header/Location/Location";
import SideMenu from "@/components/SideMenu/SideMenu";
import SubHeaderMenu from "@/components/Header/SubHeaderMenu";
import { LuMenu } from "react-icons/lu";
import useSideMenuOpen from "@/hooks/useSideMenuOpen";
import Account from "@/components/Header/Account/Account";
import FavoritesLink from "@/components/Favorites/FavoritesLink";
import AccountMobile from "@/components/Header/Account/AccountMobile";

const Header = () => {
  const { data: session } = useSession();
  const {openSideMenu, setOpenSideMenu, showSideMenu} = useSideMenuOpen();

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.app.cart);

  useEffect(() => {
    if (session) {
      dispatch(addUser(session.user));
    }
  }, [dispatch, session]);

  return (
    <>
      <div className="w-full h-auto min-h-[80px] flex items-center bg-custom_blue text-lightText sticky top-0 z-50">
        <div
          className="h-full w-full p-3 pt-4 mx-auto
        flex-wrap lgx:flex-nowrap
      inline-flex items-start justify-between gap-1 lg:gap-2 lgx:gap-3 px-4"
        >
          <div className="flex items-start gap-2 pt-1">
            <button
              onClick={showSideMenu}
              className="flex items-center justify-center lgx:hidden"
            >
              <LuMenu className="text-2xl" />
            </button>
            <Link
              href={"/"}
              className="w-24 md:w-max order-1 h-full px-2 border border-transparent
          hover:border-white cursor-pointer duration-300 flex items-center justify-start shrink-0"
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
          <div className="md:pt-1 w-full justify-between s:w-fit order-4 flex gap-2 self-stretch">
            <Account />
            <AccountMobile />
            <div className="hidden md:flex">
              <FavoritesLink />
            </div>
            <Link
              href={"/cart"}
              className="shrink-0 order-6 justify-start
              flex items-center sm:px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
            >
              <Image
                width={100}
                height={50}
                className="w-auto object-cover h-8 self-start"
                src="/images/cartIcon.webp"
                alt="cart icon"
              />
              <p className="text-xs text-white font-bold mt-2">Cart</p>
              <span className="absolute text-custom_yellow left-[21px] text-sm top-0 sm:left-[29px] font-semibold">
                {cart ? cart.length : 0}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <SideMenu open={openSideMenu} setOpen={setOpenSideMenu} />
      <SubHeaderMenu />
    </>
  );
};

export default Header;
