import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import Hero from "./components/hero"
import NavigationBar from "./components/navbar"
import AboutSection from "./components/about"
import MainProjectSection from "./components/projects"
import OtherProjectSection from "./components/otherprojects"
import ContactSection from "./components/contact"
import PageWrapper from "./components/PageWrapper"
import ExperienceSection from './components/experience';
import GlobalStyle from './styles/GlobalStyle';


const navlinks = [
  { name: "about", to: "#about" },
  { name: "experience", to: "#experience" },
  { name: "projects", to: "#projects" },
  { name: "contact", to: "#contact" }
]

const brand = { name: "NC", to: "#" }

const Page = () => {
    return (
      <PageWrapper>
        <GlobalStyle />
        <NavigationBar brand={brand} links={navlinks} />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <MainProjectSection />
        <OtherProjectSection />
        <ContactSection />
      </PageWrapper>
    );
}

ReactDOM.render(<Page />, document.getElementById('root'));

