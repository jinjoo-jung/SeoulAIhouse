import React from 'react';
import homezLogo from '../../../assets/homezLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PolygonA from '../../../assets/PolygonA.png';

const OnBoardingA = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate(`/onBoardingB`);
  };
  return (
    <OnBoardingAContainer>
      <LogoImg src={homezLogo} alt="homezlogo" />
      <MainText>구해줘 홈즈를 통해 자신에게 맞는 동네를 추천받고,</MainText>
      <MainText>그에 맞는 매물을 확인해보세요!</MainText>
      <StartButton onClick={() => handleClickStart()}>시작하기</StartButton>
    </OnBoardingAContainer>
  );
};
export default OnBoardingA;

const OnBoardingAContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${PolygonA});
  background-repeat: no-repeat;
  background-position: center right; // 이미지를 컨테이너의 중앙에 위치
`;

const LogoImg = styled.img`
  margin-bottom: 80px;
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin: 8px;
`;

const StartButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: #005cab;
  font-size: 24px;
  font-weight: 500;

  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;
