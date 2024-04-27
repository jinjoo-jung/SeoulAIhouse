import React from 'react';
import homezLogo from '../../../assets/homezLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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
`;

const LogoImg = styled.img`
  margin-bottom: 80px;
`;

const MainText = styled.div`
  font-size: 32px;
  margin: 8px;
  font-weight: medium;
`;

const StartButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: #005cab;
  font-size: 24px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;
