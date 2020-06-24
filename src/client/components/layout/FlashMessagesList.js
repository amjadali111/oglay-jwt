/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';

export class FlashMessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const msgList = this.props.messages;
    let msgz = this.messagesList;
    if (msgList) {
      msgz = msgList.map(message => <FlashMessage key={message.id} message={message} />);
    }
    return (
      <div>{ messagesList }</div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.flashMessages
});


export default connect(mapStateToProps)(FlashMessagesList);
