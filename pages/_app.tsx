import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import DefaultLoader from "@components/loaders/DefaultLoader";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("end");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return loading ? (
    <DefaultLoader />
  ) : (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}
