import { motion, useAnimation } from "framer-motion";
import useDominantPixel from "hooks/useDominantPixel";
import { HexToRGB } from "lib/color-quantizatoin";
import React, { useEffect, useState } from "react";

type Props = {};

const BulletAnimation = (props: Props) => {
  const [animate, setAnimate] = useState(false);
  const animationControls = useAnimation();
  const [x, setX] = useState(0);
  const [hex] = useDominantPixel({ src: "/test-image-1.jpg", depth: 2 });

  useEffect(() => {
    console.log(hex);
    const colors = ["#999575", "#9e9977", "#aaa27d", "#b4ab84", "#b9ae87"];
    const rgb = colors.map((data) => HexToRGB({ hex: data }));
    console.log(rgb);
  }, [hex]);

  useEffect(() => {
    const sequence = async () => {
      await animationControls.start({
        // transformOrigin: "left",
        // scaleX: 2.7,
        // scaleY: 0.6,
        width: 55,
        height: 10,
        transition: {
          ease: "easeOut",
          duration: 0.25,
        },
      });

      await animationControls.start({
        x: x,
        width: 20,
        height: 20,
        transition: {
          ease: "easeIn",
          delay: 0.25,
          duration: 0.15,
        },
      });
    };
    animate === true && sequence();
  }, [animate, animationControls, x]);

  return (
    <div className={`relative flex items-center m-10 space-x-2`}>
      <div
        className="relative z-10 flex items-center space-x-2"
        onClick={() => {
          setAnimate(true);
          setX((prev) => prev + 28);
          setTimeout(() => {
            setAnimate(false);
          }, 750);
        }}
      >
        <div className="w-5 h-5 border border-yellow-500 rounded-full"></div>
        <div className="w-5 h-5 border border-yellow-500 rounded-full "></div>
        <div className="w-5 h-5 border border-yellow-500 rounded-full "></div>
      </div>

      <motion.div
        className="absolute flex items-center justify-center w-5 h-5 m-0 -left-2"
        animate={animationControls}
      >
        <div
          // This will let us control the animation using the animationControls object

          className={`z-0  w-[60%] h-[60%] bg-black rounded-[50%] transition-all`}
        ></div>
      </motion.div>
      <div id="color-pallette" className="flex pl-12 space-x-2">
        {hex?.map((data, index) => (
          <div
            key={index}
            className="w-12 h-12"
            style={{ background: `${data}` }}
          ></div>
        ))}
      </div>
      <div
        className="w-16 h-16"
        style={{
          background: `linear-gradient(60deg, ${hex ? hex[1] : "#000"},${
            hex ? hex[2] : "#fff"
          })`,
        }}
      ></div>
    </div>
  );
};

export default BulletAnimation;
