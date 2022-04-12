import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import articles from './data/articles.js';
import User from './models/userModel.js';
import Article from './models/articleModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

// async function because when dealing with mongoose, a promise is returned
const importData = async () => {
  try {
    await Article.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleArticles = articles.map((article) => {
      return { ...article, writtenBy: adminUser };
    });

    await Article.insertMany(sampleArticles);

    console.log('Data Imported!'.green.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Article.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
