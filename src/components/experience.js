import React, { useEffect, useState, useRef } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {scrollreveal, srBottomConfig} from '../utils/scrollreveal'
import theme from '../styles/theme'

import styled from "styled-components"

const Experience = styled.section`
    padding: 100px 0px 200px;
    background-color: #F9F9F9;
    font-family: ${theme.fonts.main};

    h1 {
        text-align: center;
        font-weight: 600;
        font-size: 32px;
        text-transform: uppercase;
        padding-bottom: 40px;
    }

    .container {
        width: 80%;
    }
`

const ExperienceList = styled.ul`
    display: block;
    position: relative;
    width: max-content;
    padding: 0;
    margin: 0;
    float: right;
    list-style: none;
`

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
    color: ${props => (props.isActive ? `${theme.colours.test}` : '#000000')};
    font-size: 16px;
    border-left: 2px solid ${theme.colours.test};

    &:hover,
    &:focus {
        outline: 0;
    }
`

const ExperienceContent = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-left: 50px;
    transition: visibility 1s linear;
`

const ExperienceTitle = styled.h4`
    color: ${theme.colours.main};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`

const ExperienceCompany = styled.span`
    a {
        color: ${theme.colours.test} !important;
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
            background: ${theme.colours.test};
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
    
`

const ExperienceDate = styled.div`
    font-size: 15px;
    padding-top: 5px;
`


const ExperienceDetails = styled.div`
    padding-top: 10px;
    width: 80%;

    ul {
        padding: 0px;
        li {
            padding: 5px 0px;
            list-style: none;


            ::before {
                content: "» ";
            }
        }
    }
`

