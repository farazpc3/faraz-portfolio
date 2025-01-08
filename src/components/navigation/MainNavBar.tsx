import React from "react";
import styled from "styled-components";
import "./MainNavBar.css";
import useDeviceOrientation from "../../hooks/useDeviceOrientation";
import HomeButton from "./HomeButton";
import Logo from "./Logo";
import Search from "./Search";
import ProjectsButton from "./ProjectsButton";
import WorkExperienceButton from "./WorkExperienceButton";
import EducationButton from "./EducationButton";
import ContactButton from "./ContactButton";
import SkillsButton from "./SkillsButton";
import SettingsButton from "./SettingsButton";
import AboutMeButton from "./AboutMeButton";


const NavigationBar = styled.div<{ position: string }>`
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
    <NavigationBar className="mainNavigationBar" position={position}>
      <div className="mainNavButtons">
        <Logo />
        <Search />
        <HomeButton />
        <ProjectsButton />
        <WorkExperienceButton />
        <EducationButton />
        <SkillsButton />
        <SettingsButton />
        <ContactButton />
        <AboutMeButton />



      </div>
    </NavigationBar>
  );
};

export default MainNavBar;
