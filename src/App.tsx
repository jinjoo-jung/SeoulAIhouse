import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnBoarding from './pages/onBoarding';
import TownRecommend from './pages/townRecommend';
import TownInfo from './pages/townInfo';
import { Global } from '@emotion/react';
import reset from './styles/reset';
import OnBoardingB from './pages/onBoarding/OnBoardingB';
import OnBoardingD from './pages/onBoarding/OnBoardingD';
import OnBoardingC from './pages/onBoarding/OnBoardingC';

function App() {
  return (
    <>
      <Global styles={reset} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/onBoardingB" element={<OnBoardingB />} />
          <Route path="/onBoardingC" element={<OnBoardingC />} />
          <Route path="/onBoardingD" element={<OnBoardingD />} />

          <Route path="/townRecommend" element={<TownRecommend />} />
          <Route path="/townInfo" element={<TownInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
