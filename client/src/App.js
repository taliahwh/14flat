import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
