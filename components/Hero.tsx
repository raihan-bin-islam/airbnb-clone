import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative">
      <div className="relative w-[800px] h-[700px]">
        <Image
          src="https://images2.imgbox.com/66/d1/LSz8ZkQb_o.png"
          alt="hero-banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-8">
        <h2 className="text-white text-center text-4xl drop-shadow-md">
          Get out and stretch <br /> your imagination
        </h2>
        <button className="flex items-center text-white font-medium bg-red-400 px-6 py-2 rounded-full shadow-sm hover:shadow-md active:scale-95 transition-shadow">
          <MagnifyingGlassIcon className="w-4 h-4 mr-2 font-bold" /> Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
