import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnBoarding from './pages/onBoarding';
import TownRecommend from './pages/townRecommend';
import TownInfo from './pages/townInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/townRecommend" element={<TownRecommend />} />
        <Route path="/townInfo" element={<TownInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
