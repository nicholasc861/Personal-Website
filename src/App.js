import React, { Component } from 'react';
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
          <div class="github-icon">
            <a href="https://github.com/nicholasc861">
              <svg class="github"></svg>
            </a>
          </div>
          <div class="devpost-icon">
            <a href="https://devpost.com/nicholasc861">
              <svg class="devpost"></svg>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
