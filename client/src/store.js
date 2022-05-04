import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
  articleDetailsReducer,
  articleListReducer,
  newArticleReducer,
  likeArticleReducer,
  userArticleReducer,
  deleteArticleReducer,
  saveArticleReducer,
  listSavedArticlesReducer,
  deleteSavedArticleReducer,
  coverArticleReducer,
  featuredArticlesReducer,
} from './reducers/articleReducers';

import {
  featuredPodcastReducer,
  podcastDetailsReducer,
  podcastEpisodeDetailsReducer,
  podcastLatestEpsiodeReducer,
} from './reducers/podcastReducers';

import {
  adminAnalyticsReducer,
  adminApproveRequestReducer,
  adminDeclineRequestReducer,
  userDeleteNotificationReducer,
  userDetailsReducer,
  userNotificationsReducer,
  userSendWriterRequestReducer,
  userSignInReducer,
  userSignUpReducer,
  userUpdateEmailReducer,
  userUpdatePasswordReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  articleList: articleListReducer,
  coverArticle: coverArticleReducer,
  featuredArticles: featuredArticlesReducer,
  articleDetails: articleDetailsReducer,
  newArticle: newArticleReducer,
  likeArticle: likeArticleReducer,
  saveArticle: saveArticleReducer,
  deleteSavedArticle: deleteSavedArticleReducer,
  savedArticles: listSavedArticlesReducer,
  deleteArticle: deleteArticleReducer,
  featuredPodcasts: featuredPodcastReducer,
  podcastDetails: podcastDetailsReducer,
  episodeDetails: podcastEpisodeDetailsReducer,
  latestEpisodes: podcastLatestEpsiodeReducer,
  userArticles: userArticleReducer,
  userSignIn: userSignInReducer,
  userSignUp: userSignUpReducer,
  userDetails: userDetailsReducer,
  userUpdateEmail: userUpdateEmailReducer,
  userUpdatePassword: userUpdatePasswordReducer,
  userNotifications: userNotificationsReducer,
  userDeleteNotification: userDeleteNotificationReducer,
  userSendWriterRequest: userSendWriterRequestReducer,
  adminAnalytics: adminAnalyticsReducer,
  adminApproveRequest: adminApproveRequestReducer,
  adminDeclineRequest: adminDeclineRequestReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// Initial state when the redux store loads
const initialState = {
  userSignIn: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
