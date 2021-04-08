import { createAction } from '@reduxjs/toolkit';

const registrationRequest = createAction('auth/registrationRequest');
const registrationSuccess = createAction('auth/registrationSuccess');
const registrationError = createAction('auth/registrationError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

export {
  registrationRequest,
  registrationSuccess,
  registrationError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
};
