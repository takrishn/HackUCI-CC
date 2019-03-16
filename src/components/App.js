import React, { Component } from 'react';
import '../styles/App.css';
import Form from './form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">

          <div className="feedback-container">
            <h2 className="feedback-header">Feedback</h2>
            <Form/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
