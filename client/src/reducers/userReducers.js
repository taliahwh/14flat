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
  ADMIN_ANALYTICS_REQUEST,
  ADMIN_ANALYTICS_SUCCESS,
  ADMIN_ANALYTICS_FAILURE,
  USER_GET_NOTIFICATIONS_REQUEST,
  USER_GET_NOTIFICATIONS_SUCCESS,
  USER_GET_NOTIFICATIONS_FAILURE,
  USER_DELETE_NOTIFICATION_REQUEST,
  USER_DELETE_NOTIFICATION_SUCCESS,
  USER_DELETE_NOTIFICATION_FAILURE,
  ADMIN_GET_NOTIFICATIONS_REQUEST,
  ADMIN_GET_NOTIFICATIONS_SUCCESS,
  ADMIN_GET_NOTIFICATIONS_FAILURE,
  ADMIN_APPROVE_REQUEST_REQUEST,
  ADMIN_APPROVE_REQUEST_SUCCESS,
  ADMIN_APPROVE_REQUEST_FAILURE,
  ADMIN_DECLINE_REQUEST_REQUEST,
  ADMIN_DECLINE_REQUEST_SUCCESS,
  ADMIN_DECLINE_REQUEST_FAILURE,
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

export const userNotificationsReducer = (
  state = { notifications: {} },
  action
) => {
  switch (action.type) {
    case USER_GET_NOTIFICATIONS_REQUEST:
      return { loading: true };
    case USER_GET_NOTIFICATIONS_SUCCESS:
      return { loading: false, success: true, notifications: action.payload };
    case USER_GET_NOTIFICATIONS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminNotificationsReducer = (
  state = { notifications: {} },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_NOTIFICATIONS_REQUEST:
      return { loading: true };
    case ADMIN_GET_NOTIFICATIONS_SUCCESS:
      return { loading: false, success: true, notifications: action.payload };
    case ADMIN_GET_NOTIFICATIONS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDeleteNotificationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_NOTIFICATION_REQUEST:
      return { loading: true };
    case USER_DELETE_NOTIFICATION_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_NOTIFICATION_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userSendWriterRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SEND_WRITER_REQUEST_REQUEST:
      return { loading: true };
    case USER_SEND_WRITER_REQUEST_SUCCESS:
      return { loading: false, success: true };
    case USER_SEND_WRITER_REQUEST_FAILURE:
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

export const adminApproveRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_APPROVE_REQUEST_REQUEST:
      return { loading: true };
    case ADMIN_APPROVE_REQUEST_SUCCESS:
      return { loading: false, success: true };
    case ADMIN_APPROVE_REQUEST_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminDeclineRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DECLINE_REQUEST_REQUEST:
      return { loading: true };
    case ADMIN_DECLINE_REQUEST_SUCCESS:
      return { loading: false, success: true, analytics: action.payload };
    case ADMIN_DECLINE_REQUEST_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
