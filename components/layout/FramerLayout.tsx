import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const FramerLayout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { ease: "anticipate", duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FramerLayout;
