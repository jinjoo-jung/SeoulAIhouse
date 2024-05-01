import React, { useEffect, useRef } from 'react';
import mapIcon from '../../assets/mapIcon.svg';
import styled from '@emotion/styled';
import mapRightIcon from '../../assets/mapRight.svg';

declare global {
  interface Window {
    kakao: any;
  }
}

const TownInfoMap = () => {
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(33.450701, 126.570667);
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
  });

  return (
    <div>
      <HomeWrap>
        <img src={mapIcon} alt="mapIcon" />
        <div>지도</div>
        <img src={mapRightIcon} alt="mapRightIcon" />
      </HomeWrap>
      <div
        id="map"
        ref={mapContainer}
        style={{
          width: '1048px',
          height: '533px',
          display: 'block',
          zIndex: '-1',
        }}></div>
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

  align-items: center;
  margin-bottom: 20px;
  margin-top: 100px;

  div {
    font-size: 32px;
    font-weight: bold;
    margin-left: 16px;
    margin-right: 12px;
  }
`;
