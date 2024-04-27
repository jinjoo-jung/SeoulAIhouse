import React from 'react';
import RecommendHeader from '../../components/TownRecommend/RecommendHeader';
import RecommendList from '../../components/TownRecommend/RecommendList';
import styled from '@emotion/styled';

const TownRecommend = () => {
  return (
    <div>
      <Background />
      <TownRecommendContainer>
        <RecommendHeader />
        <RecommendList />
      </TownRecommendContainer>
    </div>
  );
};

export default TownRecommend;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgb(210, 223, 237) 0%,
    rgb(210, 223, 237) 300px,
    transparent 586px,
    transparent 100%
  );
  z-index: -1;
`;

const TownRecommendContainer = styled.div`
  position: relative;
  z-index: 1;
  overflow: auto;
  height: 100%;
`;
