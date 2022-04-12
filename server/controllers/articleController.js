import asyncHandler from 'express-async-handler';

import Article from '../models/articleModel.js';

// @desc Fetch all articles
// @route GET /api/articles
// @access Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

export { getArticles };
