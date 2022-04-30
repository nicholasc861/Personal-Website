import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styled from "styled-components";

import ProfilePhoto from "../assets/cropped.jpg";
import Github from "../assets/github.svg";
import Devpost from "../assets/devpost.svg";
import Linkedin from "../assets/linkedin.svg";
import Resume from "../assets/resume.svg";
import Arrow from "../assets/arrow.svg";

const HeroHeader = styled.header`
  background-size: cover;
  background-color: #121212;
  background-position: center;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const HeroContent = styled.div`
  top: 26%;
  position: relative;
`;

const Greeting = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #f7f9f9;
`;

const Name = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #2fbf71;
  animation-delay: 300ms !important;
`;

const HeroPhoto = styled.div`
  background: linear-gradient(
      0deg,
      rgba(45, 45, 45, 0.1),
      rgba(45, 45, 45, 0.1)
    ),
    url(${(props) => props.src});
  background-position: center;
  background-size: 550px;
  height: 450px;
  width: 450px;
  border-radius: 50%;
  padding-left: 10px;
  margin-left: -10px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #f7f9f9;
  animation-delay: 500ms !important;
`;

const BottomArrow = styled(Image)`
  height: 15px;
  width: 15px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  animation-delay: 1000ms !important;
  opacity: ${(props) => props.opacity};
`;

const Icons = styled.div`
  margin-top: 15px;
  display: flex;
  animation-delay: 700ms !important;
`;

const IconRing = styled.div`
  border: 0.5px solid #2fbf71;
  border-radius: 100%;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(Image)`
  width: 16px;
  height: 16px;
  color: #f7f9f9;

  &:hover {
    transition: 0.25s ease;
    opacity: 1;
  }
`;

const Hero = () => {
  const [opacity, changeOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = 75 / window.scrollY < 0.1 ? 0 : 100 / window.scrollY;
      let opacity = Math.min(currentScrollY, 1);
      changeOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacity]);

  return (
    <HeroHeader>
      <Container>
        <Row>
          <Col>
            <HeroPhoto src={ProfilePhoto} />
          </Col>
          <Col>
            <HeroContent>
              <Greeting>Hello,</Greeting>
              <Name>
                <span style={{ color: "#f7f9f9" }}>I'm</span> Nicholas Chung-Hun
              </Name>
              <Subtitle>
                A Computer Engineering student at the University of Waterloo
                passionate about fintech
              </Subtitle>
              <Icons>
                <a href="https://www.github.com/nicholasc861" target="_blank" rel="noreferrer">
                  <IconRing>
                    <Icon src={Github} />
                  </IconRing>
                </a>

                <a href="https://www.linkedin.com/in/nicholaschunghun/" target="_blank" rel="noreferrer">
                  <IconRing>
                    <Icon src={Linkedin} />
                  </IconRing>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <IconRing>
                    <Icon src={Resume} />
                  </IconRing>
                </a>
                <a href="https://devpost.com/nicholasc861" target="_blank" rel="noreferrer">
                  <IconRing>
                    <Icon src={Devpost} />
                  </IconRing>
                </a>
              </Icons>
            </HeroContent>
          </Col>
        </Row>
      </Container>
      <BottomArrow
        className="slide-in-bottom"
        src={Arrow}
        opacity={opacity}
      ></BottomArrow>
    </HeroHeader>
  );
};

export default Hero;
