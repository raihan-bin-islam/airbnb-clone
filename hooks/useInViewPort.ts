import { MutableRefObject, useEffect, useState } from "react";
const useInViewPort = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    ref.current !== null && observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useInViewPort;
