import express from 'express';

import {
  getAllArticles,
  getLatestArticles,
  getCoverArticle,
  getFeaturedArticles,
  getArticleById,
  getSavedArticles,
  createArticle,
  updateArticle,
  likeArticle,
  saveArticle,
  deleteSavedArticle,
  getUserArticles,
  deleteArticle,
} from '../controllers/articleController.js';

import { isAdmin, authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllArticles);

router.get('/cover-article', getCoverArticle);

router.get('/featured-articles', getFeaturedArticles);

router.get('/latest-articles', getLatestArticles);

router.post('/', authMiddleware, createArticle);

router.get('/user/:id/articles', authMiddleware, getUserArticles);

router.get('/user/:id/saved-articles', authMiddleware, getSavedArticles);

router.get('/:id', getArticleById);

router.delete('/:id', authMiddleware, deleteArticle);

router.put('/update-article/:id', authMiddleware, updateArticle);

router.put('/:id/likearticle', authMiddleware, likeArticle);

router.put('/:id/delete-saved-article', authMiddleware, deleteSavedArticle);

router.put('/:id/savearticle', authMiddleware, saveArticle);

export default router;
