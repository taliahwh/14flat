import express from 'express';

import {
  getPodcastById,
  getFeaturedPodcasts,
  getPodcastEpisodesById,
  getEpisodeDetailsById,
  getLatestEpisodes,
} from '../controllers/podcastController.js';

const router = express.Router();

router.get('/show/:id', getPodcastById);

router.get('/featured-shows', getFeaturedPodcasts);

router.get('/latest-episodes', getLatestEpisodes);

router.get('/all-episodes/:id', getPodcastEpisodesById);

router.get('/episode-details/:id', getEpisodeDetailsById);

export default router;
