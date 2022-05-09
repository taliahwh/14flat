import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';

import Article from '../models/articleModel.js';
import User from '../models/userModel.js';

// @desc Fetch all articles
// @route GET /api/articles
// @access Public
const getAllArticles = asyncHandler(async (req, res) => {
  const pageSize = 5;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Article.count();
  const articles = await Article.find()
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  // const allArticles = articles.reverse();

  res.json({ articles, page, pages: Math.ceil(count / pageSize) });
});

// @desc Fetch latest articles
// @route GET /api/articles
// @access Public
const getLatestArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  const latestArticles = articles.reverse().slice(3);

  res.json(latestArticles);
});

// @desc Fetch cover article (most recent article)
// @route GET /api/cover-article
// @access Public
const getCoverArticle = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  const articleList = articles.reverse();
  const coverArticle = articleList[0];

  res.json(coverArticle);
});

// @desc Fetch featured articles (second and third most recent articles)
// @route GET /api/featured-articles
// @access Public
const getFeaturedArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  const featuredArticles = articles.reverse().slice(1, 3);

  res.json(featuredArticles);
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

// @desc Fetch user's saved article by user id
// @route GET /api/articles/:id
// @access Public
const getSavedArticles = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found. Please sign in to view saved articles.');
  }

  const savedArticles = user.savedArticles.reverse();

  if (savedArticles.length > 0) {
    res.status(200);
    res.json(savedArticles);
  } else {
    res.status(204);
    throw new Error('No saved articles found.');
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

// @desc Update article
// @route PUT /api/articles/update-article/:id
// @access Public
const updateArticle = asyncHandler(async (req, res) => {
  const { title, coverImage, content, excerpt, tags } = req.body;
  const { id: paramsId } = req.params;
  const { id: reqId } = req.user;

  const article = await Article.findById(paramsId);

  if (!article) {
    res.status(404);
    throw new Error('No article found');
  }

  const articleId = String(article.writtenBy.writerId);

  if (articleId !== String(reqId)) {
    res.status(401);
    throw new Error('Not authorized to edit this article');
  }

  const user = await User.findById(reqId);
  // Delete exisiting article from user
  user.articles = user.articles.filter(
    (article) => String(article._id) !== String(paramsId)
  );

  // Update article
  article.title = title || article.title;
  article.coverImage = coverImage || article.coverImage;
  article.content = content || article.content;
  article.excerpt = excerpt || article.excerpt;
  article.tags = tags || article.tags;

  const updatedArticle = await article.save();

  // Push new (updated) article into user's articles
  user.articles.push(updatedArticle);
  const updatedUser = await user.save();

  res.status(201).json(updatedArticle);
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

// @desc Like article by article id
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

  // Updating likes in user model
  const writerOfArticle = await User.find({ 'articles._id': String(id) });
  const userArticleToUpdate = writerOfArticle[0].articles.find(
    (article) => String(article._id) === String(id)
  );

  userArticleToUpdate.likes = updatedArticle.likes;
  await writerOfArticle[0].save();

  res.json(updatedArticle);
});

// @desc Save article (bookmark) by article id
// @route PUT /api/:id/save-article
// @access Public
const saveArticle = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('Must be logged in to save article');
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No article with that id');

  const article = await Article.findById(id);

  const existingSavedArticles = user.savedArticles.map((article) =>
    String(article._id)
  );
  const articleExists = existingSavedArticles.includes(String(article._id));

  if (!articleExists) {
    user.savedArticles.push(article);
  }

  const updatedUser = await User.findByIdAndUpdate(req.user._id, user, {
    new: true,
  });
  res.status(200);
  res.json(updatedUser);
});

// @desc Delete saved article (bookmark) by article id
// @route PUT /api/:id/delete-saved-article
// @access Public
const deleteSavedArticle = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('Must be logged in to save article');
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No article with that id');

  const article = await Article.findById(id);

  const existingSavedArticles = user.savedArticles.map((article) =>
    String(article._id)
  );

  const articleExists = existingSavedArticles.includes(String(article._id));

  if (articleExists) {
    user.savedArticles = user.savedArticles.filter(
      (article) => String(article._id) !== String(id)
    );
  }

  const updatedUser = await User.findByIdAndUpdate(req.user._id, user, {
    new: true,
  });

  res.status(200);
  res.json(updatedUser);
});

export {
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
};
