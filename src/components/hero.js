import React from "react"
import TextLoop from "react-text-loop"
import { Container, Row, Col, Image } from "react-bootstrap"

import styled from "styled-components"

import HeroBackground from "../assets/background.jpg"
import Github from "../assets/github.svg"
import Devpost from "../assets/devpost.svg"
import Linkedin from "../assets/linkedin.svg"
import Resume from "../assets/resume.svg"
import Email from "../assets/email.svg"


const Name = styled.div`
    font-size: 45px;
    font-weight: 600;
    font-family: 'Karla', sans-serif;
    opacity: 0.9;
    color: #FDFFFC;
`

const Subtitle = styled.div`
    font-family: 'Karla', sans-serif;
    font-size: 25px;
    font-weight: 400;
    opacity: 0.75;
    color: #97D2FB;
`

const Greeting = styled.div`
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.9;
    color: #FDFFFC;
`

const HeroContent = styled(Col)`
    top: 30%;
    padding-left: 20px;
`

const HeroHeader = styled.header`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const Icons = styled.div`
    margin-top: 5px
`

const Icon = styled(Image)`
    width: 18px;
    height: 18px;
    opacity: 0.5;
    margin-right: 10px;
    
    &:hover {
        transition: 15ms ease;
        opacity: 1.0;
    }
`

const Hero = () => {
    return (
        <HeroHeader>
            <Container>
                <Row>
                    <Col lg={5}></Col>
                    <HeroContent lg={7}>
                        <Greeting>
                            HEY THERE!
                        </Greeting>
                        <Name>
                            I'M NICHOLAS CHUNG-HUN
                        </Name>
                        <Subtitle>
                            A&nbsp;
                            <TextLoop>
                                <span>COMPUTER ENGINEERING STUDENT 👨‍🎓</span>
                                <span>TRAVEL ENTHUSIAST ✈️</span>
                                <span>SNEAKER COLLECTOR 👟</span>
                                <span>FOOD CONNOISSEUR 🍣</span>
                            </TextLoop>
                        </Subtitle>
                        <Icons>
                            <a href="mailto:nicholas.schunghun@gmail.com" target="_top" >
                                <Icon src={Email} />
                            </a>
                            <a href="blank" target="_blank" >
                                <Icon src={Resume} />
                            </a>
                            <a href="https://github.com/nicholasc861" target="_blank">
                                <Icon src={Github} />
                            </a>
                            <a href="https://devpost.com/nicholasc861" target="_blank">
                                <Icon src={Devpost} />
                            </a>
                            <a href="https://www.linkedin.com/in/nicholaschunghun/" target="_blank">
                                <Icon src={Linkedin} />
                            </a>
                        </Icons>
                    </HeroContent>
                </Row>
            </Container>
        </HeroHeader>
    )
}

export default Hero