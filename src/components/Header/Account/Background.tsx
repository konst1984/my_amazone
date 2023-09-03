import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

const Background = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-30"
            />,
            document.body
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default Background;
