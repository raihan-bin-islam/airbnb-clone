import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DefaultLoader from "@components/loaders/DefaultLoader";

type Props = {
  children: ReactNode;
};

const FramerLayout = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

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
