import axios from 'axios';

import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAILURE,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAILURE,
  NEW_ARTICLE_REQUEST,
  NEW_ARTICLE_SUCCESS,
  NEW_ARTICLE_FAILURE,
  LIKE_ARTICLE_REQUEST,
  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAILURE,
  USER_ARTICLES_REQUEST,
  USER_ARTICLES_SUCCESS,
  USER_ARTICLES_FAILURE,
  SAVE_ARTICLE_REQUEST,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILURE,
  DELETE_SAVED_ARTICLE_REQUEST,
  DELETE_SAVED_ARTICLE_SUCCESS,
  DELETE_SAVED_ARTICLE_FAILURE,
  GET_SAVED_ARTICLES_REQUEST,
  GET_SAVED_ARTICLES_SUCCESS,
  GET_SAVED_ARTICLES_FAILURE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
} from '../constants/articleConstants';
import { USER_SIGN_IN_SUCCESS } from '../constants/userConstants';

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });

    const { data } = await axios.get('/api/articles');

    dispatch({ type: ARTICLE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUserArticles = (id) => async (dispatch, getState) => {
  const { userInfo } = getState().userSignIn;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    dispatch({ type: USER_ARTICLES_REQUEST });

    const { data } = await axios.get(
      `/api/articles/user/${id}/articles`,
      config
    );

    dispatch({ type: USER_ARTICLES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_ARTICLES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listSavedArticles = (id) => async (dispatch, getState) => {
  const { userInfo } = getState().userSignIn;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    dispatch({ type: GET_SAVED_ARTICLES_REQUEST });

    const { data } = await axios.get(
      `/api/articles/user/${id}/saved-articles`,
      config
    );

    dispatch({ type: GET_SAVED_ARTICLES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SAVED_ARTICLES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listArticleDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/articles/${id}`);

    dispatch({ type: ARTICLE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ARTICLE_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewArticle =
  (title, coverImage, content, excerpt, tags) => async (dispatch, getState) => {
    try {
      dispatch({ type: NEW_ARTICLE_REQUEST });

      const { userInfo } = getState().userSignIn;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/articles`,
        { title, coverImage, content, excerpt, tags },
        config
      );

      dispatch({ type: NEW_ARTICLE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEW_ARTICLE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const likeArticle = (article) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_ARTICLE_REQUEST });

    const { userInfo } = getState().userSignIn;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.put(
      `/api/articles/${article._id}/likearticle`,
      article,
      config
    );

    dispatch({ type: LIKE_ARTICLE_SUCCESS });
  } catch (error) {
    dispatch({
      type: LIKE_ARTICLE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const saveArticle = (article, user) => async (dispatch, getState) => {
  try {
    dispatch({ type: SAVE_ARTICLE_REQUEST });

    const { userInfo } = getState().userSignIn;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/articles/${article._id}/savearticle`,
      user,
      config
    );

    dispatch({ type: SAVE_ARTICLE_SUCCESS });
    dispatch({
      type: USER_SIGN_IN_SUCCESS,
      payload: { ...userInfo, savedArticles: data.savedArticles },
    });

    // Updating localStorage
    const updatedUserObject = {
      ...userInfo,
      savedArticles: data.savedArticles,
    };
    localStorage.setItem('userInfo', JSON.stringify(updatedUserObject));
  } catch (error) {
    dispatch({
      type: SAVE_ARTICLE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSavedArticle =
  (article, user) => async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_SAVED_ARTICLE_REQUEST });

      const { userInfo } = getState().userSignIn;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/articles/${article._id}/delete-saved-article`,
        user,
        config
      );

      dispatch({ type: DELETE_SAVED_ARTICLE_SUCCESS });
      dispatch({
        type: USER_SIGN_IN_SUCCESS,
        payload: { ...userInfo, savedArticles: data.savedArticles },
      });

      // Updating localStorage
      const updatedUserObject = {
        ...userInfo,
        savedArticles: data.savedArticles,
      };
      localStorage.setItem('userInfo', JSON.stringify(updatedUserObject));
    } catch (error) {
      dispatch({
        type: DELETE_SAVED_ARTICLE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteArticle = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_ARTICLE_REQUEST });

    const { userInfo } = getState().userSignIn;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/articles/${id}`, config);

    dispatch({ type: DELETE_ARTICLE_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_ARTICLE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
