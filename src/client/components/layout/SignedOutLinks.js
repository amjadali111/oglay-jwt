import React from 'react';
import { NavLink } from 'react-router-dom';


export const SignedOuLinks = () => (
  <ul className="right tab">
    <li><NavLink to="/signup">SignUp</NavLink></li>
    <li><NavLink to="/signin">SignIn</NavLink></li>
  </ul>
);

export default SignedOuLinks;
