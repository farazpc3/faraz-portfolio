import { useEffect, useState } from "react";
import { useOrientation } from "react-use";

type OrientationType = "bottom" | "top" | "left" | "right";

const useDeviceOrientation = (): OrientationType => {
  const orientation = useOrientation();
  const [position, setPosition] = useState<OrientationType>("bottom");

  useEffect(() => {
    switch (orientation.angle) {
      case 0:
        setPosition("bottom");
        break;
      case 90:
        setPosition("right");
        break;
      case -90:
        setPosition("left");
        break;
      case 180:
        setPosition("top");
        break;
      default:
        setPosition("bottom");
    }
  }, [orientation]);

  return position;
};

export default useDeviceOrientation;
