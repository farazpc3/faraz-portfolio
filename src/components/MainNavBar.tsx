import React from "react";
import styled from "styled-components";
import useDeviceOrientation from "../hooks/useDeviceOrientation";

const NavigationBar = styled.div<{ position: string }>`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: fixed;
  width: 100%;
  transition: all 0.3s ease;

  ${({ position }) =>
    position === "bottom" &&
    `
    bottom: 0;
    width: 100%;
    height: 9vmin;
  `}

  ${({ position }) =>
    position === "top" &&
    `
    top: 0;
    width: 100%;
    height: 9vmin;
  `}

  ${({ position }) =>
    position === "right" &&
    `
    right: 0;
    height: 100%;
    width: 9vmin;
    flex-direction: column;
  `}
`;

const MainNavBar: React.FC = () => {
  const [orientation, isSmallScreen] = useDeviceOrientation();
  let position: string;

  if (isSmallScreen) {
    position = orientation === "portrait" ? "bottom" : "right";
  } else {
    position = "top";
  }

  return (
    <NavigationBar position={position}>
      <a href="#home">🏠 Home</a>
      <a href="#search">🔍 Search</a>
      <a href="#notifications">🔔 Notifications</a>
      <a href="#profile">👤 Profile</a>
    </NavigationBar>
  );
};

export default MainNavBar;
