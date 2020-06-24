/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export class FlashMessage extends Component {
  render() {
    const { id, type, text } = this.props;
    return (
      <div>{text}</div>
    );
  }
}
export default FlashMessage;
