import express from 'express';

import {
  getArticles,
  getArticleById,
  createArticle,
  likeArticle,
} from '../controllers/articleController.js';

import { isAdmin, authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getArticles);

router.post('/', authMiddleware, createArticle);

router.get('/:id', getArticleById);

router.put('/:id/likearticle', authMiddleware, likeArticle);

export default router;
