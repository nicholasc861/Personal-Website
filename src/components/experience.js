import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { scrollreveal, srBottomConfig } from "../utils/scrollreveal";

import LocationPin from "../assets/pin.svg";
import Calendar from "../assets/calendar.svg";

import styled from "styled-components";

const Experience = styled.div`
  padding: 100px 0px 200px;
  background-color: #1c1d1f;

  .container {
    width: 80%;
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

const ExperienceList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  padding: 0;
  margin: 0;
  float: right;
  list-style: none;
`;

const Outline = styled.div`
  border: 0.5px solid #2fbf71;
  box-sizing: border-box;
  margin-right: 10px;
  border-radius: 13px;
  padding: 3px 10px;
  display: flex;
  align-items: center;
`;

const ExperienceItem = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  height: 40px;
  background-color: transparent;
  padding: 0 20px 2px;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: none;
  color: ${(props) => (props.isActive ? "#2fbf71" : "#f7f9f9")};
  font-size: 16px;
  border-left: 2px solid #2fbf71;

  &:hover,
  &:focus {
    outline: 0;
  }
`;

const ExperienceContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-left: 50px;
  transition: visibility 1s linear;
`;

const Icon = styled(Image)`
  width: 13px;
  height: 13px;
  fill: #f7f9f9;
  margin-right: 6px;

  &:hover {
    transition: 0.25s ease;
    opacity: 1;
  }
`;

const Seperator = styled.div`
  height: 0px;
  width: 30px;
  border: 1px solid #2fbf71;
  margin: 20px 0px;
`;

const ExperienceTitle = styled.h4`
  color: #f7f9f9;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const ExperienceCompany = styled.span`
  color: #2fbf71 !important;

  a {
    color: #2fbf71 !important;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    display: inline-block;

    :after {
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      background: #2fbf71;
      position: absolute;
      transition: width 0.5s ease 0s, left 0.5s ease 0s;
      width: 0;
    }

    :hover {
      :after {
        width: 100%;
        left: 0;
      }
    }
  }
`;

const ExperienceSubtitle = styled.div`
  font-size: 14px;
  padding-top: 5px;
  display: flex;
`;

const ExperienceDetails = styled.div`
  width: 80%;

  ul {
    padding: 0px;
    li {
      padding-bottom: 10px;
      list-style: none;

      ::before {
        content: "» ";
      }
    }
  }
`;

const Experiences = [
  {
    title: "Software Engineering Intern",
    company: "Candor",
    website: "https://candor.co",
    time: "April 2021 - Present",
    location: "Remote / San Francisco, CA",
    logo: "",
    job_details: [
      `Engineered and implemented 10+ scalable Node.js AWS Lambda functions conducting scheduled stock trading, automated portfolio investing and other core fintech logic with unit and end-to-end testing coverage`,
      `Securely implemented full account liquidation, ACH transfer requests and retrieval of financial information through a RESTful API performing PostgreSQL queries and external API requests to Plaid and Apex Clearing`,
      `Spearheaded key infrastructure documentation aiding current and future team members to understand the codebase`,
    ],
  },
  {
    title: "Junior Software Developer Intern",
    company: "CondoWorks",
    website: "https://condoworks.co",
    time: "September 2020 - December 2020",
    location: "Remote / Richmond Hill, ON",
    logo: "",
    job_details: [
      `Productionized and maintained 15+ scrapers and parsers in Node.js using Puppeteer processing 500+ vendor invoices weekly`,
      `Optimized parsing accuracy by over 50% by spearheading a test suite that would determine improvements and diminishments after making changes to OCR logic`,
      `Performed daily maintenance by monitoring scrapers and parsers reducing daily failure rate by 30%      `,
    ],
  },
  {
    title: "Systems Software Engineering Intern",
    company: "NCR Corporation",
    website: "https://ncr.com",
    time: "January 2020 - April 2020",
    location: "Remote / Waterloo, ON",
    logo: "",
    job_details: [
      `Coordinated development of an information radiator deployed to sites globally using scripts that
    increased efficiency by 50%`,
      `Developed a web application using React.js and Express.js to provide contextual information to guide
    clients and employees on where to obtain support`,
    ],
  },
  {
    title: "Summer Camp Counselor",
    company: "City of Richmond Hill",
    website: "https://www.richmondhill.ca/en/index.aspx",
    time: "June 2018 - August 2019",
    location: "Richmond Hill, ON",
    logo: "",
    job_details: [
      `Demonstrated the ability to build strong relationships with campers, parents, and other staff`,
      `Developed problem-solving skills through the need to implement and adapt various activities to
      maintain a fun and inclusive atmopshere for all campers`,
      `Implemented daily lesson plans to instruct badminton, archery, and leadership skills to campers
      `,
    ],
  },
];

const ExperienceSection = () => {
  const [activeExperienceId, setActiveExperienceId] = useState(0);

  const revealContainer = useRef(null);
  useEffect(() => {
    scrollreveal.reveal(revealContainer.current, srBottomConfig());
  });

  return (
    <Experience id="experience">
      <Header>My Experience</Header>
      <Container ref={revealContainer}>
        <Row>
          <Col md={3}>
            <ExperienceList>
              {Experiences.map((experience, index) => (
                <li key={`item${index}`}>
                  <ExperienceItem
                    isActive={activeExperienceId === index}
                    onClick={() => setActiveExperienceId(index)}
                  >
                    {experience.company}
                  </ExperienceItem>
                </li>
              ))}
            </ExperienceList>
          </Col>
          <Col md={9}>
            {Experiences.map((experience, index) => (
              <ExperienceContent
                className={activeExperienceId !== index ? "" : "fade-in"}
                key={index}
                isActive={activeExperienceId === index}
                hidden={activeExperienceId !== index}
              >
                <ExperienceTitle>
                  {experience.title}
                  <ExperienceCompany>
                    {" @ "}
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {experience.company}
                    </a>
                  </ExperienceCompany>
                </ExperienceTitle>
                <ExperienceSubtitle>
                  <Outline>
                    <Icon src={Calendar} />
                    {experience.time}
                  </Outline>
                  <Outline>
                    <Icon src={LocationPin} />
                    {experience.location}
                  </Outline>
                </ExperienceSubtitle>
                <Seperator />

                <ExperienceDetails>
                  <ul>
                    {experience.job_details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </ExperienceDetails>
              </ExperienceContent>
            ))}
          </Col>
        </Row>
      </Container>
    </Experience>
  );
};

export default ExperienceSection;
