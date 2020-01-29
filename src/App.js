import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <header class="hero">
        <div class="hero-content">
          <h1 class="hero-header">
            Nicholas Chung-Hun
          </h1>
          <p className="subtitle">
            Computer Engineering Student at the<br>
            </br>University of Waterloo
          </p>
          <div class="icons">
            <ul>
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
