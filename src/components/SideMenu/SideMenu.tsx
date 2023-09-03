import React, { RefObject, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/app/redux/hook";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useKeydown } from "@/hooks/useKeyDown";
import SideMenuSectionsWrapper from "@/components/SideMenu/SideMenuSectionsWrapper";
import { FaUserCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

interface ISideMenu {
  open: boolean;
  setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

const SideMenu = ({ open, setOpen }: ISideMenu) => {
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const userInfo = useAppSelector((state) => state.app.userInfo);

  useOutsideClick(sideMenuRef, () => setOpen(false), open);
  useKeydown("Escape", () => setOpen(false), open);

  return (
    <AnimatePresence>
      {open && (
        <>
          {createPortal(
            <div className="fixed inset-0 bg-black/50 z-[65]">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.3 }}
                exit={{ x: "-100%" }}
                className="relative max-w-[270px] sm:max-w-[365px] bg-gray-100 text-black"
                ref={sideMenuRef as RefObject<HTMLDivElement>}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-0 -right-10 flex items-center justify-center h-12 w-12 text-white"
                >
                  <CgClose className="w-8 h-8" />
                </button>
                <div className="flex items-center gap-2 p-2 justify-center text-white text-xl bg-custom_light_blue min-h-[50px]">
                  {userInfo ? (
                    <div className="shrink-0">
                      <Image
                        width={40}
                        height={40}
                        src={userInfo.image}
                        alt="userImage"
                        className="rounded-full object-cover self-start"
                      />
                    </div>
                  ) : (
                    <FaUserCircle className="w-6 h-6 mx-2" />
                  )}
                  Hello, {userInfo?.name || "sign in"}
                </div>
                <div className="overflow-auto h-screen pb-8">
                  <SideMenuSectionsWrapper />
                </div>
              </motion.div>
            </div>,
            document.body,
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
