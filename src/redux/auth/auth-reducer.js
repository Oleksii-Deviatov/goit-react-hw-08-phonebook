import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions';

const initlUserState = { name: null, email: null };

const user = createReducer(initlUserState, {
  [actions.registrationSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initlUserState,
});

const token = createReducer(null, {
  [actions.registrationSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [actions.registrationError]: setError,
  [actions.loginError]: setError,
  [actions.logoutError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
