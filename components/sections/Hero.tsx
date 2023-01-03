import Ping from "@components/animations/Ping";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  onClickExplore: () => void;
};

const Hero = ({ onClickExplore }: Props) => {
  const [animate, setAnimate] = useState<boolean>(true);

  return (
    <div className="relative h-[650px]">
      <div className="relative h-full">
        <div className="absolute bg-[url('https://images2.imgbox.com/cb/c5/ekIu7nNc_o.jpg')] inset-0 z-50 bg-cover bg-center hero-animation-mask animate-hero-animation"></div>
        <Image
          src="https://images2.imgbox.com/66/d1/LSz8ZkQb_o.png"
          alt="hero-banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute flex flex-col items-center space-y-8 -translate-x-1/2 top-2/3 left-1/2">
        <h2 className="text-4xl font-bold text-center text-white max-sm:text-2xl drop-shadow-dark">
          Book a trip <br /> Host travelers
        </h2>
        <div className="relative flex items-center justify-center ">
          <div
            className={`absolute z-10 w-3/4 h-8 bg-transparent border-2 rounded-full border-red-400 ${
              animate ? `animate-ping-slow-delayed-1` : "hidden"
            }`}
          ></div>
          <div
            className={`absolute z-10 w-32 h-10 bg-transparent border rounded-full border-primary ${
              animate ? `animate-ping-slow` : "hidden"
            }`}
          ></div>

          <button
            onMouseEnter={() => setAnimate(false)}
            onMouseLeave={() => setAnimate(true)}
            onClick={onClickExplore}
            className="relative z-20 flex items-center px-6 py-2 font-medium text-white transition-shadow rounded-full shadow-sm bg-primary shadow-gray-700 hover:shadow-md hover:shadow-gray-700 active:scale-95"
          >
            <MagnifyingGlassIcon className="w-4 h-4 mr-2 font-bold" /> Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
