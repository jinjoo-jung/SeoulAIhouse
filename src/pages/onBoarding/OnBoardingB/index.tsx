import React, { useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const OnBoardingB = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate(`/onBoardingC`);
  };
  return (
    <div>
      <MiniLogo src={homezMiniLogo} alt="homezMiniLogo" />
      <OnBoardingBContainer>
        <MainText>
          집을 선택할 때, 가장 중요하게 보는 요소들을 선택해주세요.
        </MainText>
        <ButtonContainer>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
          <ButtonItem>안전도</ButtonItem>
        </ButtonContainer>
        <NextButton onClick={() => handleClickNext()}>다음</NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingB;

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
`;

const ButtonItem = styled.button`
  width: 239.5px;
  height: 65px;
  border-radius: 20px;
  font-size: 24px;
  color: #8c8c8c;
  border: 1px solid #8c8c8c;
  margin: 10px 0px;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: #005cab;
  font-size: 24px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;
