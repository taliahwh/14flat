import mongoose from 'mongoose';

export const notificationSchema = new mongoose.Schema({
  requestUserId: {
    type: String,
    required: true,
  },
  typeOfNotification: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requestTo: {
    type: String,
    required: false,
  },
  adminOnly: {
    type: Boolean,
    required: true,
  },
  admin: {
    type: String,
    required: false,
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
