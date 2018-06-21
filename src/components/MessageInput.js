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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.addMessage(this.state.value);
      this.setState({value: ''});
  }

  render() {
    return (
        <div className='input'>
            <input type='text' 
                   placeholder='Enter message'
                   value={this.state.value}
                   onChange={e => this.setState({value: e.target.value})} />
            <input type='submit'
                   value='send'
                   onClick={this.handleSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addMessage}, dispatch)
}

export default connect(null, mapDispatchToProps)(MessageInput);
