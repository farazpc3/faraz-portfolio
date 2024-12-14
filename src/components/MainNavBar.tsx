import React from "react";
import styled from "styled-components";
import useDeviceOrientation from "../hooks/useDeviceOrientation"; // Ensure the path is correct

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  color: #fff;
  padding: 10px;
  position: fixed;
  width: 100%;
  transition: all 0.3s ease;

  &.bottom {
    bottom: 0;
    left: 0;
  }

  &.top {
    top: 0;
    left: 0;
  }

  &.right {
    right: 0;
    top: 0;
    height: 100%;
    flex-direction: column;
    width: auto;
  }

  &.left {
    left: 0;
    top: 0;
    height: 100%;
    flex-direction: column;
    width: auto;
  }
`;

const MainNavBar: React.FC = () => {
  const position = useDeviceOrientation();

  return (
    <NavigationBar className={position}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </NavigationBar>
  );
};

export default MainNavBar;
