/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';


export const SignedInLinks = props => (
  <ul className="right ">
    <li className="tab"><NavLink to="/create">New Project</NavLink></li>
    <li className="tab"><a onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to="/" className="btn btn-floating pink lighten-1">Hi</NavLink></li>
  </ul>
);
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logOut())
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
