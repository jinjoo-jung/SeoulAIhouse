import React, { useEffect, useRef, useState } from 'react';
import mapIcon from '../../assets/mapIcon.svg';
import styled from '@emotion/styled';
import mapRightIcon from '../../assets/mapRight.svg';
import normalIcon from '../../assets/noraml.svg';
import smileIcon from '../../assets/smile.svg';
import sadIcon from '../../assets/sad.svg';
import miniNormal from '../../assets/miniNormal.svg';
import miniSmile from '../../assets/miniSmile.svg';
import miniSad from '../../assets/miniSad.svg';
import questionIcon from '../../assets/question.svg';
import arrow from '../../assets/mapArrow.svg';

import { useNavigate } from 'react-router-dom';
import getMapMarker from '../../api/getMapMaker';
import { MapMarkerLabelResponse } from '../../types/mapMarker';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  x: number;
  y: number;
}

const TownInfoMap = ({ x, y }: MapProps) => {
  const navigate = useNavigate();
  const { kakao } = window;
  const mapContainer = useRef(null);
  const [markers, setMarkers] = useState<MapMarkerLabelResponse[]>([]);
  // const [coords, setCoords] = useState({ x: '', y: '' });

  useEffect(() => {
    const loadMapAndMarkers = async () => {
      if (!window.kakao || !window.kakao.maps) {
        alert('Kakao maps SDK not loaded');
        return;
      }

      sessionStorage.setItem('x', x.toString());
      sessionStorage.setItem('y', y.toString());

      window.kakao.maps.load(async () => {
        const destination = sessionStorage.getItem('destination');
        if (!destination) return;

        const mapMarkerRequest = {
          y: y,
          x: x,
          radius: 50000,
        };

        const position = new window.kakao.maps.LatLng(
          mapMarkerRequest.y,
          mapMarkerRequest.x,
        );
        const mapOptions = {
          center: position,
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer.current, mapOptions);

        // 줌 컨트롤 추가
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        try {
          const mapMarkerResponse = await getMapMarker(
            destination,
            mapMarkerRequest,
          );
          if (mapMarkerResponse && mapMarkerResponse.isSuccess) {
            setMarkers(mapMarkerResponse.result.labels);
            mapMarkerResponse.result.labels.forEach((markerData) => {
              addMarker(markerData, map);
            });
          }
        } catch (error) {
          console.error('Failed to load markers:', error);
        }
      });
    };

    loadMapAndMarkers();
  }, []); // 의존성 배열을 비워 컴포넌트 마운트 시 1회만 실행

  const addMarker = (markerData: MapMarkerLabelResponse, map: any) => {
    const markerPosition = new kakao.maps.LatLng(
      markerData.latitude,
      markerData.longitude,
    );

    // 오버레이에 들어갈 내용
    const content = `<div class="customoverlay">
   <div style="position:relative; display:flex; align-items:center;">
     <img style="position:absolute; margin-left: -8px;" src="${getIcon(markerData.mark)}" />
     <div style="width:90px; height:51px; 
     display:flex;
      align-items:center;
       justify-content: center;
        background-color: #F6F6F6; 
        font-size: 20px; 
        padding-left:48px;
         border: 1px solid rgba(129, 129, 129, 0.4);
          border-radius: 100px;">${markerData.avgDeposit}/${markerData.avgRental}</div>
   </div>
 </div>`;

    const overlay = new kakao.maps.CustomOverlay({
      map,
      position: markerPosition,
      content: content,
      yAnchor: 1,
    });

    overlay.setMap(map);
  };

  const getIcon = (mark: string) => {
    switch (mark) {
      case 'GOOD':
        return smileIcon;
      case 'SOSO':
        return normalIcon;
      case 'BAD':
        return sadIcon;
      default:
        return normalIcon;
    }
  };

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
      <MapContainer>
        <MapStyle id="map" ref={mapContainer}></MapStyle>
        <QuestionIcon src={questionIcon} alt="questionIcon" />
        <ArrowIcon src={arrow} alt="arrow" />
        <MapContentContainer>
          <ContentText>예상 이동 시간에 따른 등급 분류</ContentText>
          <MapIconContainer>
            <MapIconWrap>
              <img src={miniSmile} alt="miniSmile" />
              <div> = 좋음 </div>
            </MapIconWrap>
            <MapIconWrap>
              <img src={miniNormal} alt="miniNormal" />
              <div> = 보통 </div>
            </MapIconWrap>
            <MapIconWrap>
              <img src={miniSad} alt="miniSad" />
              <div> = 나쁨 </div>
            </MapIconWrap>
          </MapIconContainer>
          <SubText>*옆에 써 있는 숫자는 보증금 / 평균 월세입니다. </SubText>
        </MapContentContainer>
      </MapContainer>
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

const MapContainer = styled.div`
  position: relative;
`;

const MapStyle = styled.div`
height: 533px;
display: block
zIndex: 1;
`;

const QuestionIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  margin-bottom: 10px;
  margin-right: 16px;
`;

const ArrowIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  margin-bottom: 80px;
  margin-right: 80px;
`;

const MapContentContainer = styled.div`
  width: 342px;
  height: 141px;
  border-radius: 20px;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  gap: 16px;
  padding-left: 20px;
  right: 0;
  bottom: 0;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  margin-right: 100px;
`;

const ContentText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const SubText = styled.div`
  font-size: 16px;
  color: #8c8c8c;
`;

const MapIconContainer = styled.div`
  display: flex;
  gap: 28px;
`;

const MapIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
