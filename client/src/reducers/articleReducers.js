import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAILURE,
  COVER_ARTICLE_REQUEST,
  COVER_ARTICLE_SUCCESS,
  COVER_ARTICLE_FAILURE,
  FEATURED_ARTICLES_REQUEST,
  FEATURED_ARTICLES_SUCCESS,
  FEATURED_ARTICLES_FAILURE,
  LATEST_ARTICLES_REQUEST,
  LATEST_ARTICLES_SUCCESS,
  LATEST_ARTICLES_FAILURE,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAILURE,
  NEW_ARTICLE_REQUEST,
  NEW_ARTICLE_SUCCESS,
  NEW_ARTICLE_FAILURE,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
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

export const articleListReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { loading: true, ...state };
    case ARTICLE_LIST_SUCCESS:
      return {
        loading: false,
        articles: action.payload.articles,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ARTICLE_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const coverArticleReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case COVER_ARTICLE_REQUEST:
      return { loading: true, ...state };
    case COVER_ARTICLE_SUCCESS:
      return { loading: false, success: true, article: action.payload };
    case COVER_ARTICLE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const featuredArticlesReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case FEATURED_ARTICLES_REQUEST:
      return { loading: true, ...state };
    case FEATURED_ARTICLES_SUCCESS:
      return { loading: false, success: true, articles: action.payload };
    case FEATURED_ARTICLES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const latestArticlesReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case LATEST_ARTICLES_REQUEST:
      return { loading: true, ...state };
    case LATEST_ARTICLES_SUCCESS:
      return { loading: false, success: true, articles: action.payload };
    case LATEST_ARTICLES_FAILURE:
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

export const updateArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_REQUEST:
      return { loading: true };
    case UPDATE_ARTICLE_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_ARTICLE_FAILURE:
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

export const listSavedArticlesReducer = (
  state = { savedArticles: {} },
  action
) => {
  switch (action.type) {
    case GET_SAVED_ARTICLES_REQUEST:
      return { loading: true };
    case GET_SAVED_ARTICLES_SUCCESS:
      return { loading: false, savedArticles: action.payload };
    case GET_SAVED_ARTICLES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const saveArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_ARTICLE_REQUEST:
      return { loading: true };
    case SAVE_ARTICLE_SUCCESS:
      return { loading: false, success: true };
    case SAVE_ARTICLE_FAILURE:
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

export const deleteSavedArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SAVED_ARTICLE_REQUEST:
      return { loading: true };
    case DELETE_SAVED_ARTICLE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_SAVED_ARTICLE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
