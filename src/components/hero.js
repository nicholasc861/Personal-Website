import React from "react"
import TextLoop from "react-text-loop"
import Typist from "react-typing-animation"
import {Container, Row, Col} from "react-bootstrap"


export default class Hero extends React.Component {
    render(){
        return (
            <header className="hero">
                <Container>
                    <Row>
                        <Col lg={5}></Col>
                        <Col lg={7}>
                            <div className="hero-content">
                                <h1 className="title">
                                    Nicholas Chung-Hun
                                </h1>
                                <h2 className="subtitle">
                                    Computer Engineering Student<br />
                                    University of Waterloo
                                </h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}