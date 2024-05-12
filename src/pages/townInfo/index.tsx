import React, { useDebugValue, useEffect, useState } from 'react';
import RecommendHeader from '../../components/TownRecommend/RecommendHeader';
import TownInfoAI from '../../components/TownInfo/TownInfoAI';
import styled from '@emotion/styled';
import TownInfoHomeRecommend from '../../components/TownInfo/TownInfoHomeRecommend';
import TownInfoPhone from '../../components/TownInfo/TownInfoPhone';
import TownInfoMap from '../../components/TownInfo/TownInfoMap';
import { useLocation } from 'react-router-dom';

const TownInfo = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const town = location.state?.town;

  useEffect(() => {
    if (town) {
      const x = town.x;
      const y = town.y;

      sessionStorage.setItem('x', x.toString());
      sessionStorage.setItem('y', y.toString());

      // sessionStorage에서 값을 불러올 때 null 체크를 수행
      const storedX = sessionStorage.getItem('x');
      const storedY = sessionStorage.getItem('y');

      setCoords({
        x: storedX ? parseInt(storedX, 10) : 0, // null이 아닐 때만 parseInt를 호출
        y: storedY ? parseInt(storedY, 10) : 0,
      });
    }
  }, [town]);

  return (
    <div>
      <TownInfoContentContainer>
        <RecommendHeader />
        <TownInfoContentWrap>
          <TownInfoAI townName={town.town} />
          <TownInfoHomeRecommend townName={town.town} />
          <TownInfoPhone townName={town.town} />
          <TownInfoMap x={coords.x} y={coords.y} />
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
