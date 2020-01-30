import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextLoop from 'react-text-loop';
import './App.css';

const nameStyle = {
  color: '#7EB77F',
  fontWeight: '600',
};

class App extends Component {
  render() {
    return (
      <header class="hero">
        <div class="hero-content">
          <h1 class="hero-header">
            Hello! I'm <span style={nameStyle}>Nicholas Chung-Hun.</span>
          </h1>
          <h2 className="subtitle">
            Computer Engineering Student<br>
            </br>University of Waterloo
          </h2>
          <div className="icons">
            <ul className='social'>
            <li><a href="https://github.com/nicholasc861" target="_blank">
              <svg class="github"></svg>
            </a></li>
            <li><a href="https://devpost.com/nicholasc861" target="_blank">
              <svg class="devpost"></svg>
            </a></li>
            <li><a href="https://www.linkedin.com/in/nicholaschunghun" target="_blank">
              <svg class="linkedin"></svg>
            </a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
