import React from "react";
import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("@components/map/CustomMap.jsx"), {
  ssr: false,
});
// import MarkerIcon from "../../components/map/marker/MarkerIcon";

const Map = () => {
  return (
    <div>
      <CustomMap />
      {/* <MarkerIcon /> */}
    </div>
  );
};

export default Map;
