import React from 'react';
import SeoulBig from '../../../assets/SeoulBig.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PolygonA from '../../../assets/PolygonA.png';

const OnBoardingA = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate(`/onBoardingE`);
  };

  const handleClickLogo = () => {
    navigate(`/`);
  };

  return (
    <OnBoardingAContainer>
      <LogoImg
        onClick={() => handleClickLogo()}
        src={SeoulBig}
        alt="SeoulBig"
      />
      <MainText>서울AI집을 통해 자신에게 맞는 동네를 추천받고,</MainText>
      <MainText>그에 맞는 매물을 확인해보세요!</MainText>
      <StartButton onClick={() => handleClickStart()}>시작하기</StartButton>
    </OnBoardingAContainer>
  );
};
export default OnBoardingA;

const OnBoardingAContainer = styled.div`
  height: 100vh; /* 뷰포트의 전체 높이 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${PolygonA});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
`;

const LogoImg = styled.img`
  margin-bottom: 80px;
  cursor: pointer;
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
