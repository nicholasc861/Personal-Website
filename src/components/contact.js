import React, { useEffect, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { scrollreveal, srBottomConfig } from "../utils/scrollreveal";

import styled from "styled-components";

const Contact = styled.div`
  padding: 0px;
  background-color: #1c1d1f;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 12px;
  padding: 30px 0px;
`;

const Section = styled.div`
  padding: 15px;
  font-size: 18px;
  color: #f7f9f9;
  text-align: center;

  br {
    line-height: 10px;
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
  }

  h2 {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 5px;
  }

  a {
    color: #f7f9f9;
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  a:hover {
    color: #2fbf71;
    text-decoration: underline;
    transition: 0.25s ease-in;
  }
`;

const Seperator = styled.div`
  margin: auto;
  margin-top: 20px;
  height: 0px;
  width: 325px;
  border: 1px solid #2fbf71;
`;

const ContactSection = () => {
  const reveal1 = useRef(null);
  const reveal2 = useRef(null);
  const reveal3 = useRef(null);
  const reveal4 = useRef(null);

  useEffect(() => {
    scrollreveal.reveal(reveal1.current, srBottomConfig());
    scrollreveal.reveal(reveal2.current, srBottomConfig());
    scrollreveal.reveal(reveal3.current, srBottomConfig());
    scrollreveal.reveal(reveal4.current, srBottomConfig());
  });

  return (
    <Contact id="contact">
      <Container>
        <Section>
        Get in touch at <a href="mailto:contact@nicholaschunghun.com">contact@nicholaschunghun.com</a>
        </Section>
      </Container>
      <Seperator />
      <Copyright ref={reveal4}>
        Developed by Nicholas Chung-Hun © 2021
      </Copyright>
    </Contact>
  );
};

export default ContactSection;
