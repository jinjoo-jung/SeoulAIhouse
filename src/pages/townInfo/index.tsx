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

  return (
    <div>
      <TownInfoContentContainer>
        <RecommendHeader />
        <TownInfoContentWrap>
          <TownInfoAI townName={town.town} />
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
  height: 100%;
`;

const TownInfoContentWrap = styled.div`
  margin: 114px 220px 114px 220px;
`;
