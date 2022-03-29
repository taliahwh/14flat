import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
