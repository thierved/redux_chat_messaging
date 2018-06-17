import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h3>Chat Messaging</h3>
      <div id='messages'></div>
      <div className='input'>
        <input type='text' placeholder='Enter message' />
        <input type='submit' value='send' />
      </div>
    </div>
    );
  }
}

export default App;
