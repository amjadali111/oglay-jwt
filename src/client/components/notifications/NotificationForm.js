/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// *** no curly braces in 'import' while default keyword is used in defination of the action ***
import add from '../../store/actions/addNotification';


export class NotificationForm extends Component {
    state = {
      title: null,
      notification: null
    };

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addNew(this.state); // *** _this.props.addNew is not a function problem ***
      // this error is just because of the parent component not connected with the redux store
      // now solved by using direct connection to NotificationForm which is byself parent component
    }

    render() {
      return (
        <div className="Form-Group">
          <div className="container">
            <div className="card">
              <h2 className="green white-text center">Create New Notification</h2>
              <br />
              <br />
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="title" onChange={this.handleChange} />
                <input type="text" id="notification" onChange={this.handleChange} />
                <button type="submit" className="btn btn-primary green">SAVE</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  addNew: data => dispatch(add(data))
});

export default connect(null, mapDispatchToProps)(NotificationForm);
