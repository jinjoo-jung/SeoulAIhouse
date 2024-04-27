import React from 'react';
import RecommendHeader from '../../components/TownRecommend/RecommendHeader';
import RecommendList from '../../components/TownRecommend/RecommendList';
import styled from '@emotion/styled';

const TownRecommend = () => {
  return (
    <TownRecommendContainer>
      <RecommendHeader />
      <RecommendList />
    </TownRecommendContainer>
  );
};

export default TownRecommend;

const TownRecommendContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgb(210, 223, 237) 0%,
    rgb(210, 223, 237) 200px,
    transparent 586px,
    transparent 100%
  );
`;
