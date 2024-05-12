import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import MiniLogo from '../../assets/seoul.svg';
import normalIcon from '../../assets/noraml.svg';
import smileIcon from '../../assets/smile.svg';
import sadIcon from '../../assets/sad.svg';
import miniNormal from '../../assets/miniNormal.svg';
import miniSmile from '../../assets/miniSmile.svg';
import miniSad from '../../assets/miniSad.svg';
import questionIcon from '../../assets/question.svg';
import arrow from '../../assets/mapArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { addressState } from '../../recoil/addressState';
import { MapMarkerLabelResponse } from '../../types/mapMarker';
import getMapMarker from '../../api/getMapMaker';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate(`/`);
  };
  const [markers, setMarkers] = useState<MapMarkerLabelResponse[]>([]);

  const address = useRecoilValue(addressState);

  useEffect(() => {
    const loadMapAndMarkers = async () => {
      if (!window.kakao || !window.kakao.maps) {
        alert('Kakao maps SDK not loaded');
        return;
      }

      window.kakao.maps.load(async () => {
        const destination = sessionStorage.getItem('destination');
        if (!destination) return;
        console.log(destination);

        // sessionStorage에서 값을 불러올 때 null 체크를 수행
        const storedX = sessionStorage.getItem('x');
        const storedY = sessionStorage.getItem('y');

        const mapCoords = {
          x: storedX ? parseFloat(storedX) : 0, // null이 아닐 때만 parseInt를 호출
          y: storedY ? parseFloat(storedY) : 0,
        };

        const mapMarkerRequest = {
          y: mapCoords.y,
          x: mapCoords.x,
          radius: 1000,
        };
        console.log('좌표: ', mapCoords.x, mapCoords.y);
        console.log(mapMarkerRequest);

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
          border-radius: 100px;">${markerData.avgRental}/${markerData.avgDeposit}</div>
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

  const handleChange = () => {
    navigate(`/onBoardingC`);
  };
  return (
    <div>
      <RecommendHeaderContainer>
        <img onClick={() => handleClickLogo()} src={MiniLogo} alt="mini-logo" />
        <HeaderWrap>
          <HeaderText>{address.address}</HeaderText>
        </HeaderWrap>
        <RecommendChange onClick={() => handleChange()}>
          변경하기
        </RecommendChange>
      </RecommendHeaderContainer>
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

export default Map;

const RecommendHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  img {
    cursor: pointer;
    margin-left: 60px;
    margin-right: 220px;
  }
`;

const HeaderWrap = styled.div`
  width: 700px;
  height: 67px;
  border-radius: 20px;
  border: 1px solid #060606;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

const RecommendChange = styled.button`
  position: absolute;
  width: 119px;
  height: 43px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #005cab;
  border-radius: 20px;
  margin-left: 980px;
  cursor: pointer;
`;

const MapContainer = styled.div`
  position: relative;
`;

const MapStyle = styled.div`
width: 100vw;
height: 100vh;
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
