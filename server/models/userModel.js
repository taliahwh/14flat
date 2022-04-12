import mongoose from 'mongoose';
import Article from './articleModel.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requred: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    // articles: {
    //   type: [Article],
    //   default: [],
    // },
    // savedArticles: {
    //   type: [Article],
    //   default: [],
    // },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
