import asyncHandler from 'express-async-handler';

import Article from '../models/articleModel.js';

// @desc Fetch all articles
// @route GET /api/articles
// @access Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

// @desc Fetch article by id
// @route GET /api/articles/:id
// @access Public
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error('Article not found.');
  }
});

export { getArticles, getArticleById };
