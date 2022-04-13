import mongoose from 'mongoose';

export const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    writtenBy: {
      name: {
        type: String,
        required: true,
      },
      writerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
