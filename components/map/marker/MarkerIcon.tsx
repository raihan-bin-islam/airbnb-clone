import React, { forwardRef } from "react";
import data from "../../../data/places.json";

type Props = {
  id: number;
  price: number;
  active: boolean;
};

const MarkerIcon = forwardRef(({ id, price, active }: Props, ref) => {
  const { results } = data;
  const filteredResult = results.filter(
    ({ id: resultId }, index) => resultId === id
  )[0];
  const {
    id: cardId,
    address,
    type,
    bedrooms,
    images,
    price: cardPrice,
    rating,
  } = filteredResult;

  return (
    <>
      <h2
        className={`relative px-2 py-1 m-5 font-bold transition-transform z-10 bg-white shadow-md  rounded-2xl w-fit font-poppins hover:scale-110 ${
          active ? "bg-textDark text-white" : "text-textDark"
        }`}
      >
        ${price}
      </h2>
    </>
  );
});

MarkerIcon.displayName = "Marker Icon";
export default MarkerIcon;
