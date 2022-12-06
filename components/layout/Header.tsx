import Image from "next/image";
import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 z-[100] grid items-center justify-between grid-cols-3 py-4 px-8 bg-white border-b-2 shadow-md">
      <div className="relative w-full h-10">
        {/* <Image
          src="https://images2.imgbox.com/42/7a/EDq2kZBV_o.png"
          alt="airbnb-logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
          sizes="(max-width: 1921px) 100%"
          priority
        /> */}
      </div>
      <div className="relative flex items-center justify-between px-2 py-2 transition-shadow duration-300 border-2 rounded-full shadow-sm hover:shadow-md ">
        <input
          className="flex items-start w-full pl-4 outline-none"
          type="text"
          placeholder="Search"
        />
        <MagnifyingGlassIcon className="hidden p-2 text-white rounded-full cursor-pointer md:inline-flex h-9 aspect-square bg-primary" />
      </div>
      <div className="relative flex items-center justify-end h-10 space-x-4">
        <div className="flex items-center h-full">
          <span className=" text-textLight">Become a host</span>
          <GlobeAltIcon className="h-full p-2 cursor-pointer text-textDark" />
        </div>
        <div className="flex justify-between h-full p-1 space-x-2 border-2 rounded-full">
          <Bars3Icon className="p-1 cursor-pointer text-textDark" />
          <UserCircleIcon className="cursor-pointer text-textLight" />
        </div>
      </div>
    </header>
  );
};

export default Header;
