import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import styled from "styled-components"

const About = styled.div`
    padding-top: 150px;
`

export default class AboutSection extends React.Component {
    render() {
        return(
            <About>
                <Container>
                    <Row>
                        <Col lg={5}></Col>
                        <Col lg={7}>
                            <div id="about">
                                <p className="heading">
                                    Hi! I'm Nicholas!
                                </p>
                                <br />
                                <p className="aboutSection">
                                    I am currently a first-year Computer Engineering student
                                    <br />
                                    at the University of Waterloo. I've always had a passion
                                    <br />
                                    for technology and can be found...
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </About>
        )
    }
}