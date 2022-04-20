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

export const newArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_ARTICLE_REQUEST:
      return { loading: true };
    case NEW_ARTICLE_SUCCESS:
      return { loading: false, success: true, newArticle: action.payload };
    case NEW_ARTICLE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
