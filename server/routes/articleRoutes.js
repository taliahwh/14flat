import express from 'express';

import {
  getArticles,
  getCoverArticle,
  getFeaturedArticles,
  getArticleById,
  getSavedArticles,
  createArticle,
  likeArticle,
  saveArticle,
  deleteSavedArticle,
  getUserArticles,
  deleteArticle,
} from '../controllers/articleController.js';

import { isAdmin, authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getArticles);

router.get('/cover-article', getCoverArticle);

router.get('/featured-articles', getFeaturedArticles);

router.post('/', authMiddleware, createArticle);

router.get('/user/:id/articles', authMiddleware, getUserArticles);

router.get('/user/:id/saved-articles', authMiddleware, getSavedArticles);

router.get('/:id', getArticleById);

router.delete('/:id', authMiddleware, deleteArticle);

router.put('/:id/likearticle', authMiddleware, likeArticle);

router.put('/:id/delete-saved-article', authMiddleware, deleteSavedArticle);

router.put('/:id/savearticle', authMiddleware, saveArticle);

export default router;
