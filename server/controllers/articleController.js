import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';

import Article from '../models/articleModel.js';
import User from '../models/userModel.js';

// @desc Fetch all articles
// @route GET /api/articles
// @access Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  const latestArticles = articles.reverse();
  // console.log(latestArticles);

  res.json(latestArticles);
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
    tags: req.body.tags,
    writtenBy: { name: req.user.name, writerId: req.user._id },
  });

  const createdArticle = await newArticle.save();

  res.status(201).json(createdArticle);
});

// @desc Fetch article by id
// @route PATCH /api/:id/likearticle
// @access Public
const likeArticle = asyncHandler(async (req, res) => {
  console.log(req.user);
  const { id } = req.params;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('Must be logged in to like article');
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No article with that id');

  const article = await Article.findById(id);

  /* checks the index to see if the userId already appears in the post's likes */
  const index = article.likes.findIndex((id) => id === String(req.user._id));

  if (index === -1) {
    // like the article
    article.likes.push(req.user._id);
  } else {
    // dislike the article
    // returns an array of likes without the current user's like (removes)
    article.likes = article.likes.filter((id) => id !== String(req.user._id));
  }

  const updatedArticle = await Article.findByIdAndUpdate(id, article, {
    new: true,
  });

  res.json(updatedArticle);
});

export { getArticles, getArticleById, createArticle, likeArticle };
