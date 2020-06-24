/* eslint-disable func-names */
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');

const signUp = function (data) {
  const errors = {};

  if (validator.isEmpty(data.firstName)) {
    errors.firstName = ' This field is required.. ';
  }
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = ' This field is required.. ';
  }
  if (validator.isEmpty(data.email)) {
    errors.email = ' This field is required.. ';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email address is invalid';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  // console.log(data, errors);
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = signUp;
