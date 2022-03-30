import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';

const App = () => {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/blog" exact element={<BlogScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
