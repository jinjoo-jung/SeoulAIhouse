import React, { useDebugValue, useEffect, useState } from 'react';
import RecommendHeader from '../../components/TownRecommend/RecommendHeader';
import TownInfoAI from '../../components/TownInfo/TownInfoAI';
import styled from '@emotion/styled';
import TownInfoHomeRecommend from '../../components/TownInfo/TownInfoHomeRecommend';
import TownInfoPhone from '../../components/TownInfo/TownInfoPhone';
import TownInfoMap from '../../components/TownInfo/TownInfoMap';
import { useLocation } from 'react-router-dom';

const TownInfo = () => {
  const location = useLocation();
  const town = location.state?.town;

  useEffect(() => {
    window.scrollTo(0, 0); // 컴포넌트가 마운트될 때 스크롤 위치를 맨 위로 설정
  }, []);

  return (
    <div>
      <TownInfoContentContainer>
        <RecommendHeader />
        <TownInfoContentWrap>
          <TownInfoAI townName={town.town} station={town.station} />
          <TownInfoHomeRecommend townName={town.town} />
          <TownInfoPhone townName={town.town} />
          <TownInfoMap x={town.x} y={town.y} />
        </TownInfoContentWrap>
      </TownInfoContentContainer>
    </div>
  );
};

export default TownInfo;

const TownInfoContentContainer = styled.div`
  overflow: auto;
  width: 100%;
  height: 100vh;
`;

const TownInfoContentWrap = styled.div`
  margin: 114px 220px 114px 220px;
`;
