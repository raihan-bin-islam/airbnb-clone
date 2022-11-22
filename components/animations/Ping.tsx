import React from "react";

type Props = {
  animate: boolean;
  delay?: number;
  width: string;
  height: string;
};

const Ping = ({ animate, delay = 0, width, height }: Props) => {
  return (
    <div
      className={`absolute z-50 ${width} ${height} bg-transparent border rounded-full border-black ${
        animate
          ? `animate-ping-slow${delay > 0 ? `-delayed-${delay}` : ""}`
          : ""
      }`}
    ></div>
  );
};

export default Ping;
