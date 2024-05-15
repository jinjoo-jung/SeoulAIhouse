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
import OnBoardingE from './pages/onBoarding/OnBoardingE';
import Map from './pages/map';
import { RecoilRoot } from 'recoil';
import Loading from './components/shared/Loading';
import ScrollToTop from './utils/ScrollToTop';
import ReportLoading from './components/shared/ReportLoading';

function App() {
  return (
    <>
      <RecoilRoot>
        <Global styles={reset} />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<OnBoarding />} />
            <Route path="/onBoardingB" element={<OnBoardingB />} />
            <Route path="/onBoardingC" element={<OnBoardingC />} />
            <Route path="/onBoardingD" element={<OnBoardingD />} />
            <Route path="/onBoardingE" element={<OnBoardingE />} />
            <Route path="/townRecommend" element={<TownRecommend />} />
            <Route path="map" element={<Map />} />
            <Route path="/townInfo" element={<TownInfo />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/reportLoading" element={<ReportLoading />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
