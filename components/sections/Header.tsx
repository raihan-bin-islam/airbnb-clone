import Image from "next/image";
import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 z-50 grid items-center justify-between grid-cols-3 p-4 bg-white shadow-md">
      <div className="relative w-full h-10">
        {/* <Image
          src="https://images2.imgbox.com/42/7a/EDq2kZBV_o.png"
          alt="airbnb-logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        /> */}
      </div>
      <div className="relative flex items-center justify-between px-2 py-2 transition-shadow duration-300 border-2 rounded-full shadow-sm hover:shadow-md">
        <input
          className="flex items-start w-full pl-4 outline-none"
          type="text"
          placeholder="Search"
        />
        <MagnifyingGlassIcon className="p-2 text-white rounded-full cursor-pointer h-9 bg-primary" />
      </div>
      <div className="relative flex justify-end h-10 space-x-4">
        <GlobeAltIcon className="p-2 cursor-pointer text-textDark" />
        <div className="flex justify-between p-1 space-x-2 border-2 rounded-full">
          <Bars3Icon className="p-1 cursor-pointer text-textDark" />
          <UserCircleIcon className="cursor-pointer text-textLight" />
        </div>
      </div>
    </header>
  );
};

export default Header;
