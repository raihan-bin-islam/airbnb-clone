import { motion } from "framer-motion";
import React from "react";

const DefaultLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-100">
      <svg
        width="65"
        height="70"
        viewBox="0 0 65 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 2.5,
            repeatDelay: 0.5,
            repeatType: "mirror",
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d="M32.3811 56.8943C35.1237 54.1317 40.0603 48.6066 41.498 40.1408C43.0562 30.9661 38.4148 27.0585 31.8326 27.0585C25.2277 27.0585 20.8908 33.2506 23.0565 41.9764C25.2505 50.8166 39.5118 66.8395 48.8365 67.9446C54.8701 68.6596 65.2918 62.4194 62.5492 51.3691C59.8067 41.9764 47.0821 19.6553 40.5 7.5C36.5 1.5 28.5152 1.5 25 7.16794C18.2495 18.0525 4.40712 47.5015 2.76158 51.9217C1.11604 56.3418 2.1034 61.3144 6.05266 64.6295C10.0019 67.9446 18.1199 69.0496 23.605 65.182C29.0901 61.3144 29.6386 59.6568 32.3811 56.8943Z"
          stroke="#FF5A5F"
          stroke-width="4"
        />
      </svg>
    </div>
  );
};

export default DefaultLoader;
