import { useEffect, useState } from "react";

const mobileViewport = 640;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    ...windowSize,
    isMobileViewport: mobileViewport >= windowSize.width,
  };
};

export default useWindowSize;
