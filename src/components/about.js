import React from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import styled from "styled-components"

const About = styled.div`
    padding: 150px 0px;
    background-color: #1d1d1d;
`

const AboutInfo = styled.div`
    font-family: "Montserrat", sans-serif;
    color: #FDFFFC;
`

const Resume = styled(Button)`
    margin: 10px;
`

const Contact = styled(Button)`
    margin: 10px;
`

export default class AboutSection extends React.Component {
    render() {
        return(
            <About>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <AboutInfo>
                                Hi! My name is Nicholas!
                                <br />
                                I am currently a first-year Computer Engineering
                                <br />
                                student at the University of Waterloo.
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