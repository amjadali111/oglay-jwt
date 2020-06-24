/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logInValidations from '../../../server/shared/validations/loginValidations';
import logInAction from '../../store/actions/authActions';

export class SignIn extends Component {
    state={
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }

    isValid() {
      const { errs, isValid } = logInValidations(this.state);
      if (!isValid) {
        this.setState({ errors: errs });
      }
      return isValid;
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      if (this.isValid()) {
        this.props.logIn(this.state).then(
          res => this.props.history.push('/')
          // err => this.setState({ errors: err.data.errors, isloading: false })
        );
      }
    }

    render() {
      const { username, password, errors, isloading } = this.state;
      const { authError } = this.props;

      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign-In</h5>
            <br />
            <br />
            {errors.username && <span className="red-text">{errors.username}</span>}

            {errors.form && <div className="red-text">{errors.form}</div>}
            <div className="input-field col-s6">
              <label className="active" htmlFor="username">username</label>
              {errors.username && <span className="red-text">{errors.username}</span>}
              <input type="text" id="username" onChange={this.handleChange} className="validate" value={username} />
            </div>
            <div className="input-field col-s6">
              <label className="active" htmlFor="password">password</label>
              {errors.password && <span className="red-text">{errors.password}</span>}
              <input type="password" id="password" className="validate" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0" disabled={isloading}>LogIn</button>
            </div>
            <div className="red-text">
              { authError ? <p className="center">{authError}</p> : null }
            </div>
          </form>
        </div>
      );
    }
}

const maptStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => ({
  logIn: creds => dispatch(logInAction(creds))
  // signIn: (creds) called and passed argument from the component
  // dispatch(signIn(creds)) passes creds to signIn() action then to reducer
});

export default connect(maptStateToProps, mapDispatchToProps)(SignIn);
