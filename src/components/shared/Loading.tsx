import React from 'react';
import styled from '@emotion/styled';
import polygon from '../../assets/Polygon2.png';
import miniLogo from '../../assets/seoul.svg';

const Loading = () => {
  return (
    <OnBoardingAContainer>
      <LogoImg src={miniLogo} alt="miniLogo" />
      <MainText>
        우리의 AI가 당신에게 맞는 최적의 동네를 찾고 있습니다.
      </MainText>
      <MainText>잠시만 기다려주세요.</MainText>
    </OnBoardingAContainer>
  );
};
export default Loading;

const OnBoardingAContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-position: center left; // 이미지를 컨테이너의 중앙에 위치
`;

const LogoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  margin: 30px;
`;

const MainText = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 8px;
`;
