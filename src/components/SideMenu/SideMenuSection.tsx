import React from "react";
import SideMenuList from "@/components/SideMenu/SideMenuList";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface ISideMenuDataItem {
  title: string;
  list: string[];
  nextArrow?: boolean | undefined;
}

interface ISideMenuSection {
  data: ISideMenuDataItem[];
  translate: string;
  handleMenuNext?: (() => void | undefined) | undefined;
  handleMenuPrev?: (() => void | undefined) | undefined;
  handleSetNextMenu?: ((value: string) => void | undefined) | undefined;
}

const SideMenuSection = ({
  data,
  translate,
  handleMenuNext ,
  handleMenuPrev,
  handleSetNextMenu ,
}: ISideMenuSection) => {
  return (
    <div
      className={`min-w-[270px] sm:min-w-[365px] ${translate} duration-200 ease-in-out`}
    >
      <ul className="pt-2">
        {handleMenuPrev && (
          <Link
            href="#"
            onClick={handleMenuPrev}
            className="w-full pl-9 py-3 pr-5 mt-2 flex gap-2 items-center border-b border-gray-400 hover:bg-gray-200 focus-visible:bg-gray-200"
          >
            <span className="text-gray-500 w-5 h-5">
              <AiOutlineArrowLeft className="w-full h-full" />
            </span>
            <p className="font-semibold uppercase text-sm">Main Menu</p>
          </Link>
        )}
        {data?.map((item) => (
          <SideMenuList
            key={item.title}
            title={item.title}
            list={item.list}
            nextArrow={item.nextArrow}
            handleMenuNext={handleMenuNext}
            handleSetNextMenu={handleSetNextMenu}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideMenuSection;
