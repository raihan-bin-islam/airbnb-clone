import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-[650px]">
      <div className="absolute bg-[url('https://images2.imgbox.com/cb/c5/ekIu7nNc_o.jpg')] inset-0 z-50 bg-cover bg-center hero-animation-mask animate-hero-animation"></div>
      <Image
        src="https://images2.imgbox.com/66/d1/LSz8ZkQb_o.png"
        alt="hero-banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
};

export default HeroAnimation;
