import Ping from "@components/animations/Ping";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const [animate, setAnimate] = useState<boolean>(true);

  return (
    <div className="relative h-[750px]">
      <div className="relative h-full">
        <Image
          src="https://images2.imgbox.com/66/d1/LSz8ZkQb_o.png"
          alt="hero-banner"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 60%" }}
        />
      </div>
      <div className="absolute flex flex-col items-center space-y-8 -translate-x-1/2 top-2/3 left-1/2">
        <h2 className="text-4xl font-bold text-center text-white drop-shadow-dark">
          Book a trip <br /> Host travelers
        </h2>
        <div className="relative flex items-center justify-center ">
          <div
            className={`absolute z-10 w-3/4 h-8 bg-transparent border rounded-full border-black ${
              animate ? `animate-ping-slow-delayed-1` : ""
            }`}
          ></div>
          <div
            className={`absolute z-10 w-32 h-10 bg-transparent border rounded-full border-black ${
              animate ? `animate-ping-slow` : ""
            }`}
          ></div>

          <button
            onMouseEnter={() => setAnimate(false)}
            onMouseLeave={() => setAnimate(true)}
            className="relative z-20 flex items-center px-6 py-2 font-medium text-white transition-shadow bg-red-400 rounded-full shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 active:scale-95"
          >
            <MagnifyingGlassIcon className="w-4 h-4 mr-2 font-bold" /> Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
