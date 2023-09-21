import React from "react";
import LoginSign from "@/components/Header/Account/LoginSign";
import List from "@/components/Header/Account/List";
import { useAppSelector } from "@/app/redux/hook";
import { AnimatePresence, motion } from "framer-motion";
import { yourAccountList, yourLists } from "@/components/Header/Account/data";

const AccountDropdownMenu = ({ show }: { show: boolean }) => {
  const userInfo = useAppSelector((state) => state.app.userInfo);

  const position = !userInfo
    ? "top-[100%] -right-[75%]"
    : "top-[100%] -right-[50%]";
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            exit={{ opacity: 0 }}
            className={` 
          absolute ${position} w-max bg-gray-200 text-black p-1 text-xs
          before:block before:absolute before:w-5 before:h-5 before:bg-gray-200 before:-top-1 before:rotate-45 before:left-[70%] z-20`}
          >
            <div className="flex flex-col border border-gray-300 ">
              <LoginSign />
              <div className="flex m-2">
                <List list={yourLists} />
                <hr className="w-[1px] h-auto bg-gray-300" />
                <List list={yourAccountList} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

AccountDropdownMenu.displayName = "AccountDropdownMenu";

export default AccountDropdownMenu;
