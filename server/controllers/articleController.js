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

// @desc Fetch user's article by user id
// @route GET /api/articles/:id
// @access Public
const getUserArticles = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found.');
  }

  // dot notation for nested documents (mongoose)
  const articles = await Article.find({
    'writtenBy.writerId': String(user._id),
  });

  const userArticles = articles.reverse();

  if (articles) {
    res.status(200);
    res.json(userArticles);
  } else {
    res.status(404);
    throw new Error('User does not have any written articles.');
  }
});

// @desc Create new article
// @route POST /api/articles
// @access Public
const createArticle = asyncHandler(async (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    coverImage: req.body.coverImage,
    content: req.body.content,
    excerpt: req.body.excerpt,
    tags: req.body.tags,
    writtenBy: { name: req.user.name, writerId: req.user._id },
  });

  const createdArticle = await newArticle.save();

  const user = await User.findById(req.user._id);
  user.articles.push(createdArticle);
  await user.save();

  res.status(201).json(createdArticle);
});

// @desc Delete article
// @route DEL /api/articles
// @access Public
const deleteArticle = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const article = await Article.findByIdAndDelete(id);

  if (!article) {
    res.status(404);
    throw new Error('Article not found');
  }

  const user = await User.findById(req.user._id);

  const userArticleToDelete = user.articles.find(
    (article) => String(article._id) === String(id)
  );

  user.articles = user.articles.filter(
    (article) => article !== userArticleToDelete
  );

  await user.save();

  res.status(200).json('Article successfully deleted');
});

// @desc Like article by atricle id
// @route PUT /api/:id/likearticle
// @access Public
const likeArticle = asyncHandler(async (req, res) => {
  // console.log(req.user);
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

export {
  getArticles,
  getArticleById,
  createArticle,
  likeArticle,
  getUserArticles,
  deleteArticle,
};
