import express from 'express';

import { authMiddleware, isAdmin } from '../middleware/authMiddleware.js';

import {
  signIn,
  signUp,
  getUserDetails,
  updateUserEmail,
  updateUserPassword,
  adminGetAnalytics,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/analytics', authMiddleware, isAdmin, adminGetAnalytics);

router.get('/:id', authMiddleware, getUserDetails);

router.post('/signin', signIn);

router.post('/signup', signUp);

router.put('/profile-email', authMiddleware, updateUserEmail);

router.put('/profile-password', authMiddleware, updateUserPassword);

export default router;
