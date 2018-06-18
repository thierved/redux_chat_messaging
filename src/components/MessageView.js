import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {deleteMessage} from '../actions'

class MessageView extends Component {
  render() {
    
    return (
      <div id='messages'>
      {this.props.message.map((item, index) => {
        return <p key={index} 
                  onClick={() => this.props.deleteMessage(this.props.message[0])}>{item}</p>
      })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({deleteMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);