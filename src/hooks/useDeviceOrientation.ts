import { useEffect, useState } from "react";
import { useOrientation } from "react-use";

type OrientationType = "portrait" | "landscape";

const useDeviceOrientation = (): [OrientationType, boolean] => {
  const orientation = useOrientation();
  const [isPortrait, setIsPortrait] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  }, [orientation]);

  return [isPortrait ? "portrait" : "landscape", isSmallScreen];
};

export default useDeviceOrientation;
