import React, { useState, useEffect } from "react";

import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import Isotope from "isotope-layout";

import "react-multi-carousel/lib/styles.css";
import Slackoff from "../assets/Portfolio/Slackoff.png";
import Mercari from "../assets/Portfolio/Mercari.png";
import Deafpost from "../assets/Portfolio/Deafpost.png";
import FoodDeadline from "../assets/Portfolio/FoodDeadline.png";
import DECA from "../assets/Portfolio/DECA.png";
import YAC from "../assets/Portfolio/YAC.png";
import NCR from "../assets/Portfolio/NCR.jpg";

const Projects = styled.div`
  padding: 50px 100px 100px 100px;

  .title {
    font-family: "Karla", sans-serif;
    font-size: 32px;
    font-weight: 800;
    text-align: center;
  }

  .category-list {
    text-align: center;
    padding: 5px 0px 5px;
    font-family: "Karla", sans-serif;
    font-size: 17px;
  }

  .filter-item {
    padding: 20px;
  }

  ul {
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    display: inline-block;
    overflow: hidden;

    .active {
      color: #97d2fb;
      text-decoration: underline;
    }

    li {
      float: left;
      padding: 0px 10px;
      text-align: center;

      :hover {
        color: #97d2fb;
        cursor: pointer;
        transition: 0.25s ease-in;
      }
    }
  }
`;

const ProjectDetails = styled.p`
  height: 100%;
  opacity: 0;
  margin: 0;
  font-family: "Karla", sans-serif;
  font-size: 15px;
  color: #fdfffc;
  text-decoration: none;
  transform: translateY(50%);
`;

