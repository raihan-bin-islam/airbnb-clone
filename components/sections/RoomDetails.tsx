import ImagePreviewModal from "@components/modals/ImagePreviewModal";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  name: string;
  rating?: number;
  isSuperhost: boolean;
  address: string;
  images: [];
};

const RoomDetails = ({ name, rating, isSuperhost, address, images }: Props) => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <div className="pt-5 mx-auto space-y-3 max-w-7xl">
      {/* Name */}
      <h2 className="text-2xl font-bold text-gray-800 ">{name}</h2>
      {/* Address */}
      <div className="flex space-x-5">
        <span className="flex">
          <StarIcon className="h-5" />
          {rating ?? "New"}
        </span>
        {isSuperhost && <p>Superhost</p>}
        <h2>{address}</h2>
      </div>
      {/* Address */}
      <div className="relative">
        <div className="grid grid-cols-4 h-[35rem] m-auto rounded-xl space-x-3  overflow-hidden ">
          {images
            .filter((data: {}, index: number) => index < 5)
            .map((src: string, index: number) => (
              <div
                key={index}
                className={` group relative cursor-pointer ${
                  index === 0 && "col-span-2 row-span-2"
                } ${(index === 1 || index === 2) && "mb-3"}`}
                onClick={() => {
                  setOpen(true);
                  setSrc("");
                }}
              >
                <Image
                  className="h-full"
                  src={src}
                  alt="banner-img"
                  fill
                  style={{ objectFit: "cover", aspectRatio: 1 }}
                />
                <span className="transition-opacity duration-300 opacity-0 group-hover:gradient-mask"></span>
              </div>
            ))}
        </div>
        <button className="absolute py-2 font-medium text-gray-800 transition-all bg-white border border-gray-800 rounded-lg px-9 bottom-5 right-5 hover:shadow-md hover:shadow-primary active:scale-95">
          See all photos
          <div className="absolute left-0 top-[18px]">
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[12px] top-1/2 translate-y-1.5"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[18px] top-1/2 translate-y-1.5"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[24px] top-1/2 translate-y-1.5"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[12px] top-1/2"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[18px] top-1/2"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[24px] top-1/2"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[12px] top-1/2 -translate-y-1.5"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[18px] top-1/2 -translate-y-1.5"></span>
            <span className="absolute rounded-full w-[4px] h-[4px] bg-gray-800 left-[24px] top-1/2 -translate-y-1.5"></span>
          </div>
        </button>
      </div>
      <ImagePreviewModal src={src} open={open} onClick={() => setOpen(true)} />
    </div>
  );
};

export default RoomDetails;
