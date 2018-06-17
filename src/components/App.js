import React, { Component } from 'react';
import '../App.css';
import MessageInput from './MessageInput';
import MessageView from './MessageView';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h3>Chat Messaging</h3>
      <MessageView />      
      <MessageInput />
    </div>
    );
  }
}

export default App;
