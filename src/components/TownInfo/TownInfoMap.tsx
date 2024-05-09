import React, { useEffect, useRef } from 'react';
import mapIcon from '../../assets/mapIcon.svg';
import styled from '@emotion/styled';
import mapRightIcon from '../../assets/mapRight.svg';
import normalIcon from '../../assets/noraml.svg';
import smileIcon from '../../assets/smile.svg';
import sadIcon from '../../assets/sad.svg';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    kakao: any;
  }
}

const TownInfoMap = () => {
  const navigate = useNavigate();
  const { kakao } = window;
  const mapContainer = useRef(null);

  useEffect(() => {
    const position = new kakao.maps.LatLng(37.54699, 127.09598);
    const mapOptions = {
      center: position, // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);

    const markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
    const marker = new kakao.maps.Marker({ position: markerPosition }); // 마커 생성

    // const mapTypeControl = new kakao.maps.MapTypeControl();
    // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //마커가 지도 위에 표시되는 설정
    marker.setMap(map);

    const content = `
  <div class="customoverlay">
  <div style="position:relative; display:flex; align-items:center;  " >
  <img style ="position:absolute; margin-left: -8px;" src="${normalIcon}" />  
  <div style =
  "width:90px;
  height:51px;
  display:flex; 
  align-items:center;
  justify-content: center;
  background-color: #F6F6F6;
  font-size: 20px;
  padding-left:48px;
  border: 1px solid rgba(129, 129, 129, 0.4); /* 818181을 40% 투명도로 적용 */
  border-radius: 100px;">80/500</div></div>
</div>
  `;

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map,
      position,
      content,
      yAnchor: 1,
    });
  });

  const handleClickMap = () => {
    navigate(`/map`);
  };

  return (
    <div>
      <HomeWrap>
        <img src={mapIcon} alt="mapIcon" />
        <div>지도</div>
        <img
          onClick={() => handleClickMap()}
          src={mapRightIcon}
          alt="mapRightIcon"
        />
      </HomeWrap>
      <div
        id="map"
        ref={mapContainer}
        style={{
          width: '1048px',
          height: '533px',
          display: 'block',
          zIndex: '1',
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
  img {
    cursor: pointer;
  }
`;
