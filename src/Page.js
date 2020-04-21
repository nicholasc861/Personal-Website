import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'

// Component Imports
import Hero from "./components/hero"
import NavigationBar from "./components/navbar"
import AboutSection from "./components/about"
import Projects from "./components/projects"
import ContactSection from "./components/contact"
import PageWrapper from "./components/PageWrapper"

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a:hover {
      text-decoration: none;
      
    }

`

const navlinks = [
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contact" }
]

const brand = { name: "NC", to: "#" }

const Page = () => {
    return (
      <PageWrapper>
        <GlobalStyle />
        <NavigationBar brand={brand} links={navlinks} />
        <Hero id="" />
        <AboutSection />
        <Projects />
        <ContactSection />
      </PageWrapper>
    );
}

ReactDOM.render(<Page />, document.getElementById('root'));

