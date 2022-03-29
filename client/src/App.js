import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>{/* <Route path="/" exact element={<HomeScreen />} /> */}</Routes>
    </BrowserRouter>
  );
};

export default App;
