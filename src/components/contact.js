import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import styled from 'styled-components'

const Contact = styled.div`
    padding: 50px 100px 0px;
    background-color: #F9F9F9;

`

const Copyright = styled.div`
    text-align: center;
    font-family: "Karla", sans-serif;
    font-size: 12px;
    padding: 30px 0px;
`

const Section = styled.div`
    padding: 15px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #434854;

    br {
        line-height: 10px;
    }

    h1 {
        font-family: "Karla", sans-serif;
        font-size: 18px;
        font-weight: 600;
    }

    a {
        color: #434854;
        text-decoration: underline;
        text-decoration-style: dotted;
    }

    a:hover {
        color: #97D2FB;
        text-decoration: underline;
        text-decoration-style: dotted;
    }
`

const ContactSection = () => {
    return(
        <Contact id="contact">
            <Container>
                <Row>
                    <Col xs={5}>
                        <Section>
                            <h1>
                                Summary
                                <br />
                                —
                            </h1>
                                Hello! My name is Nicholas Chung-Hun and I'm a Computer Engineering Student
                                at the University of Waterloo.
                            <br />
                            <br />
                                Find me on the field playing Ultimate Frisbee or browsing the latest developments
                                in technology.
                            <br />
                            <br />
                                I'm always interested in future opportunities or to grab a coffee so feel free to reach out!
                        </Section>
                    </Col>
                    <Col>
                    <Section>
                            <h1>
                                Find Out More
                                <br />
                                —
                            </h1>
                            <a href="" target="_top" >
                                Resume
                            </a>
                            <br />
                            <a href="https://www.github.com/nicholasc861" target="_top" >
                                Github
                            </a>
                            <br />
                            <a href="https://www.devpost.com/nicholasc861" target="_top" >
                                Devpost
                            </a>
                            <br />
                            <a href="https://www.linkedin.com/in/nicholaschunghun/" target="_top" >
                                LinkedIn
                            </a>
                        </Section>
                    </Col>
                    <Col>
                    <Section>
                            <h1>
                                Get in Touch
                                <br />
                                —
                            </h1>
                                <a href="mailto:nicholas.schunghun@gmail.com" target="_top" >
                                    nicholas.schunghun@gmail.com
                                </a>

                            <br />
                        </Section>
                    </Col>
                </Row>
            </Container>
            <Copyright>
                Developed by Nicholas Chung-Hun © 2020
            </Copyright>
        </Contact>
    )
}

export default ContactSection
