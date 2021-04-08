import axios from 'axios';
import * as actions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(actions.registrationRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(actions.registrationSuccess(response.data));
  } catch (error) {
    dispatch(actions.registrationError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    const response = await axios.post('/users/logout');

    token.unset();
    dispatch(actions.logoutSuccess(response.data));
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};

export { register, login, logout };
