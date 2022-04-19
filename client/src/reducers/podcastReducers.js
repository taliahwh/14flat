import {
  FEATURED_PODCASTS_REQUEST,
  FEATURED_PODCASTS_SUCCESS,
  FEATURED_PODCASTS_FAILURE,
  PODCAST_DETAILS_REQUEST,
  PODCAST_DETAILS_SUCCESS,
  PODCAST_DETAILS_FAILURE,
  PODCAST_EPISODE_DETAILS_REQUEST,
  PODCAST_EPISODE_DETAILS_SUCCESS,
  PODCAST_EPISODE_DETAILS_FAILURE,
  PODCAST_LATEST_EPISODES_REQUEST,
  PODCAST_LATEST_EPISODES_SUCCESS,
  PODCAST_LATEST_EPISODES_FAILURE,
} from '../constants/podcastConstants';

export const featuredPodcastReducer = (
  state = { featuredPodcasts: [] },
  action
) => {
  switch (action.type) {
    case FEATURED_PODCASTS_REQUEST:
      return { loading: true, ...state };
    case FEATURED_PODCASTS_SUCCESS:
      return {
        loading: false,
        featuredPodcasts: action.payload,
      };
    case FEATURED_PODCASTS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const podcastDetailsReducer = (
  state = { podcastDetails: {} },
  action
) => {
  switch (action.type) {
    case PODCAST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PODCAST_DETAILS_SUCCESS:
      return {
        loading: false,
        podcastDetails: action.payload,
      };
    case PODCAST_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const podcastEpisodeDetailsReducer = (
  state = { episodeDetails: {} },
  action
) => {
  switch (action.type) {
    case PODCAST_EPISODE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PODCAST_EPISODE_DETAILS_SUCCESS:
      return {
        loading: false,
        episodeDetails: action.payload,
      };
    case PODCAST_EPISODE_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const podcastLatestEpsiodeReducer = (
  state = { latestEpisodes: {} },
  action
) => {
  switch (action.type) {
    case PODCAST_LATEST_EPISODES_REQUEST:
      return { loading: true, ...state };
    case PODCAST_LATEST_EPISODES_SUCCESS:
      return {
        loading: false,
        latestEpisodes: action.payload,
      };
    case PODCAST_LATEST_EPISODES_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
