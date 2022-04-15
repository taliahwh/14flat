import axios from 'axios';

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
} from '../constants/podcastConstants';

export const listFeaturedPodcasts = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURED_PODCASTS_REQUEST });

    const { data } = await axios.get('/api/podcasts/featured-shows');

    dispatch({ type: FEATURED_PODCASTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEATURED_PODCASTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPodcastDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PODCAST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/podcasts/all-episodes/${id}`);

    dispatch({ type: PODCAST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PODCAST_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listEpisodeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PODCAST_EPISODE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/podcasts/episode-details/${id}`);

    dispatch({ type: PODCAST_EPISODE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PODCAST_EPISODE_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
