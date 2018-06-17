import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {addMessage, deleteMessage} from '../actions'

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
            <input type='submit'
                   value='send'
                   onClick={() => this.props.addMessage(this.state.value)} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addMessage}, dispatch)
}

export default connect(null, mapDispatchToProps)(MessageInput);
