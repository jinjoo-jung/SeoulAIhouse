import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import MiniLogo from '../../assets/seoul.svg';
import normalIcon from '../../assets/noraml.svg';
import smileIcon from '../../assets/smile.svg';
import sadIcon from '../../assets/sad.svg';
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
        const stationName = sessionStorage.getItem('station');
        if (!stationName) return;

        const mapMarkerRequest = {
          y: 37.5622375470803,
          x: 126.94783366705356,
          radius: 1000,
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

        try {
          const mapMarkerResponse = await getMapMarker(
            stationName,
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
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: new kakao.maps.MarkerImage(
        getIcon(markerData.mark),
        new kakao.maps.Size(24, 35),
      ),
    });

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

  const handleClickMap = () => {
    navigate(`/map`);
  };
  return (
    <div>
      <RecommendHeaderContainer>
        <img onClick={() => handleClickLogo()} src={MiniLogo} alt="mini-logo" />
        <HeaderWrap>
          <HeaderText>{address.address}</HeaderText>
        </HeaderWrap>
        <RecommendChange>변경하기</RecommendChange>
      </RecommendHeaderContainer>
      <div
        id="map"
        ref={mapContainer}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
          zIndex: '1',
        }}></div>
    </div>
  );
};

export default Map;

// const HomeWrap = styled.div`
//   position: sticky;
//   top: 0;
//   left: 0; // 상단에서 고정
//   display: flex;
//   align-items: center;

//   align-items: center;
//   margin-bottom: 20px;
//   margin-top: 100px;

//   div {
//     font-size: 32px;
//     font-weight: bold;
//     margin-left: 16px;
//     margin-right: 12px;
//   }
//   img {
//     cursor: pointer;
//   }
// `;

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
