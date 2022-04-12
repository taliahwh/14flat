import axios from 'axios';

import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAILURE,
} from '../constants/articleConstants';

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });

    const data = await axios.get('/api/articles');

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
