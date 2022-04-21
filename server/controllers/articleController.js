import asyncHandler from 'express-async-handler';

import Article from '../models/articleModel.js';
import User from '../models/userModel.js';

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

// @desc Create new article
// @route POST /api/articles
// @access Public
const createArticle = asyncHandler(async (req, res) => {
  // console.log(req);
  const newArticle = new Article({
    title: req.body.title,
    coverImage: req.body.coverImage,
    content: req.body.content,
    excerpt: req.body.excerpt,
    writtenBy: { name: req.user.name, writerId: req.user._id },
  });

  const createdArticle = await newArticle.save();

  res.status(201).json(createdArticle);
});

export { getArticles, getArticleById, createArticle };
