import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAILURE,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAILURE,
} from '../constants/articleConstants';

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true, ...state };
    case ARTICLE_LIST_SUCCESS:
      return { loading: false, success: true, articles: action.payload };
    case ARTICLE_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleDetailsReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case ARTICLE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ARTICLE_DETAILS_SUCCESS:
      return { loading: false, success: true, article: action.payload };
    case ARTICLE_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
