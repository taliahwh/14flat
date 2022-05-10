import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import colors from 'colors';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// import getSpotifyAuth from './config/spotify_config.js';

import userRoutes from './routes/userRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import podcastRoutes from './routes/podcastRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

connectDB();

const app = express();

// Allows access JSON data in the body
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/podcasts', podcastRoutes);
app.use('/api/upload', uploadRoutes);

// Making uploads folder static
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
