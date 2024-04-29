import React from 'react';
import mapIcon from '../../assets/mapIcon.svg';
import styled from '@emotion/styled';

const TownInfoMap = () => {
  return (
    <div>
      <HomeWrap>
        <img src={mapIcon} alt="mapIcon" />
        <div>지도</div>
      </HomeWrap>
    </div>
  );
};

export default TownInfoMap;

const HomeWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0; // 상단에서 고정
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 100px;

  div {
    font-size: 32px;
    font-weight: bold;
    margin-left: 16px;
  }
`;
