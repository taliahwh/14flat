import express from 'express';

import { authMiddleware, isAdmin } from '../middleware/authMiddleware.js';

import {
  signIn,
  signUp,
  getUserDetails,
  updateUserEmail,
  updateUserPassword,
  adminGetAnalytics,
  sendWriterRequest,
  approveWriterRequest,
  declineWriterRequest,
  getNotifications,
  deleteNotification,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/analytics', authMiddleware, isAdmin, adminGetAnalytics);

router.get('/notifications', authMiddleware, getNotifications);

router.get('/:id', authMiddleware, getUserDetails);

router.post('/signin', signIn);

router.post('/signup', signUp);

router.post(
  '/approve-writer-request/:id',
  authMiddleware,
  isAdmin,
  approveWriterRequest
);

router.post(
  '/decline-writer-request/:id',
  authMiddleware,
  isAdmin,
  declineWriterRequest
);

router.post('/writer-request', authMiddleware, sendWriterRequest);

router.put('/profile-email', authMiddleware, updateUserEmail);

router.put('/profile-password', authMiddleware, updateUserPassword);

router.delete('/notifications/:id', authMiddleware, deleteNotification);

export default router;
