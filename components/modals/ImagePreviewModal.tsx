import React, { useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  src: string;
  open: boolean;
  onClick: () => void;
};

const ImagePreviewModal = ({ src, open, onClick }: Props) => {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    default: { ease: "easeInOut", duration: 0.5 },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={transition}
          className="absolute top-0 left-0 w-screen h-screen"
        >
          <button
            onClick={onClick}
            className="absolute z-50 px-4 py-2 text-white bg-gray-900 rounded-full top-10 right-10"
          >
            X
          </button>
          <div className="relative z-50 w-1/2 mx-auto -translate-y-1/2 top-1/2 h-2/3">
            <Image
              fill
              style={{ objectFit: "cover" }}
              alt="gallery-image"
              src={src}
            />
          </div>
          <div className="absolute top-0 left-0 z-30 w-screen h-screen bg-black opacity-20"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreviewModal;
