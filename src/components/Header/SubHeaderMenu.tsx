"use client";
import React from "react";
import { LuMenu } from "react-icons/lu";
import Location from "@/components/Header/Location/Location";
import SideMenu from "@/components/SideMenu/SideMenu";
import useSideMenuOpen from "@/hooks/useSideMenuOpen";
import FavoritesLink from "@/components/Favorites/FavoritesLink";

const listItems = [
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
];

const SubHeaderMenu = () => {
  const {openSideMenu, setOpenSideMenu, showSideMenu} = useSideMenuOpen();
  return (
    <>
      <div className="w-full min-h-[40px] bg-custom_light_blue text-sm text-white px-4 py-2 flex items-center">
        <button
          onClick={showSideMenu}
          className="hidden lgx:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300"
        >
          <LuMenu className="text-xl" /> All
        </button>
        {listItems.map((item) => (
          <p
            key={item}
            className="hidden lgx:inline-flex shrink-0 items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300"
          >
            {item}
          </p>
        ))}
        <div className="inline-block shrink-0 xxl:hidden">
          <Location />
        </div>
        <div className="flex md:hidden">
          <FavoritesLink />
        </div>
      </div>
      <SideMenu open={openSideMenu} setOpen={setOpenSideMenu} />
    </>
  );
};

export default SubHeaderMenu;
