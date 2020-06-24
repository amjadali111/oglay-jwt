/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import map from 'lodash/map';
// import timezones from '../../data/timezones';
import validateInput from '../../../server/shared/validations/validateInput';
import { newUser } from '../../store/actions/authActions';
import { addFlashMessages } from '../../store/actions/flashMessages';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      timezone: new Date(),
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    }


    handleSubmit = (e) => {
      this.setState({ errors: {} });
      e.preventDefault();
      if (this.isValid()) {
        this.props.addUser(this.state).then(
          () => {
            this.props.addMessages({
              type: 'success',
              text: 'Welcome'
            });
            this.props.history.push('/');
          },
          ({ response }) => this.setState({ errors: response.data }),
        );
      }
    }

    isValid() {
      const { errors, isValid } = validateInput(this.state);
      this.setState({ errors });
      return isValid;
    }


    render() {
      // const options = map(timezones, (val, key) => <option key={val} value={val}>{key}</option>);
      // eslint-disable-next-line object-curly-newline
      // console.log(options);
      const {
        errors, password, firstName, lastName, email
      } = this.state;

      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">SignUp</h5>
            <br />
            <br />
            <div className={classnames('input-field col-s6', { 'has-error': errors.firstName })}>
              <label className="active" htmlFor="firstName">First Name</label>
              {errors.firstName && <span className="red-text">{errors.firstName}</span>}
              <input type="text" id="firstName" onChange={this.handleChange} value={firstName} />
            </div>
            <div className="input-field col-s6">
              <label className="active" htmlFor="lastName">Last Name</label>
              {errors.lastName && <span className="red-text">{errors.lastName}</span>}
              <input type="text" id="lastName" onChange={this.handleChange} value={lastName} />
            </div>
            <div className="input-field col-s6">
              <label className="active" htmlFor="email">Email</label>
              {errors.email && <span className="red-text">{errors.email}</span>}
              <input type="email" id="email" onChange={this.handleChange} className="validate" value={email} />
            </div>
            <div className="input-field col-s6">
              <label className="active" htmlFor="password">Password</label>
              {errors.password && <span className="red-text">{errors.password}</span>}
              <input type="password" id="password" autoComplete="off" onChange={this.handleChange} value={password} />
            </div>
            {/* <div className="input-field">
              <label className="active" htmlFor="timezone">Timezone</label>
              <select className="input-field" id="timezone" onChange={this.handleChange} value={timezone}>
                <option value="">Choose your timezone</option>
                {options}
              </select>
            </div> */}
            <div className="input-group">
              <div className="input-field">
                <button type="submit" className="btn grey darken-1 z-depth-0">Register</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
}
const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(newUser(user)),
  addMessages: message => dispatch(addFlashMessages(message))
});


export default connect(null, mapDispatchToProps)(SignUp);
