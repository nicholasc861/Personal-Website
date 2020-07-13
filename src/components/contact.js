import React, { useEffect, useRef } from "react"
import { Container, Col, Row } from "react-bootstrap"
import {scrollreveal, srBottomConfig} from '../utils/scrollreveal'

import styled from 'styled-components'

const Contact = styled.div`
    padding: 50px 250px 0px;
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

    h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 5px;
    }

    a {
        color: #434854;
        text-decoration: underline;
        text-decoration-style: dotted;
    }

    a:hover {
        color: #97D2FB;
        text-decoration: underline;
        transition: 0.25s ease-in;
    }
`

const ContactSection = () => {
    const reveal1 = useRef(null);
    const reveal2 = useRef(null);
    const reveal3 = useRef(null);
    const reveal4 = useRef(null);


    useEffect(() => {
        scrollreveal.reveal(reveal1.current, srBottomConfig())
        scrollreveal.reveal(reveal2.current, srBottomConfig())
        scrollreveal.reveal(reveal3.current, srBottomConfig())
        scrollreveal.reveal(reveal4.current, srBottomConfig())

    })


    return(
        <Contact id="contact">
            <Container>
                <Row>
                    <Col xs={5}>
                        <Section ref={reveal1}>
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
                        <Section ref={reveal2}>
                            <h1>
                                Find Out More
                                <br />
                                —
                            </h1>
                            <h2>
                                <a href="" target="_blank" >
                                    Resume
                                </a>
                            </h2>
                            <h2>
                                <a href="https://www.github.com/nicholasc861" target="_blank" >
                                    Github
                                </a>
                            </h2>
                            <h2>
                                <a href="https://www.devpost.com/nicholasc861" target="_blank" >
                                    Devpost
                                </a>
                            </h2>
                            <h2>
                                <a href="https://www.linkedin.com/in/nicholaschunghun/" target="_blank" >
                                    LinkedIn
                                </a>
                            </h2>
                        </Section>
                    </Col>
                    <Col>
                        <Section ref={reveal3}>
                            <h1>
                                Get in Touch
                                <br />
                                —
                            </h1>
                                <h2>General Inquiries</h2>
                                <a href="contact@nicholaschung-hun.me" target="_top" >
                                    contact@nicholaschung-hun.me
                                </a>
                                <br />
                                <br />
                                <h2>Internship Opportunities</h2>
                                <a href="intern@nicholaschung-hun.me" target="_top" >
                                    intern@nicholaschung-hun.me
                                </a>
                        </Section>
                    </Col>
                </Row>
            </Container>
            <Copyright ref={reveal4}>
                Developed by Nicholas Chung-Hun © 2020
            </Copyright>
        </Contact>
    )
}

export default ContactSection
