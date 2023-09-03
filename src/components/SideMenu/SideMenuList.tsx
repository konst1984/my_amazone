import React from "react";
import Link from "next/link";

interface ISideMenuLi {
  title: string;
  list: string[];
  nextArrow?: boolean | undefined;
  handleMenuNext?: (() => void | undefined) | undefined;
  handleSetNextMenu?: ((value: string) => void | undefined) | undefined;
}

const SideMenuList = ({
  title,
  list,
  nextArrow = false,
  handleMenuNext,
  handleSetNextMenu,
}: ISideMenuLi) => {
  const handleClick = (title) => {
    if (handleMenuNext) {
      handleMenuNext();
    }
    if (handleSetNextMenu) {
      handleSetNextMenu(title);
    }
  };

  return (
    <>
      <li>
        <p className="pt-3 pb-2 pl-9 pr-5 capitalize font-semibold text-lg">
          {title}
        </p>
      </li>
      {list.map((item) => (
        <li key={item}>
          <Link
            href="#"
            className="w-full text-sm py-3 pl-9 pr-5 capitalize flex items-center justify-between hover:bg-gray-200 focus-visible:bg-gray-200"
            onClick={nextArrow ? () => handleClick(item) : () => {}}
          >
            <span>{item}</span>
            {nextArrow && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </Link>
        </li>
      ))}
      <li className="border-b border-zinc-300 my-[5px]"></li>
    </>
  );
};

export default SideMenuList;
