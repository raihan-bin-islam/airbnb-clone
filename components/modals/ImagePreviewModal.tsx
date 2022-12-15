import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

type Props = {
  imageIndex: number;
  open: boolean;
  images: [];
  closeModal: () => void;
};

const ImagePreviewModal = ({ imageIndex, open, images, closeModal }: Props) => {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    default: { ease: "easeInOut", duration: 0.25 },
  };

  const [srcIndex, setSrcIndex] = useState(imageIndex);

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
                style={{ objectFit: "contain" }}
                alt="gallery-image"
                src={images[srcIndex]}
              />
            </motion.div>

            <button
              onClick={() =>
                setSrcIndex((prev) =>
                  prev < images?.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute z-50 px-4 py-2 text-white bg-gray-900 rounded-full top-1/2 right-10"
            >
              {">"}
            </button>
            <button
              onClick={() =>
                setSrcIndex((prev) =>
                  prev <= 0 ? images?.length - 1 : prev - 1
                )
              }
              className="absolute z-50 px-4 py-2 text-white bg-gray-900 rounded-full top-1/2 left-10"
            >
              {"<"}
            </button>
          </div>
          <div
            className="absolute top-0 left-0 z-30 w-screen h-screen m-0 bg-black opacity-70"
            style={{ margin: 0 }}
          ></div>
          {/* Image Galery */}
          <div className="absolute z-50 flex space-x-5 -translate-x-1/2 bottom-12 left-1/2">
            {images?.map((src, index) => (
              <div
                key={index}
                className={`relative w-16 h-16 overflow-hidden rounded-md cursor-pointer ${
                  index === srcIndex
                    ? "border shadow-md shadow-primary/50 border-trueGray-300"
                    : ""
                }`}
                onClick={() => setSrcIndex(index)}
              >
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  alt="gallery-image"
                  src={src}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ImagePreviewModal;
