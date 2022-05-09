import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import PodcastScreen from './screens/PodcastScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import PodcastEpisodeScreen from './screens/PodcastEpisodeScreen';
import PodcastShowScreen from './screens/PodcastShowScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SavedArticlesScreen from './screens/SavedArticlesScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import CreateArticleScreen from './screens/CreateArticleScreen';
import EditArticleScreen from './screens/EditArticleScreen';

const App = () => {
  return (
    <div className="bg-background h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/signin" exact element={<SignInScreen />} />
          <Route path="/signup" exact element={<SignUpScreen />} />
          <Route path="/profile" exact element={<UserProfileScreen />} />
          <Route path="/new-article" exact element={<CreateArticleScreen />} />
          <Route
            path="/edit-article/:id"
            exact
            element={<EditArticleScreen />}
          />
          <Route path="/view-articles" exact element={<UserProfileScreen />} />
          <Route path="/admin" exact element={<UserProfileScreen />} />
          <Route path="/blog" exact element={<BlogScreen />} />
          <Route path="/blog/page/:pageNumber" exact element={<BlogScreen />} />
          <Route path="/blog/:id" exact element={<ArticleDetailsScreen />} />
          <Route path="/podcasts" exact element={<PodcastScreen />} />
          <Route
            path="/podcasts/episode/:id"
            exact
            element={<PodcastEpisodeScreen />}
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
