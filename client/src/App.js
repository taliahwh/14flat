import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import PodcastScreen from './screens/PodcastScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import PodcastDetailsScreen from './screens/PodcastDetailsScreen';
import PodcastShowScreen from './screens/PodcastShowScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SavedArticlesScreen from './screens/SavedArticlesScreen';

const App = () => {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/signin" exact element={<SignInScreen />} />
          <Route path="/signup" exact element={<SignUpScreen />} />
          <Route path="/blog" exact element={<BlogScreen />} />
          <Route path="/blog/:id" exact element={<ArticleDetailsScreen />} />
          <Route path="/podcasts" exact element={<PodcastScreen />} />
          <Route
            path="/podcasts/:id"
            exact
            element={<PodcastDetailsScreen />}
          />
          <Route
            path="/podcasts/show/:id"
            exact
            element={<PodcastShowScreen />}
          />
          <Route
            path="/saved-articles"
            exact
            element={<SavedArticlesScreen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
