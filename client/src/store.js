import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
  articleDetailsReducer,
  articleListReducer,
} from './reducers/articleReducers';

import {
  featuredPodcastReducer,
  podcastDetailsReducer,
  podcastEpisodeDetailsReducer,
} from './reducers/podcastReducers';

const reducer = combineReducers({
  articleList: articleListReducer,
  articleDetails: articleDetailsReducer,
  featuredPodcasts: featuredPodcastReducer,
  podcastDetails: podcastDetailsReducer,
  episodeDetails: podcastEpisodeDetailsReducer,
});

// Initial state when the redux store loads
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