const ProjectOverlay = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  opacity: 0;
  padding: 20px;
  text-align: center;
  outline: 2px solid #fdfffc;
  background-color: rgba(51, 55, 57, 0.8);

  .overlay-border {
    width: 100%;
    height: 100%;
    transform: scaleX(0);
  }

  h1 {
    text-decoration: none;
    color: #fdfffc;
    transform: translateY(-50%);
    margin: 0;
    opacity: 0;
    padding: 15px 0px 10px 0px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const ProjectCard = styled.div`
  background-image: url(${(props) => props.imageSrc});
  position: relative;
  background-size: cover;
  height: 335px;
  width: 335px;
  margin: auto;

  &:hover {
    .overlay-border {
      border-top: 2px solid #fdfffc;
      border-bottom: 2px solid #fdfffc;
      transform: scaleX(1);
      transition: transform 0.4s ease-in-out;
    }

    ${ProjectOverlay} {
      opacity: 1;
      transition: 0.5s ease;
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
`;

/* Create responsive breakpoints for better viewing
on various devices */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProjectSection = () => {
  const [isotope, setIsotope] = useState(null);
  const [activeCategory, changeCategory] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer",
        },
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      activeCategory === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${activeCategory}` });
    }
  }, [isotope, activeCategory]);

  const handleClick = (cat) => {
    changeCategory(cat);
    console.log(activeCategory);
  };

  return (
    /* ------------- Projects Component ------------- */
    <Projects id="projects">
      <h1 className="title">MY PORTFOLIO</h1>
      <div className="category-list">
        <ul>
          <li
            className={activeCategory === "*" ? "active" : null}
            onClick={() => handleClick("*")}
          >
            All
          </li>
          <li
            className={activeCategory === "projects" ? "active" : null}
            onClick={() => handleClick("projects")}
          >
            Projects
          </li>
          <li
            className={activeCategory === "experience" ? "active" : null}
            onClick={() => handleClick("experience")}
          >
            Experience
          </li>
         
        </ul>
      </div>

      {/* ------------- Container to hold Project Cards ------------- */}
      <Container>
        <div className="filter-container">
          <Col sm={4} className="grid-sizer"></Col>
          <Col sm={4} className="filter-item projects">
            <div>
              <a
                href="https://github.com/nicholasc861/FoodDeadline"
                target="_blank"
              >
                <ProjectCard imageSrc={FoodDeadline}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>FoodDeadline</h1>
                      <ProjectDetails>
                        Grocery stores throw away 43 billion pounds of food
                        every year. To help alleviate the problem, many grocery
                        stores mark item that are approaching their expiration
                        date with a large discount. FoodDeadline is a web
                        application that allows users to post information about
                        close to expiration items at their local supermarkets.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>
          <Col sm={4} className="filter-item experience">
            <div>
              <a href="https://ncr.com" target="_blank">
                <ProjectCard imageSrc={NCR}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>Systems Software Engineering Intern - NCR</h1>
                      <ProjectDetails>
                        At NCR, I successfully coordinated the development of an
                        information radiator that could be deployed to sites
                        globally using deployment scripts. Moreover, I produced
                        a web application using React.js, and Express.js that
                        provided contextual information aiding clients on
                        obtaining support.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>
          <Col sm={4} className="filter-item projects">
            <div>
              <a
                href="https://github.com/nicholasc861/SlackOff"
                target="_blank"
              >
                <ProjectCard imageSrc={Slackoff}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>Slackoff</h1>
                      <ProjectDetails>
                        Our Slack app allows for users to send messages to any
                        phone number that supports SMS capabilities. This allows
                        users to connect with offline members quickly. The
                        offline user is also able to send a SMS to a dedicated
                        phone number which is then automatically forwarded to
                        the Slack channel.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>

          <Col sm={4} className="filter-item projects">
            <div>
              <a
                href="https://github.com/nicholasc861/Mercari-API"
                target="_blank"
              >
                <ProjectCard imageSrc={Mercari}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>Mercari Unofficial API</h1>
                      <ProjectDetails>
                        Our Slack app allows for users to send messages to any
                        phone number that supports SMS capabilities. This allows
                        users to connect with offline members quickly. The
                        offline user is also able to send a SMS to a dedicated
                        phone number which is then automatically forwarded to
                        the Slack channel.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>

          <Col sm={4} className="filter-item experience">
            <div>
              <a href="https://deca.org" target="_blank">
                <ProjectCard imageSrc={DECA}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>President - Bayview DECA</h1>
                      <ProjectDetails>
                        DECA is an international organization that empowers and
                        prepares youth in the field of business through case
                        study compeittions and conferences. As President of the
                        chapter, I led and motivated 90 members, qualifying 46
                        for the international competition. Moreover, I acted as
                        the liaison between students and school administration.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>
          <Col sm={4} className="filter-item experience">
            <div>
              <a href="https://www.richmondhill.ca/en/things-to-do/Teen-Activities-Youth-Action-Committee.aspx" target="_blank">
                <ProjectCard imageSrc={YAC}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>Co-Chair - Richmond Hill Youth Action Committee</h1>
                      <ProjectDetails>
                        Richmond Hill's Youth Action Committee (YAC) gives Council 
                        advice and input about teen recreational issues. 
                        The group is made up of teens in grades 6 to 12. As Co-Chair, I
                        co-coordinated members to organize events and to involve youth
                        such as an Amazing Race style event and a talent show.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>
          <Col sm={4} className="filter-item projects">
            <div>
              <a
                href="https://devpost.com/software/deaf-post-3wgmn8"
                target="_blank"
              >
                <ProjectCard imageSrc={Deafpost}>
                  <ProjectOverlay>
                    <div className="overlay-border">
                      <h1>Deafpost</h1>
                      <ProjectDetails>
                        Built using a Microsoft HoloLens, our app aimed to allow deaf people
                        to comprehend spoken language. The app lets the wearer see subtitled
                        transcriptions of the sentences being spoken to them, and provided feedback
                        on the location of audio.
                      </ProjectDetails>
                    </div>
                  </ProjectOverlay>
                </ProjectCard>
              </a>
            </div>
          </Col>
        </div>
      </Container>
    </Projects>
  );
};

export default ProjectSection;
