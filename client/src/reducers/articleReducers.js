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
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
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

export const likeArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_ARTICLE_REQUEST:
      return { loading: true };
    case LIKE_ARTICLE_SUCCESS:
      return { loading: false, success: true };
    case LIKE_ARTICLE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userArticleReducer = (state = { userArticles: {} }, action) => {
  switch (action.type) {
    case USER_ARTICLES_REQUEST:
      return { loading: true };
    case USER_ARTICLES_SUCCESS:
      return { loading: false, userArticles: action.payload };
    case USER_ARTICLES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_REQUEST:
      return { loading: true };
    case DELETE_ARTICLE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ARTICLE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
