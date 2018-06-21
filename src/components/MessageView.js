import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {deleteMessage} from '../actions'

class MessageView extends Component {

  renderMessages({data, deleteMessage}) {  
    return data.map((item, index) => {
      return <p key={index} 
                onClick= {() => deleteMessage(index)}
                className={index%2 === 0? 'even': 'odd'}
                >{item}</p>
    });
  }

  render() {
    console.log(this.props);
    
    return (
      <div id='messages'>
      {this.renderMessages(this.props)}
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