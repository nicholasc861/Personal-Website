import React from "react"
import styled from "styled-components"

const Title = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    background-color: #F9F9F9;
    padding: 20px 0px;

`

export default class Projects extends React.Component {
    render(){
        return(
            <Title>MY PORTFOLIO</Title>
        )
    }
}