import Image from "next/image";
import React from "react";
import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center justify-between bg-white shadow-md p-4">
      <div className="relative h-10 w-full">
        <Image
          src="https://images2.imgbox.com/42/7a/EDq2kZBV_o.png"
          alt="airbnb-logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      <div className="relative flex items-center justify-between py-2 px-2 border-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
        <input className="flex items-start outline-none w-full pl-4" type="text" placeholder="Search" />
        <MagnifyingGlassIcon className=" h-9 bg-red-400 text-white p-2 rounded-full cursor-pointer" />
      </div>
      <div className="relative flex justify-end h-10">
        <GlobeAltIcon className="px-2 py-1 text-gray-500 cursor-pointer" />
        <div className="flex border-2 px-2 py-1 rounded-full space-x-2">
          <Bars3Icon className=" text-gray-500 cursor-pointer" />
          <UserCircleIcon className=" text-gray-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
