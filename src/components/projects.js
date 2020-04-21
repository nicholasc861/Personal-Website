import React, { useState } from "react"

import { Card, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import styled from "styled-components"

import 'react-multi-carousel/lib/styles.css';
import Slackoff from '../assets/Projects/Slackoff.png'
import Mercari from '../assets/Projects/Mercari.png'
import Deafpost from '../assets/Projects/Deafpost.png'

const Title = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    padding: 20px 0px;
`

const ProjectDetails = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    font-family: 'Montserrat', sans-serif;
    background-color: #97D2FB;
`

const ProjectCard = styled.div`
    background-image: url(${props => props.imageSrc});
    background-size: cover;
    height: 300px;
    width: 300px;
    margin: auto;

    &:hover {
      ${ProjectDetails} {
        opacity: 0.25;
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

const Projects = () => {
  const [showArrows, setArrow] = useState(false)

  return(
      <div id="#projects" onMouseEnter={() => setArrow(true)} onMouseLeave={() => setArrow(false)}>
          <Title>MY PORTFOLIO</Title>
            <ProjectCarousel responsive={responsive} arrows={showArrows} renderButtonGroupOutside={true} infinite={true}>
                <a href="https://github.com/nicholasc861/SlackOff" target="_blank" >
                  <ProjectCard imageSrc={Slackoff}>
                    <ProjectDetails>
                      SlackOff
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
      </div>
  )
    
}

export default Projects