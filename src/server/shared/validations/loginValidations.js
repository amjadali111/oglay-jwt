/* eslint-disable func-names */
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');

const logInValidations = function (user) {
  const errors = {};

  if (validator.isEmpty(user.username)) {
    errors.username = ' This field is required.. ';
  }
  if (validator.isEmpty(user.password)) {
    errors.password = 'This field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = logInValidations;
