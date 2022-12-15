import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

type Props = {
  src: string;
  open: boolean;
  closeModal: () => void;
  nextImage: () => void;
  prevImage: () => void;
};

const ImagePreviewModal = ({
  src,
  open,
  closeModal,
  nextImage,
  prevImage,
}: Props) => {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    default: { ease: "easeInOut", duration: 0.25 },
  };

  return (
    <>
      {open && (
        <>
          <div
            className="absolute top-0 left-0 w-screen h-screen overflow-hidden"
            style={{ margin: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute z-50 px-4 py-2 text-white bg-gray-900 rounded-full top-10 right-10"
            >
              X
            </button>
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={transition}
              className="relative z-50 w-1/2 mx-auto -translate-y-1/2 top-1/2 h-2/3"
            >
              <Image
                fill
                style={{ objectFit: "cover" }}
                alt="gallery-image"
                src={src}
              />
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute z-50 px-4 py-2 text-white bg-gray-900 rounded-full top-1/2 right-10"
            >
              {">"}
            </button>
            <button
              onClick={prevImage}
              className="absolute z-50 px-4 py-2 text-white bg-gray-900 rounded-full top-1/2 left-10"
            >
              {"<"}
            </button>
          </div>
          <div
            className="absolute top-0 left-0 z-30 w-screen h-screen m-0 bg-black opacity-20"
            style={{ margin: 0 }}
          ></div>
        </>
      )}
    </>
  );
};

export default ImagePreviewModal;
