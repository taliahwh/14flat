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
  ADMIN_ANALYTICS_REQUEST,
  ADMIN_ANALYTICS_SUCCESS,
  ADMIN_ANALYTICS_FAILURE,
} from '../constants/userConstants';

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return { loading: true };
    case USER_SIGN_IN_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_SIGN_IN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP_REQUEST:
      return { loading: true };
    case USER_SIGN_UP_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_SIGN_UP_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, success: true, userDetails: action.payload };
    case USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userUpdateEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_EMAIL_REQUEST:
      return { loading: true };
    case USER_UPDATE_EMAIL_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_EMAIL_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userUpdatePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case USER_UPDATE_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminAnalyticsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ANALYTICS_REQUEST:
      return { loading: true };
    case ADMIN_ANALYTICS_SUCCESS:
      return { loading: false, success: true, analytics: action.payload };
    case ADMIN_ANALYTICS_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
