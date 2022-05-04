import axios from 'axios';

import {
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  USER_UPDATE_EMAIL_REQUEST,
  USER_UPDATE_EMAIL_SUCCESS,
  USER_UPDATE_EMAIL_FAILURE,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAILURE,
  USER_SEND_WRITER_REQUEST_REQUEST,
  USER_SEND_WRITER_REQUEST_SUCCESS,
  USER_SEND_WRITER_REQUEST_FAILURE,
  USER_GET_NOTIFICATIONS_REQUEST,
  USER_GET_NOTIFICATIONS_SUCCESS,
  USER_GET_NOTIFICATIONS_FAILURE,
  ADMIN_ANALYTICS_REQUEST,
  ADMIN_ANALYTICS_SUCCESS,
  ADMIN_ANALYTICS_FAILURE,
  USER_DELETE_NOTIFICATION_REQUEST,
  USER_DELETE_NOTIFICATION_SUCCESS,
  USER_DELETE_NOTIFICATION_FAILURE,
  ADMIN_APPROVE_REQUEST_REQUEST,
  ADMIN_APPROVE_REQUEST_SUCCESS,
  ADMIN_APPROVE_REQUEST_FAILURE,
  ADMIN_DECLINE_REQUEST_REQUEST,
  ADMIN_DECLINE_REQUEST_SUCCESS,
  ADMIN_DECLINE_REQUEST_FAILURE,
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

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { userInfo } = getState().userSignIn;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sendWriterRequest =
  (name, description) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_SEND_WRITER_REQUEST_REQUEST });

      const { userInfo } = getState().userSignIn;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        '/api/users/writer-request',
        { name, description },
        config
      );

      dispatch({ type: USER_SEND_WRITER_REQUEST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_SEND_WRITER_REQUEST_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateEmail =
  (newEmail, confirmNewEmail) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_EMAIL_REQUEST });

      const { userInfo } = getState().userSignIn;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        '/api/users/profile-email',
        { newEmail, confirmNewEmail },
        config
      );

      dispatch({ type: USER_UPDATE_EMAIL_SUCCESS, payload: data });

      // Login user directly after succesful sign in
      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });

      // Save userInfo to local storage
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_UPDATE_EMAIL_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updatePassword =
  (oldPassword, newPassword, confirmNewPassword) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_PASSWORD_REQUEST });

      const { userInfo } = getState().userSignIn;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        '/api/users/profile-password',
        { oldPassword, newPassword, confirmNewPassword },
        config
      );

      dispatch({ type: USER_UPDATE_PASSWORD_SUCCESS, payload: data });

      // Login user directly after succesful sign in
      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });

      // Save userInfo to local storage
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_UPDATE_PASSWORD_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getNotifications = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_GET_NOTIFICATIONS_REQUEST });

    const { userInfo } = getState().userSignIn;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/users/notifications', config);

    dispatch({ type: USER_GET_NOTIFICATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_GET_NOTIFICATIONS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteNotifications = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_NOTIFICATION_REQUEST });

    const { userInfo } = getState().userSignIn;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/api/users/notifications/${id}`,
      config
    );

    dispatch({ type: USER_DELETE_NOTIFICATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DELETE_NOTIFICATION_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/* -------------- ADMIN ---------------- */

export const getAnalytics = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_ANALYTICS_REQUEST });

    const { userInfo } = getState().userSignIn;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/users/analytics', config);

    dispatch({ type: ADMIN_ANALYTICS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_ANALYTICS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveRequest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_APPROVE_REQUEST_REQUEST });

    const { userInfo } = getState().userSignIn;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/users/approve-writer-request/${id}`,
      config
    );

    dispatch({ type: ADMIN_APPROVE_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_APPROVE_REQUEST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const declineRequest = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_DECLINE_REQUEST_REQUEST });

    const { userInfo } = getState().userSignIn;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/users/decline-writer-request/${id}`,
      config
    );

    dispatch({ type: ADMIN_DECLINE_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_DECLINE_REQUEST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
