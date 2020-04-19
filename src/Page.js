import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'

// Component Imports
import Hero from "./components/hero"
import NavigationBar from "./components/navbar"
import AboutSection from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import PageWrapper from "./components/PageWrapper"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:500,600,700&display=swap');

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

`

const navlinks = [
  { name: "Projects", to: "#projects" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" }
]

const brand = { name: "NC", to: "#" }

class Page extends Component {
  render() {
    return (
      <PageWrapper>
        <GlobalStyle />
        <NavigationBar brand={brand} links={navlinks} />
        <Hero id="" />
        <AboutSection />
        <Projects />
        <Contact />
      </PageWrapper>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));

