import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextLoop from 'react-text-loop';

import Hero from "./components/hero"
import NavigationBar from "./components/navbar"
import PageWrapper from "./components/PageWrapper"

import './App.css';

const nameStyle = {
  color: '#7EB77F',
  fontWeight: '600',
};

const navlinks = [
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" }
]

const brand = { name: "test", to: "" }

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <NavigationBar brand={brand} links={navlinks} />
        <Hero id="" />
      </PageWrapper>
    );
  }
}

export default App;
