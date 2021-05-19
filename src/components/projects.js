import React, { useRef, useEffect } from "react";

import { Container, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import {
  scrollreveal,
  srBottomConfig,
  srRightConfig,
} from "../utils/scrollreveal";

import Foodture from "../assets/Portfolio/Foodture.svg";
import SlackOff from "../assets/Portfolio/Slackoff.png";

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
  display: flex;
  width: 500px;
  align-items: center;
  vertical-align: middle;
  margin: 10px;

`;

const ProjectImage = styled(Image)`
  border-radius: 10px 10px 0 0;
  width: 500px;
  align-self: flex-start;
  height: 75%;
  object-fit: cover;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  font-size: 10px;
  flex-direction: row;
`;

const Outline = styled.div`
  border: 0.5px solid #2fbf71;
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 13px;
  padding: 3px 10px;
  align-items: center;
`;

const ProjectTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;

const ProjectDetails = styled.div`
  position: absolute;
  align-self: flex-end;
  border-radius: 0 0 10px 10px;
  padding: 20px 20px;
  width: 500px;
  background-color: #121212;
`;

const Seperator = styled.div`
  height: 0px;
  width: 30px;
  border: 1px solid #2fbf71;
  margin: 8px 0px;
`;

const ProjectDescription = styled.div`
  font-size: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  cursor: pointer;
  color: #f7f9f9;
  text-decoration: none;

  :hover {
    color: #f7f9f9;
  }
`;

const ProjectsInfo = [
  {
    name: "Foodture",
    technologies: ["Node.js", "Golang", "PostgreSQL"],
    link: "",
    description:
      "Foodture allows users to post information about close to expiration items at their local supermarkets.",
    logo: Foodture,
  },
  {
    name: "SlackOff",
    technologies: ["Node.js", "Twilio API"],
    link: "https://github.com/nicholasc861/Slackoff",
    description:
      "SlackOff allows for users to communicate on Slack using SMS allowing offline members to stay updated",
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
        <Row style={{ "justify-content": "space-evenly" }}>
          {ProjectsInfo.map((project, index) => (
            <ProjectLink href={project.link} target="_blank" rel="no-referrer" key={index}>
              <ProjectCard>
                <ProjectImage src={project.logo} />
                <ProjectDetails>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectTechnologies>
                    {project.technologies.map((technology, index) => (
                      <Outline key={index}>{technology}</Outline>
                    ))}
                  </ProjectTechnologies>
                  <Seperator />
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectDetails>
              </ProjectCard>
            </ProjectLink>
          ))}
        </Row>
      </Container>
    </Projects>
  );
};

export default ProjectSection;
