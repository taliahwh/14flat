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
} from '../constants/articleConstants';

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
