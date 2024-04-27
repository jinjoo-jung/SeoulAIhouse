import React, { useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const OnBoardingD = () => {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate(`/TownRecommend`);
  };
  return (
    <div>
      <MiniLogo src={homezMiniLogo} alt="homezMiniLogo" />
      <OnBoardingBContainer>
        <MainText>선호하는 소요시간을 선택해주세요. </MainText>
        <ButtonContainer>
          <TimeButton>30분 이내</TimeButton>
          <TimeButton>60분 이내</TimeButton>
          <TimeButton>90분 이내</TimeButton>
          <TimeButton>30분 이상</TimeButton>
        </ButtonContainer>
        <NextButton onClick={() => handleClickNext()}>
          동네 추천 받으러 가기!
        </NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingD;

const MiniLogo = styled.img`
  margin: 30px;
`;

const OnBoardingBContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.div`
  font-size: 32px;
  margin: 8px;
  font-weight: medium;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const TimeButton = styled.button`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  color: #8c8c8c;
  font-size: 24px;
  border: 1px solid #8c8c8c;
  cursor: pointer;
`;
const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: #005cab;
  font-size: 24px;
  border-radius: 20px;
  margin-top: 125px;
  cursor: pointer;
`;
