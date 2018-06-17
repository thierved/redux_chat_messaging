import React, { Component } from 'react'

class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
        <div className='input'>
            <input type='text' 
                   placeholder='Enter message'
                   onChange={e => this.setState({value: e.target.value})} />
            <input type='submit' value='send' />
      </div>
    )
  }
}

export default MessageInput;
