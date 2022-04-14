import express from 'express';

import {
  getPodcastById,
  getFeaturedPodcasts,
  getPodcastEpisodesById,
  getEpisodeDetailsById,
} from '../controllers/spotifyController.js';

const router = express.Router();

router.get('/show/:id', getPodcastById);
router.get('/featured-shows', getFeaturedPodcasts);
router.get('/episodes/:id', getEpisodeDetailsById);
router.get('/:id/all-episodes', getPodcastEpisodesById);

export default router;
