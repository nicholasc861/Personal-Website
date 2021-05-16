import React, { useRef, useEffect } from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import {
  scrollreveal,
  srBottomConfig,
  srRightConfig,
} from "../utils/scrollreveal";

import FoodDeadline from "../assets/Portfolio/FoodDeadline.png";
import SlackOff from "../assets/Portfolio/Slackoff.png";
import Github from "../assets/github.svg";

const Projects = styled.div`
  padding: 50px 100px 100px 100px;
  background-color: #1c1d1f;
  flex-direction: column;
  align-items: flex-start;

  .container {
    padding: 0px 0px 100px;
  }

  .title-right {
    text-align: right;
  }

  .other-right {
    float: right;
    clear: left;
  }
`;

const Header = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #2fbf71;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const ProjectCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  vertical-align: middle;
`;

const ProjectImage = styled(Image)`
  width: 500px;
  border-radius: 10px;
`;

const ProjectTitle = styled.h5`
  font-size: 24px;
  padding: 20px 0px;
  font-weight: 600;
`;

const ProjectDetails = styled.div`
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: white;
  box-shadow: 0px 15px 20px 5px rgba(0, 0, 0, 0.25);
`;

const ProjectTechnology = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 25px;
  list-style: none;

  li {
    padding: 30px 0px 0px;
    margin-right: 7px;
    font-size: 14px;
  }
`;

const ProjectImgContainer = styled.a`
  grid-column: ${(props) => props.column};
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  border: 40px solid white;
  box-shadow: 0px 15px 20px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  :hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const ProjectLinks = styled.div`
  padding: 0px 25px;
  position: relative;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;

    :hover {
    }
  }
`;

const ProjectsInfo = [
  {
    name: "Foodture",
    technologies: ["Node.js", "Golang", "PostgreSQL"],
    description: "",
    logo: "",
  },
  {
    name: "Slackoff",
    technologies: ["Node.js"],
    description: "",
    logo: SlackOff,
  },
];

const ProjectSection = () => {
  const project1RevealDesc = useRef(null);
  const project1RevealPic = useRef(null);
  const project2RevealDesc = useRef(null);
  const project2RevealPic = useRef(null);

  useEffect(() => {
    scrollreveal.reveal(project1RevealPic.current, srRightConfig());
    scrollreveal.reveal(project1RevealDesc.current, srBottomConfig());
    scrollreveal.reveal(project2RevealPic.current, srRightConfig());
    scrollreveal.reveal(project2RevealDesc.current, srBottomConfig());
  });

  return (
    /* ------------- Projects Component ------------- */
    <Projects id="projects">
      <Header>My Projects</Header>
      <Container>
        <Row>
          {ProjectsInfo.map((project, index) => (
            <ProjectCard>
              <ProjectImage src={project.logo} />
            </ProjectCard>
          ))}
        </Row>
      </Container>
    </Projects>
  );
};

export default ProjectSection;
