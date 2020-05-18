import React, { useState } from "react"

import { Card, Image, Container, Col, Row } from 'react-bootstrap'
import styled from "styled-components"

import 'react-multi-carousel/lib/styles.css';
import Slackoff from '../assets/Projects/Slackoff.png'
import Mercari from '../assets/Projects/Mercari.png'
import Deafpost from '../assets/Projects/Deafpost.png'
import FoodDeadline from '../assets/Projects/FoodDeadline.png'

const Projects = styled.div`
    padding: 50px 100px 100px 100px;

    .project-row-1 {
      padding-bottom: 50px;
    }

    .title {
      font-family: "Karla", sans-serif;
      font-size: 32px;
      font-weight: 800;
      text-align: center;
      padding: 0px 0px 25px 0px;
    }
` 

const ProjectDetails = styled.p`
  height: 100%;
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 15px;
  color: #FDFFFC;
  text-decoration: none;
  border-top: 2px solid #FDFFFC;
  border-bottom: 2px solid #FDFFFC;

  h1 {
    margin: 0;
    padding: 15px 0px 5px 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
`

const ProjectOverlay = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
    opacity: 0;
    padding: 20px;
    text-align: center;
    background-color: rgba(51, 55, 57, 0.8);
`

const ProjectCard = styled.div`
    background-image: url(${props => props.imageSrc});
    position: relative;
    background-size: cover;
    height: 320px;
    width: 320px;
    margin: auto;

    &:hover {
      ${ProjectOverlay} {
        opacity: 1;
        transition: .5s ease;
      }
      ${ProjectDetails} {
        h1 {
          transition: opacity 6s ease-in;

        }
        transition: opacity 6s ease-in;
      }
    }
`

/* Create responsive breakpoints for better viewing
on various devices */
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const ProjectSection = () => {
  return(
      <Projects id="projects">
          <h1 className="title">MY PORTFOLIO</h1>
          <Container>
            <Row className="project-row-1">
              <Col sm={4}>
                <a href="https://github.com/nicholasc861/FoodDeadline" target="_blank" >
                  <ProjectCard imageSrc={FoodDeadline}>
                    <ProjectOverlay>
                      <ProjectDetails>
                        <h1>FoodDeadline</h1>
                        Grocery stores throw away 43 billion pounds of food every year.
                        To help alleviate the problem, many grocery stores mark item 
                        that are approaching their expiration date with a large discount. 
                        FoodDeadline is a web application that allows users to post information 
                        about close to expiration items at their local supermarkets.
                      </ProjectDetails>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              </Col>
              <Col sm={4}>
                <a href="https://github.com/nicholasc861/SlackOff" target="_blank" >
                  <ProjectCard imageSrc={Slackoff}>
                    <ProjectOverlay>
                      <ProjectDetails>
                        <h1>Slackoff</h1>
                        Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                        This allows users to connect with offline members quickly. The offline user is also able to send a 
                        SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                      </ProjectDetails>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              </Col>
              <Col sm={4}>
              <a href="https://github.com/nicholasc861/Mercari-API" target="_blank" >
                  <ProjectCard imageSrc={Mercari}>
                    <ProjectOverlay>
                      <ProjectDetails>
                        <h1>Mercari Unofficial API</h1>
                        Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                        This allows users to connect with offline members quickly. The offline user is also able to send a 
                        SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                      </ProjectDetails>
                    </ProjectOverlay>
                  </ProjectCard>   
                </a>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <a href="https://devpost.com/software/deaf-post-3wgmn8" target="_blank" >
                  <ProjectCard imageSrc={Deafpost}>
                    <ProjectOverlay>
                      <ProjectDetails>
                        <h1>Deafpost</h1>
                        Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                        This allows users to connect with offline members quickly. The offline user is also able to send a 
                        SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                      </ProjectDetails>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              </Col>
              <Col sm={4}>
              
              </Col>
              <Col sm={4}>
              </Col>
            </Row>
            
          </Container>
      </Projects>
  )
    
}

export default ProjectSection