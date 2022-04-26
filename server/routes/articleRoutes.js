import express from 'express';

import {
  getArticles,
  getArticleById,
  createArticle,
  likeArticle,
  getUserArticles,
  deleteArticle,
} from '../controllers/articleController.js';

import { isAdmin, authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getArticles);

router.post('/', authMiddleware, createArticle);

router.get('/user/:id/articles', authMiddleware, getUserArticles);

router.get('/:id', getArticleById);

router.delete('/:id', authMiddleware, deleteArticle);

router.put('/:id/likearticle', authMiddleware, likeArticle);

export default router;
