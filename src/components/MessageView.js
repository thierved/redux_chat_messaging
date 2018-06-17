import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class MessageView extends Component {
  render() {
    return (
      <div id='messages'>
      {this.props.message.map((item, index) => {
        return <p key={index}>{item}</p>
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

export default connect(mapStateToProps, null)(MessageView);