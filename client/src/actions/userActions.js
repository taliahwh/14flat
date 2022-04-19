import axios from 'axios';

import {
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  USER_LOGOUT,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE,
} from '../constants/userConstants';

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGN_IN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/signin',
      { email, password },
      config
    );

    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });

    // Save userInfo to local storage
    localStorage.setItem('userInfo', JSON.stringify(data));
    document.location.href = '/';
  } catch (error) {
    dispatch({
      type: USER_SIGN_IN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/';
};

export const signUp =
  (email, name, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_SIGN_UP_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users/signup',
        { name, email, password, confirmPassword },
        config
      );

      dispatch({ type: USER_SIGN_UP_SUCCESS, payload: data });

      // Login user directly after succesful sign in
      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });

      // Save userInfo to local storage
      localStorage.setItem('userInfo', JSON.stringify(data));
      document.location.href = '/';
    } catch (error) {
      dispatch({
        type: USER_SIGN_UP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
