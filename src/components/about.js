import React from "react"
import { Container, Col, Row, Button, Image } from "react-bootstrap"
import styled from "styled-components"

import aboutPhoto from "../assets/aboutPhoto.jpg"

const About = styled.div`
    padding: 100px 0px;
    background-color: #F9F9F9;

`

const AboutInfo = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    margin: 20px;
    margin-left: 120px;
    color: #434854;

    br {
        line-height: 2px;
    }
`

const Greeting = styled.div`
    font-family: "Karla", sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: #282A30;

    
`

const AboutPhoto = styled(Image)`
    width: 310px;
    height: 310px;
    align-self: center;
    margin: 20px;
    margin-right: 120px;
    margin-left: auto;
    display: block;

`

const AboutSection = () => {
    return(
        <About id="about">
            <Container>
                <Row>
                    <Col lg={7}>
                        <AboutInfo>
                            <Greeting>
                                Hi!
                                <br />
                                —
                            </Greeting>
                            My name is Nicholas! I am currently a first-year Computer Engineering
                            student at the University of Waterloo. In my free time, you can find me
                            on the field playing Ultimate Frisbee or researching my next food adventure.
                            <br />
                            <br />
                            I've always loved technology and often find myself
                            browsing new phone releases and technological advancements.
                            Recently, I've been learning Go and building web apps with React.
                            <br />
                            <br />
                            Feel free to reach out to grab a coffee!
                        </AboutInfo>
                    </Col>
                    <Col lg={5}>
                        <AboutPhoto src={aboutPhoto} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </About>
    )
}

export default AboutSection