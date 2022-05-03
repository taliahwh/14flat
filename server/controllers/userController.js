import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

import generateToken from '../utils/generateToken.js';

import User from '../models/userModel.js';
import Notification from '../models/notificationModel.js';
import Article from '../models/articleModel.js';

// @desc Authenticate user & get token
// @route POST /api/users/signin
// @access Public
const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const correctPassword = await bcrypt.compare(password, user.password);

  if (!correctPassword) {
    res.status(400);
    throw new Error('Invalid password');
  }

  // If user exists && req.password === user's password
  if (user && correctPassword) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      savedArticles: user.savedArticles,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Create new user
// @route POST /api/users/signup
// @access Public
const signUp = asyncHandler(async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;

  // Find user by email
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error('User already exists');
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error('Passwords do not match. Please try again.');
  }

  // Password strength requirement (uppercase, lowercase, number and special char)
  if (password.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters.');
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonalphas = /\W/.test(password);
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
    res.status(400);
    throw new Error(
      'Password must be at least 8 characters, contain an upper and lowercase letter, a number, and special character.'
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin: false,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Something went wrong.');
  }
});

// @desc Get user details by id
// @route GET /api/users/:id
// @access Private
const getUserDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).select('-password');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json(user);
});

// @desc Update user email
// @route PUT /api/users/profile-email
// @access Private
const updateUserEmail = asyncHandler(async (req, res) => {
  const { newEmail, confirmNewEmail } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const allUsers = await User.find({});
  const userEmails = allUsers.map((user) => user.email);
  const emailExists = userEmails.includes(newEmail);

  if (emailExists) {
    res.status(400);
    throw new Error('Email already exists, please choose a different email.');
  }

  if (newEmail !== confirmNewEmail) {
    res.status(400);
    throw new Error('Emails do not match. Please re-enter.');
  }

  user.email = newEmail || user.email;

  // if (req.body.password) {
  //   user.password = await bcrypt.hash(req.body.password, 12);
  // }

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    token: generateToken(updatedUser._id),
  });
});

// @desc Update user password
// @route PUT /api/users/profile-password
// @access Private
const updateUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const correctPassword = await bcrypt.compare(oldPassword, user.password);

  if (!correctPassword) {
    res.status(400);
    throw new Error(
      'Old password incorrect, please enter correct passsword to update'
    );
  }

  if (oldPassword === newPassword) {
    res.status(400);
    throw new Error(
      'New and old password must be different in order to update.'
    );
  }

  if (newPassword !== confirmNewPassword) {
    res.status(400);
    throw new Error('Passwords do not match. Please try again.');
  }

  // Password strength requirement (uppercase, lowercase, number and special char)
  if (newPassword.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters.');
  }

  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasNumbers = /\d/.test(newPassword);
  const hasNonalphas = /\W/.test(newPassword);
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
    res.status(400);
    throw new Error(
      'Password must be at least 8 characters, contain an upper and lowercase letter, a number, and special character.'
    );
  }

  const newHashedPassword = await bcrypt.hash(newPassword, 12);

  user.password = newHashedPassword;

  await user.save();

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

// @desc Get analytics (total users and posts)
// @route GET /api/users/analytics
// @access Private (Admin only)
const adminGetAnalytics = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (!users) {
    res.status(404);
    throw new Error('No users found');
  }
  const totalUsers = users.length;

  const articles = await Article.find({});

  if (!articles) {
    res.status(404);
    throw new Error('No articles found');
  }
  const totalArticles = articles.length;

  res.status(200).json({
    totalUsers,
    totalArticles,
  });
});

// @desc Send request to be a writer
// @route POST /api/users/writer-request
// @access Public
const sendWriterRequest = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.user;

  const notificationExists = await Notification.find({ requestUserId: id });

  if (!notificationExists) {
    const newNotification = await Notification.create({
      requestUserId: id,
      typeOfNotification: 'Writer Request',
      name,
      description,
    });

    res.status(201).json(newNotification);
  } else {
    res.status(403);
    throw new Error(
      'Request already submitted, please wait for admin response'
    );
  }
});

export {
  signIn,
  signUp,
  getUserDetails,
  updateUserEmail,
  updateUserPassword,
  adminGetAnalytics,
  sendWriterRequest,
};
