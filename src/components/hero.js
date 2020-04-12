import React from "react"
import {Container, Row, Col} from "react-bootstrap"

export default class Hero extends React.Component {
    render(){
        return (
            <header className="hero">
                <Container>
                    <Row>
                        <Col lg={5}></Col>
                        <Col lg={7} className="hero-content">
                            <h1 className="title">
                                Nicholas Chung-Hun
                            </h1>
                            <h2 className="subtitle">
                                Computer Engineering Student<br />
                                University of Waterloo
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}