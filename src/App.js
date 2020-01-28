import React, { Component } from 'react';
import logo from './logo.svg';
import Typing from 'react-typing-animation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <background>
          <Typing loop={false} speed={20}>
            <div className="title">
              Hi! I'm <span style={{fontWeight: "bolder"}}>Nicholas Chung-Hun</span>!
            </div>
          </Typing>
        </background>
      </div>
    );
  }
}

export default App;
