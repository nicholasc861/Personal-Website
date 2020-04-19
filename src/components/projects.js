import React from "react"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styled from "styled-components"

const Title = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    padding: 20px 0px;

`

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default class Projects extends React.Component {
    render(){
        return(
            <div>
                <Title>MY PORTFOLIO</Title>
                <Carousel responsive={responsive} infinite={true}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </div>
        )
    }
}