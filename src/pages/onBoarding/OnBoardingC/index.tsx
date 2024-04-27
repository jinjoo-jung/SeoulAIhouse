import React, { useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const OnBoardingC = () => {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate(`/onBoardingD`);
  };
  return (
    <div>
      <MiniLogo src={homezMiniLogo} alt="homezMiniLogo" />
      <OnBoardingBContainer>
        <MainText>직장이나 학교 주소를 입력해주세요. </MainText>
        <TextInput type="text" placeholder="ex) 00구 00동 00로, 000대학교" />
        <NextButton onClick={() => handleClickNext()}>다음</NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingC;

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
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const TextInput = styled.input`
  width: 1048px;
  height: 90px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 12px;
  font-size: 24px;
  padding-left: 20px;
  margin-top: 30px;
  margin-bottom: 191px;

  ::placeholder {
    color: rgba(129, 129, 129, 0.4);
  }
`;

const NextButton = styled.button`
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
