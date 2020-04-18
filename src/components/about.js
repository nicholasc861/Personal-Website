import React from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import styled from "styled-components"

const About = styled.div`
    padding: 100px 0px;

`

const AboutInfo = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    margin: 20px;
    margin-right: 40px;
    color: #434854;
`

const Greeting = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 25px;
`

const Resume = styled(Button)`
    margin: 20px;
`

const Contact = styled(Button)`
`

export default class AboutSection extends React.Component {
    render() {
        return(
            <About id="about">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <AboutInfo>
                                <Greeting>Hi!</Greeting>
                                <br />
                                My name is Nicholas! I am currently a first-year Computer Engineering
                                student at the University of Waterloo. In my free time, you can find me
                                on the field playing Ultimate Frisbee or researching my next food adventure.
                                <br />
                                <br />
                                I've always loved technology and often find myself
                                browsing new phone releases and technological advancements.
                                Recently, I've been learning Go and building web apps with react.
                            </AboutInfo>
                            <Resume variant="dark">Resume</Resume>
                            <Contact variant="dark">Contact Me</Contact>
                        </Col>
                        <Col lg={5}>
                        </Col>
                    </Row>
                </Container>
            </About>
        )
    }
}