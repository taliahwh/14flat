import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAILURE,
} from '../constants/articleConstants';

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true, articles: [] };
    case ARTICLE_LIST_SUCCESS:
      return { loading: false, articles: action.payload };
    case ARTICLE_LIST_FAILURE:
      return { loading: false, error: action.playload };
    default:
      return state;
  }
};
