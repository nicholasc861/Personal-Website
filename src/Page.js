import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import Hero from "./components/hero"
import NavigationBar from "./components/navbar"
import AboutSection from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import PageWrapper from "./components/PageWrapper"

import './Page.css';

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

