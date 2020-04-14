import React from "react"
import TextLoop from "react-text-loop"
import {Container, Row, Col} from "react-bootstrap"

import styled from "styled-components"

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

export default class Hero extends React.Component {
    render(){
        return (
            <header className="hero">
                <Container>
                    <Row>
                        <Col lg={5}></Col>
                        <Col lg={7} className="hero-content">
                            <Greeting>
                                HEY THERE!
                            </Greeting>
                            <Name>
                                I'M NICHOLAS CHUNG-HUN
                            </Name>
                            <Subtitle>
                                A&nbsp;
                                <TextLoop>
                                    <span>COMPUTER ENGINEERING STUDENT 🎓</span>
                                    <span>TRAVEL ENTHUSIAST ✈️</span>
                                    <span>SNEAKER COLLECTOR 👟</span>
                                </TextLoop>
                            </Subtitle>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}