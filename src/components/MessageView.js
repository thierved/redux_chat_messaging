import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {deleteMessage} from '../actions'

class MessageView extends Component {

  renderMessages({message}) {  
    return <p>{message}</p>;    
  }
  render() {
    console.log(this.props.data);
    
    return (
      <div id='messages'>
      {this.renderMessages(this.props.data)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({deleteMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);