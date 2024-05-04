import React, { useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const OnBoardingD = () => {
  const navigate = useNavigate();
  const [preferTime, setPreferTime] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleClickTimeButton = (preferTime: string) => {
    console.log(preferTime);
    setPreferTime(preferTime);
    setIsValid(true);
  };

  const handleClickNext = () => {
    navigate(`/TownRecommend`);
  };

  const handleClickLogo = () => {
    navigate(`/`);
  };
  return (
    <div>
      <MiniLogo
        onClick={() => handleClickLogo()}
        src={homezMiniLogo}
        alt="homezMiniLogo"
      />
      <OnBoardingBContainer>
        <MainText>선호하는 소요시간을 선택해주세요. </MainText>
        <ButtonContainer>
          <TimeButton
            onClick={() => handleClickTimeButton('30분 이내')}
            isClicked={preferTime === '30분 이내'}>
            30분 이내
          </TimeButton>
          <TimeButton
            onClick={() => handleClickTimeButton('60분 이내')}
            isClicked={preferTime === '60분 이내'}>
            60분 이내
          </TimeButton>
          <TimeButton
            onClick={() => handleClickTimeButton('90분 이내')}
            isClicked={preferTime === '90분 이내'}>
            90분 이내
          </TimeButton>
          <TimeButton
            onClick={() => handleClickTimeButton('90분 이상')}
            isClicked={preferTime === '90분 이상'}>
            90분 이상
          </TimeButton>
        </ButtonContainer>
        <NextButton onClick={() => handleClickNext()} disabled={!isValid}>
          동네 추천 받으러 가기!
        </NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingD;

const MiniLogo = styled.img`
  margin: 30px;
  cursor: pointer;
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

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const TimeButton = styled.button<{ isClicked: boolean }>`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  color: ${(props) => (props.isClicked ? '#0B9CDB' : '#8c8c8c')};
  background-color: transparent;
  font-size: 24px;
  font-weight: 500;
  border: ${(props) => (props.isClicked ? '3px' : '1px')} solid
    ${(props) => (props.isClicked ? '#0B9CDB' : '#8c8c8c')};
  cursor: pointer;
`;
const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? 'rgba(129, 129, 129, 0.4)' : '#005CAB'};
  font-size: 24px;
  font-weight: 500;

  border-radius: 20px;
  margin-top: 125px;
  cursor: pointer;
`;