const ExperienceSection = () => {
    const [activeExperienceId, setActiveExperienceId] = useState(0);
    const [experienceFocus, setExperienceFocus] = useState(null);

    const revealContainer = useRef(null);
    useEffect(() => {
        scrollreveal.reveal(revealContainer.current, srBottomConfig())
    })

    return (
        <Experience id="experience">
            <Container ref={revealContainer}>
            <h1>Experience</h1>
                <Row>
                    <Col md={3}>
                        <ExperienceList>
                            <li key={0}>
                                <ExperienceItem
                                    isActive={activeExperienceId === 0}
                                    onClick={() => setActiveExperienceId(0)}
                                    id={`tab${0}`}
                                    experienceIndex={activeExperienceId === 0 ? '0' : '-1'}
                                >
                                    NCR Corporation
                                </ExperienceItem>
                            </li>
                            <li>
                                <ExperienceItem
                                    isActive={activeExperienceId === 1}
                                    onClick={() => setActiveExperienceId(1)}
                                    id={`tab${1}`}
                                    experienceIndex={activeExperienceId === 1 ? '0' : '-1'}
                                >
                                    City of Richmond Hill
                                </ExperienceItem>
                            </li>
                            <li>
                                <ExperienceItem
                                    isActive={activeExperienceId === 2}
                                    onClick={() => setActiveExperienceId(2)}
                                    id={`tab${2}`}
                                    experienceIndex={activeExperienceId === 2 ? '0' : '-1'}
                                >
                                    Bayview DECA
                                </ExperienceItem>
                            </li>
                            <li>
                                <ExperienceItem
                                    isActive={activeExperienceId === 3}
                                    onClick={() => setActiveExperienceId(3)}
                                    id={`tab${3}`}
                                    experienceIndex={activeExperienceId === 3 ? '0' : '-1'}
                                >
                                    Loblaws
                                </ExperienceItem>
                            </li>
                        </ExperienceList>
                    </Col>
                    <Col md={9}>
                        <ExperienceContent
                            className={(activeExperienceId !== 0) ? "" : "fade-in"}
                            key={0}
                            isActive={activeExperienceId === 0}
                            experienceIndex={activeExperienceId === 0 ? '0' : '-1'}
                            hidden={activeExperienceId !== 0}
                        >
                            <ExperienceTitle>
                                Systems Software Engineering Intern @&nbsp;
                                <ExperienceCompany>
                                    <a href="http://ncr.com" target="_blank">NCR Corporation</a>
                                </ExperienceCompany>
                            </ExperienceTitle>
                            <ExperienceDate>Jan 2020 - Apr 2020 &nbsp;|&nbsp;  Waterloo, ON</ExperienceDate>
                            <ExperienceDetails>
                                <ul>
                                    <li>
                                        Coordinated development of an information radiator deployed to sites globally using scripts that
                                        increased efficiency by 100%
                                    </li>
                                    <li>
                                        Developed a web application using React.js and Express.js to provide contextual information to guide
                                        clients and employees on where to obtain support
                                    </li>
                                    <li>
                                        Overhauled error handling and reporting to ensure that generated reports for employees would
                                        provide consistent data
                                    </li>
                                </ul>
                            </ExperienceDetails>
                        </ExperienceContent>

                        <ExperienceContent
                            className={(activeExperienceId !== 1) ? "" : "fade-in"}
                            key={1}
                            isActive={activeExperienceId === 1}
                            experienceIndex={activeExperienceId === 1 ? '0' : '-1'}
                            hidden={activeExperienceId !== 1}
                        >
                            <ExperienceTitle>
                                Summer Camp Counsellor / Program Instructor @&nbsp;
                                <ExperienceCompany>
                                    <a href="http://richmondhill.ca" target="_blank">City of Richmond Hill</a>
                                </ExperienceCompany>
                            </ExperienceTitle>
                            <ExperienceDate>Jun 2018 - Aug 2019 &nbsp;|&nbsp;  Richmond Hill, ON</ExperienceDate>
                            <ExperienceDetails>
                                <ul>
                                    <li>
                                    Demonstrated the ability to build strong relationships with campers, parents, and other staff
                                    </li>
                                    <li>
                                    Developed problem-solving skills through the need to implement and adapt various activities to
maintain a fun and inclusive atmopshere for all campers
                                    </li>
                                    <li>
                                    Implemented daily lesson plans to instruct badminton, archery, and leadership skills to campers
                                    </li>
                                </ul>
                            </ExperienceDetails>
                        </ExperienceContent>

                        <ExperienceContent
                            className={(activeExperienceId !== 2) ? "" : "fade-in"}
                            key={2}
                            isActive={activeExperienceId === 2}
                            experienceIndex={activeExperienceId === 2 ? '0' : '-1'}
                            hidden={activeExperienceId !== 2}
                        >
                            <ExperienceTitle>
                                President @&nbsp;
                                <ExperienceCompany>
                                    <a href="#">Bayview DECA</a>
                                </ExperienceCompany>
                            </ExperienceTitle>
                            <ExperienceDate>Jun 2016 - Jun 2019 &nbsp;|&nbsp;  Richmond Hill, ON</ExperienceDate>
                            <ExperienceDetails>
                                <ul>
                                    <li>
                                    Led chapter to qualify 46 out of 90 members to the International Careers Development Conference
(ICDC) where 6 placed Top 3 Overall in the World
                                    </li>
                                    <li>
                                    Implemented a weekly training system with skill-focused workshops to case study event participants
                                    </li>
                                    <li>
                                    Coodinated chapter activities between chapter members and school administration
                                    </li>
                                </ul>
                            </ExperienceDetails>
                        </ExperienceContent>

                        <ExperienceContent
                            className={(activeExperienceId !== 3) ? "" : "fade-in"}
                            key={3}
                            isActive={activeExperienceId === 3}
                            experienceIndex={activeExperienceId === 3 ? '0' : '-1'}
                            hidden={activeExperienceId !== 3}
                        >
                            <ExperienceTitle>
                                Team Member @&nbsp;
                                <ExperienceCompany>
                                    <a href="https://loblaws.ca" target="_blank">Loblaws</a>
                                </ExperienceCompany>
                            </ExperienceTitle>
                            <ExperienceDate>Nov 2017 - Nov 2018 &nbsp;|&nbsp;  Richmond Hill, ON</ExperienceDate>
                            <ExperienceDetails>
                                <ul>
                                    <li>
                                        Organized backroom product and followed proper inventory management procedures
                                    </li>
                                    <li>
                                        Maintained product displays and aisles to ensure that store standards pertaining to image were followed
                                    </li>
                                    <li>
                                        Maintained daily reports in regards to inventory anomalies, temperature inspections and removal of expired goods
                                    </li>
                                </ul>
                            </ExperienceDetails>
                        </ExperienceContent>
                    </Col>
                </Row>
            </Container>
        </Experience>
    )
}

export default ExperienceSection