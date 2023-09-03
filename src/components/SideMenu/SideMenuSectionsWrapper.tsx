"use client";
import React, { useState } from "react";
import SideMenuSection from "@/components/SideMenu/SideMenuSection";
import {
  SideNextMenuData,
  SideStartMenuData,
} from "@/components/SideMenu/data/data";
import SignInOut from "@/components/SideMenu/SignInOut";

const SideMenuSectionsWrapper = () => {
  const [translate, setTranslate] = useState<string>("translate-x-0");
  const [nextMenu, setNextMenu] = useState<string>("");

  const handleMenuNext = () => {
    setTranslate("-translate-x-full");
  };
  const handleMenuPrev = () => {
    setTranslate("translate-x-0");
  };
  const handleSetNextMenu = (value) => {
    setNextMenu(value);
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <SideMenuSection
          data={SideStartMenuData}
          translate={translate}
          handleMenuNext={handleMenuNext}
          handleSetNextMenu={handleSetNextMenu}
        />
        <SignInOut />
      </div>
      <SideMenuSection
        data={SideNextMenuData[nextMenu]}
        translate={translate}
        handleMenuPrev={handleMenuPrev}
      />
    </div>
  );
};

export default SideMenuSectionsWrapper;
