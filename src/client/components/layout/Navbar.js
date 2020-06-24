/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


export class Navbar extends Component {
  render() {
    const isAuthenticated = this.props;
    const signedInLinks = (
      <SignedInLinks />
    );
    const signedOutLinks = (
      <SignedOutLinks />
    );
    // const {links} = auth.uid?<SignedInLinks/>:<SignedOutLinks/>
    return (
      <nav className="nav-wrapper blue ">
        <div className="container ">
          <Link to="/" className="brand-logo">OGLAY</Link>
          <span className="right tabs-transparent"><NavLink to="/NotificationForm" className="btn btn-primary green">New Notification</NavLink></span>
          <div className="tabs tabs-transparent">
            <SignedInLinks />
            <SignedOutLinks />
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth
    // auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
