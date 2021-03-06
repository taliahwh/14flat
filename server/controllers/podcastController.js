import asyncHandler from 'express-async-handler';
import axios from 'axios';

import getSpotifyAuth from '../config/spotify_config.js';

const SPOTIFY_URL = 'https://api.spotify.com/v1';

// @desc Fetch set of featured podcasts by a string of ids
// @route GET /podcasts/featured-shows/:ids
// @access Public
const getFeaturedPodcasts = asyncHandler(async (req, res) => {
  const podcastIds =
    '5vMLIaAcXeWUpXRpUt5qXY,7hVMyKCBLJ6uqIKcvKuz88,1noIp4uOsm2HSyswDhZzwP,6xbt4cCcUqtMT5sPdbWkrb,3Cdge5G5apw1LsC8jGcl4j,2XdegS23ImVZldex799DUS,2A3Dcr8Rke0pzQr9tZ8xkY,2mZHt3zBxyIuc0PYLdDDkr,4uEA3lPBibUlrPOciIMCRY,17GacVP62XZmK5FuOLUpd1,2xyBo5E26Ixjysv75wqkkJ,0dWR9TTSsic8J5LJ3mlj8W';
  //request token using getSpotifyAuth() function
  const access_token = await getSpotifyAuth();

  try {
    // const ids = qs.stringify({ ids: podcastIds });
    const { data } = await axios.get(
      `${SPOTIFY_URL}/shows?ids=${podcastIds}&market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          // Authorization: `Bearer BQBekxF0swfWqnglEV3i-X75tzYpmSuHM34CTlmY3jeZhs2d2U5eQtZGu7ud9qwsAZ3LKo6csrbHKxNp5vU`,
        },
      }
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// @desc Fetch podcast from Spotify API by id
// @route GET /podcasts/show/:id
// @access Public
// @access Public
const getPodcastById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  //request token using getSpotifyAuth() function
  const access_token = await getSpotifyAuth();

  try {
    const { data } = await axios.get(`${SPOTIFY_URL}/shows/${id}?market=US`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// @desc Fetch list of podcast's episodes from Spotify API by Podcast id
// @route GET /podcasts/all-episodes/:id
// @access Public
const getPodcastEpisodesById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  //request token using getSpotifyAuth() function
  const access_token = await getSpotifyAuth();

  try {
    const { data } = await axios.get(
      `${SPOTIFY_URL}/shows/${id}/episodes?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// @desc Fetch podcast episode details by Id from Spotify API by episode id
// @route GET /podcasts/episode-details/:id
// @access Public
const getEpisodeDetailsById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  //request token using getSpotifyAuth() function
  const access_token = await getSpotifyAuth();

  try {
    const { data } = await axios.get(
      `${SPOTIFY_URL}/episodes/${id}?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// @desc Fetch latest podcast episode
// @route GET /podcasts/latest-episodes
// @access Public
const getLatestEpisodes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  //request token using getSpotifyAuth() function
  const access_token = await getSpotifyAuth();

  const podcastIds = [
    '5vMLIaAcXeWUpXRpUt5qXY',
    '7hVMyKCBLJ6uqIKcvKuz88',
    '6xbt4cCcUqtMT5sPdbWkrb',
    '3Cdge5G5apw1LsC8jGcl4j',
    '2XdegS23ImVZldex799DUS',
  ];

  try {
    const show1 = await axios.get(
      `${SPOTIFY_URL}/shows/${podcastIds[0]}/episodes?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const episode1 = show1.data.items[0];

    // -------------------------------------------------------------

    const show2 = await axios.get(
      `${SPOTIFY_URL}/shows/${podcastIds[1]}/episodes?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const episode2 = show2.data.items[0];

    // -------------------------------------------------------------

    const show3 = await axios.get(
      `${SPOTIFY_URL}/shows/${podcastIds[2]}/episodes?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const episode3 = show3.data.items[0];

    // -------------------------------------------------------------

    const show4 = await axios.get(
      `${SPOTIFY_URL}/shows/${podcastIds[3]}/episodes?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const episode4 = show4.data.items[0];

    // -------------------------------------------------------------

    const show5 = await axios.get(
      `${SPOTIFY_URL}/shows/${podcastIds[4]}/episodes?market=US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const episode5 = show5.data.items[0];

    return res.json({
      episodes: [episode1, episode2, episode3, episode4, episode5],
    });
  } catch (error) {
    console.log(error);
  }
});

export {
  getPodcastById,
  getFeaturedPodcasts,
  getPodcastEpisodesById,
  getEpisodeDetailsById,
  getLatestEpisodes,
};
