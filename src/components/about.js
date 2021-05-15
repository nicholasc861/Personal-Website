import React from "react";
import { useState, useRef, useEffect } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import {
  scrollreveal,
  srBottomConfig,
  srRightConfig,
} from "../utils/scrollreveal";
import styled from "styled-components";

import aboutPhoto from "../assets/aboutPhoto.jpg";

const About = styled.div`
  padding: 175px 0px;
  background-color: #1c1d1f;

  @media screen and (min-width: 578px) and (max-width: 800px) {
    .info {
      margin: auto;
      padding: 50px;
      font-size: 10px;
    }

    img {
      margin: auto;
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 400px) {
    .info {
      margin: auto;
      padding: 50px;
      font-size: 20px;
    }

    img {
      margin: auto;
      width: 310px;
      height: 310px;
    }
  }
`;

const Header = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #2fbf71;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

/* About Section Content */

const AboutInfo = styled.div`
  font-size: 16px;
  margin: 20px 40px;
  color: #f7f9f9;

  br {
    line-height: 2px;
  }
`;

/* Photo Styling*/

const PhotoDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-position: center center;
`;

const AboutPhoto = styled(Image)`
  width: 350px;
  height: 350px;
  box-shadow: 15px 10px 8px rgba(0, 0, 0, 0.25);
`;

/* Technology List */

const TechnologyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  font-size: 15px;
  overflow: hidden;
  padding: 0px;
  margin: 10px 0px 0px;
  list-style: none;
`;

const TechnologyItem = styled.li`
  ::before {
    content: "» ";
  }
`;

/* Start Component */

const AboutSection = () => {
  const [isVisible, setVisible] = useState(true);
  const animateReveal1 = useRef(null);
  const animateReveal2 = useRef(null);

  useEffect(() => {
    scrollreveal.reveal(animateReveal1.current, srBottomConfig());
    scrollreveal.reveal(animateReveal2.current, srRightConfig());
  }, []);

  return (
    <About id="about">
      <Container>
        <Header>About Me</Header>
        <Row>
          <Col xs={12} lg={7}>
            <AboutInfo ref={animateReveal1}>
              My name is Nicholas! I am currently a second-year Computer
              Engineering student at the University of Waterloo. In my free
              time, you can find me on the field playing Ultimate Frisbee or
              researching my next food adventure.
              <br />
              <br />
              I've always loved technology and often find myself browsing new
              phone releases and technological advancements. Recently, I've been
              learning Go and building web apps with React.
              <br />
              <br />
              Here are the technologies I work with:
              <TechnologyList>
                <TechnologyItem>Golang</TechnologyItem>
                <TechnologyItem>React.js</TechnologyItem>
                <TechnologyItem>Python 3</TechnologyItem>
                <TechnologyItem>C++</TechnologyItem>
                <TechnologyItem>Node.js</TechnologyItem>
                <TechnologyItem>HTML/CSS</TechnologyItem>
              </TechnologyList>
            </AboutInfo>
          </Col>
          <Col xs={12} lg={5}>
            <PhotoDiv>
              <AboutPhoto ref={animateReveal2} src={aboutPhoto} roundedCircle />
            </PhotoDiv>
          </Col>
        </Row>
      </Container>
    </About>
  );
};

export default AboutSection;
