import React from "react";

type Props = {};

const PlaceCardSkeleton = (props: Props) => {
  return (
    // Width should be set to full when design is complete
    <div className="relative w-full p-2 my-2 cursor-pointer select-none rounded-xl animate-pulse">
      <div className="relative w-full bg-gray-300 rounded-xl">
        <div className="relative flex w-full overflow-hidden select-none aspect-square rounded-xl "></div>
        {/* Title & Rating */}
        <div className="absolute z-50 text-[15px] flex justify-between w-full p-5 bg-gray-400 shadow-md -bottom-1 rounded-xl">
          <h2 className="w-1/2 h-5 bg-gray-300 rounded-xl"></h2>
          <h2 className="w-12 h-5 bg-gray-300 rounded-xl"></h2>
        </div>
      </div>
      {/* Other Description */}
      <div className="pt-3">
        <h2 className="w-2/3 h-3 my-2 bg-gray-300 rounded-xl"></h2>
        <h2 className="w-1/2 h-3 my-2 bg-gray-300 rounded-xl"></h2>
        <h2 className="w-1/3 h-3 my-2 bg-gray-300 rounded-xl">
          <span className="font-normal text-textDark"></span>
        </h2>
      </div>
    </div>
  );
};

export default PlaceCardSkeleton;
