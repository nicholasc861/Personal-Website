import React, { useRef, useEffect } from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import theme from "../styles/theme"
import {scrollreveal, srBottomConfig, srRightConfig} from '../utils/scrollreveal'


import FoodDeadline from "../assets/FoodDeadline.png";
import SlackOff from "../assets/Portfolio/Slackoff-new.png";
import Github from "../assets/github-black.svg";


const MainProjects = styled.div`
  padding: 50px 100px 100px 100px;
  background-color: #F9F9F9;
  font-family: ${theme.fonts.main};
  flex-direction: column;
  align-items: flex-start;

  .container {
    padding: 0px 0px 100px;
  }

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;
    padding-bottom: 40px;
  }

  .title-right {
    text-align: right;
  }

  .other-right {
    float: right;
    clear: left;
  }

`;

const ProjectContent = styled.div`
  position: relative;
  grid-column: ${props => props.column};
  grid-row: 1 / -1;
  z-index: 4;
`

const ProjectCard = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  vertical-align: middle;
`

const ProjectTitle = styled.h5`
  font-size: 24px;
  padding: 20px 0px;
  font-weight: 600;

  
`

const ProjectDetails = styled.div`
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: white;
  box-shadow: 0px 15px 20px 5px rgba(0,0,0,0.25);
`

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
`

const ProjectImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  mix-blend-mode: multiply;
  border-radius: 5px;

`

const ProjectImgContainer = styled.a`
  grid-column: ${props => props.column};
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  border: 40px solid white;
  box-shadow: 0px 15px 20px 5px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  :hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
`

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
`


const MainProjectSection = () => {
  const project1RevealDesc = useRef(null)
  const project1RevealPic = useRef(null)
  const project2RevealDesc = useRef(null)
  const project2RevealPic = useRef(null)


  useEffect(() => {
      scrollreveal.reveal(project1RevealPic.current, srRightConfig())
      scrollreveal.reveal(project1RevealDesc.current, srBottomConfig())
      scrollreveal.reveal(project2RevealPic.current, srRightConfig())
      scrollreveal.reveal(project2RevealDesc.current, srBottomConfig())
  })

  return (
    /* ------------- Projects Component ------------- */
    <MainProjects id="projects">
      <h1>Projects</h1>
      <Container>
        <ProjectCard>
          <ProjectContent column={"1 / 7"} ref={project1RevealDesc}>
            <ProjectTitle>
              FoodDeadline
            </ProjectTitle>
            <ProjectDetails>
            Grocery stores specifically throw away 43 billion pounds of food every year. To help alleviate the problem, many grocery stores mark items that are approaching their expiration date with a large discount. FoodDeadline is a web application that allows users to post information about close to expiration items at their local supermarkets.
            </ProjectDetails>
            <ProjectTechnology>
              <li>
                Golang
              </li>
              <li>
                React.js
              </li>
              <li>
                MongoDB
              </li>
            </ProjectTechnology>
            <ProjectLinks> 
              <a href="https://www.github.com/nicholasc861/fooddeadline" target="_blank">
                <Image src={Github} />
              </a>
            </ProjectLinks>
          </ProjectContent>
          <ProjectImgContainer href="https://www.github.com/nicholasc861/fooddeadline" target="_blank" ref={project1RevealPic} column={"6 / -1"}>
            <ProjectImage src={FoodDeadline} />
          </ProjectImgContainer>
        </ProjectCard>
      </Container>

      <Container>
        <ProjectCard>
          <ProjectContent column={"7 / -1"} ref={project2RevealDesc}>
            <ProjectTitle className="title-right">
              SlackOff
            </ProjectTitle>
            <ProjectDetails>
              SlackOff allows for users to send messages to any phone number that supports SMS capabilities. This allows users to connect with offline members quickly. The offline user is also able to send a SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
            </ProjectDetails>
            <div className="other-right">
              <ProjectTechnology>
                <li>
                  Node.js
                </li>
              </ProjectTechnology>
              <ProjectLinks className="other-right"> 
                <a href="https://www.github.com/nicholasc861/slackoff" target="_blank">
                  <Image src={Github} />
                </a>
              </ProjectLinks>
            </div>
          </ProjectContent>
          <ProjectImgContainer href="https://www.github.com/nicholasc861/slackoff" target="_blank" ref={project2RevealPic} column={"1 / 8"}>
            <ProjectImage src={SlackOff} />
          </ProjectImgContainer>
        </ProjectCard>
      </Container>
    </MainProjects>
  );
};

export default MainProjectSection;
