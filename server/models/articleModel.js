import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
