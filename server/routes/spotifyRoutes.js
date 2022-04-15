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

router.get('/all-episodes/:id', getPodcastEpisodesById);

router.get('/episode-details/:id', getEpisodeDetailsById);

router.get('/artist/:id', getArtistById);

export default router;
