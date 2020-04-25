import React, { useState } from "react"

import { Card, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import styled from "styled-components"

import 'react-multi-carousel/lib/styles.css';
import Slackoff from '../assets/Projects/Slackoff.png'
import Mercari from '../assets/Projects/Mercari.png'
import Deafpost from '../assets/Projects/Deafpost.png'

const Title = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    padding: 0px 0px 25px 0px;
`

const Projects = styled.div`
    padding: 100px 100px;
` 

const ProjectDetails = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    background-color: #97D2FB;
    color: black;
`

const ProjectCard = styled.div`
    background-image: url(${props => props.imageSrc});
    background-size: cover;
    height: 200px;
    width: 200px;
    margin: auto;

    &:hover {
      ${ProjectDetails} {
        opacity: 0.4;
      }
    }
`

const ProjectCarousel = styled(Carousel)`
    margin: 0px 200px;
    text-align: center;
    text-decoration: none;

`

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
  const [showArrows, setArrow] = useState(false)

  return(
      <Projects id="projects" onMouseEnter={() => setArrow(true)} onMouseLeave={() => setArrow(false)}>
          <Title>MY PORTFOLIO</Title>
            <ProjectCarousel responsive={responsive} arrows={showArrows} renderButtonGroupOutside={true} infinite={true}>
                <a href="https://github.com/nicholasc861/SlackOff" target="_blank" >
                  <ProjectCard imageSrc={Slackoff}>
                    <ProjectDetails>
                      SlackOff
                      <br />
                      <br />
                      Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. 
                      This allows users to connect with offline members quickly. The offline user is also able to send a 
                      SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.
                    </ProjectDetails>
                  </ProjectCard>
                </a>
                <a href="https://github.com/nicholasc861/Mercari-API" target="_blank" >
                  <ProjectCard imageSrc={Mercari}>
                    <ProjectDetails>
                      Mercari API
                    </ProjectDetails>
                  </ProjectCard>   
                </a>
                <a href="https://devpost.com/software/deaf-post-3wgmn8" target="_blank" >
                  <ProjectCard imageSrc={Deafpost}>
                    <ProjectDetails>
                      Deafpost
                    </ProjectDetails>
                  </ProjectCard>
                </a>
                <a href="" target="_blank" >
                  <ProjectCard src={Slackoff} />
                </a>
            </ProjectCarousel>
      </Projects>
  )
    
}

export default ProjectSection