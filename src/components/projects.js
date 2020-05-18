import React, { useState } from "react"

import { Card, Image, Container, Col, Row } from 'react-bootstrap'
import styled from "styled-components"

import 'react-multi-carousel/lib/styles.css';
import Slackoff from '../assets/Portfolio/Slackoff.png'
import Mercari from '../assets/Portfolio/Mercari.png'
import Deafpost from '../assets/Portfolio/Deafpost.png'
import FoodDeadline from '../assets/Portfolio/FoodDeadline.png'
import DECA from '../assets/Portfolio/DECA.png'
import NCR from '../assets/Portfolio/NCR.jpg'

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
    }

    .category-list {
      text-align: center;
      padding: 5px 0px 20px;
      font-family: "Karla", sans-serif;
      font-size: 16px;
    }

    ul {
      list-style-type: none;
      margin: 0 auto;
      padding: 0;
      display: inline-block;
      overflow: hidden;

      li {
        float: left;
        padding: 0px 10px;
        text-align: center;

        :hover {
          color: #97D2FB;
          cursor: pointer;
          transition: 0.25s ease-in;
        }
      }
    }
` 

const ProjectDetails = styled.p`
  height: 100%;
  opacity: 0;
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 15px;
  color: #FDFFFC;
  text-decoration: none;
  transform: translateY(50%);
  
`

const ProjectOverlay = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
    opacity: 0;
    padding: 20px;
    text-align: center;
    outline: 2px solid #FDFFFC;
    background-color: rgba(51, 55, 57, 0.8);

    .overlay-border {
      width: 100%;
      height: 100%;
      transform: scaleX(0);
    }

    h1 {
      text-decoration: none;
      color: #FDFFFC;
      transform: translateY(-50%);
      margin: 0;
      opacity: 0;
      padding: 15px 0px 10px 0px;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
    }
`

const ProjectCard = styled.div`
    background-image: url(${props => props.imageSrc});
    position: relative;
    background-size: cover;
    height: 320px;
    width: 320px;
    margin: auto;

    &:hover {
      .overlay-border {
        border-top: 2px solid #FDFFFC;
        border-bottom: 2px solid #FDFFFC;
        transform: scaleX(1);
        transition: transform 0.4s ease-in-out;
      }

      ${ProjectOverlay} {
        opacity: 1;
        transition: .5s ease;
        h1 {
          opacity: 1;
          transition: opacity 0.4s ease-in, transform 0.5s;
          transform: translateY(0);
        }

      }
      ${ProjectDetails} {
        opacity: 1;
        transition: opacity 0.4s ease-in, transform 0.5s;
        transform: translateY(0);
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
  const [activeCategory, changeCategory] = useState("all")

  const handleClick = () => {
    changeCategory()
  }


  return(

    /* ------------- Projects Component ------------- */
      <Projects id="projects">
          <h1 className="title">MY PORTFOLIO</h1>
          <div className="category-list">
            <ul>
              <li onClick={handleClick}>All</li>
              <li onClick={handleClick}>Projects</li>
              <li onClick={handleClick}>Experience</li>
              <li onClick={handleClick}>Extra-Curriculars</li>
            </ul>
          </div>

          {/* ------------- Container to hold Project Cards ------------- */},
          <Container>
            <Row className="project-row-1">
              <Col sm={4}>
                <a href="https://github.com/nicholasc861/FoodDeadline" target="_blank" >
                  <ProjectCard imageSrc={FoodDeadline}>
                    <ProjectOverlay>
                      <div className="overlay-border">
                      <h1>FoodDeadline</h1>
                        <ProjectDetails>
                          Grocery stores throw away 43 billion pounds of food every year.
                          To help alleviate the problem, many grocery stores mark item 
                          that are approaching their expiration date with a large discount. 
                          FoodDeadline is a web application that allows users to post information 
                          about close to expiration items at their local supermarkets.
                        </ProjectDetails>
                      </div>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              </Col>
              <Col sm={4}>
              <a href="https://ncr.com" target="_blank" >
                  <ProjectCard imageSrc={NCR}>
                    <ProjectOverlay>
                    <div className="overlay-border">
                    <h1>Systems Software Engineering Intern - NCR</h1>
                      <ProjectDetails>
                        At NCR, I successfully coordinated the development of an information radiator that
                        could be deployed to sites globally using deployment scripts. Moreover, I produced
                        a web application using React.js, and Express.js that provided contextual information
                        aiding clients on obtaining support.
                      </ProjectDetails>
                      </div>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
                
              </Col>
              <Col sm={4}>
              <a href="https://github.com/nicholasc861/SlackOff" target="_blank" >
                  <ProjectCard imageSrc={Slackoff}>
                    <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>Slackoff</h1>
                      <ProjectDetails>
                        Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                        This allows users to connect with offline members quickly. The offline user is also able to send a 
                        SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                      </ProjectDetails>
                      </div>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
              <a href="https://github.com/nicholasc861/Mercari-API" target="_blank" >
                  <ProjectCard imageSrc={Mercari}>
                    <ProjectOverlay>
                    <div className="overlay-border">
                    <h1>Mercari Unofficial API</h1>
                      <ProjectDetails>
                        Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                        This allows users to connect with offline members quickly. The offline user is also able to send a 
                        SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                      </ProjectDetails>
                      </div>
                    </ProjectOverlay>
                  </ProjectCard>   
                </a>
                
              </Col>
              <Col sm={4}>
              <a href="https://deca.org" target="_blank" >
                  <ProjectCard imageSrc={DECA}>
                    <ProjectOverlay>
                    <div className="overlay-border">
                    <h1>President - Bayview DECA</h1>
                      <ProjectDetails>
                        DECA is an international organization that empowers and prepares youth
                        in the field of business through case study compeittions and conferences.
                        As President of the chapter, I led and motivated 90 members, qualifying 46
                        for the international competition. Moreover, I acted as the liaison between
                        students and school administration.
                      </ProjectDetails>
                      </div>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              </Col>
              <Col sm={4}>
              <a href="https://devpost.com/software/deaf-post-3wgmn8" target="_blank" >
                  <ProjectCard imageSrc={Deafpost}>
                    <ProjectOverlay>
                    <div className="overlay-border">
                    <h1>Deafpost</h1>
                      <ProjectDetails>
                        Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                        This allows users to connect with offline members quickly. The offline user is also able to send a 
                        SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                      </ProjectDetails>
                      </div>
                    </ProjectOverlay>
                  </ProjectCard>
                </a>
              
              </Col>
            </Row>
            
          </Container>
      </Projects>
  )
    
}

export default ProjectSection