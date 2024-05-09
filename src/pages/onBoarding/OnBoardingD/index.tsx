import React, { useState } from 'react';
import seoul from '../../../assets/seoul.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import postOnboarding from '../../../api/postOnBoarding';
import iconD1 from '../../../assets/onBoardingD1.svg';
import iconD2 from '../../../assets/onBoardingD2.svg';

const OnBoardingD = () => {
  const navigate = useNavigate();
  const [preferTime, setPreferTime] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleClickTimeButton = (preferTime: string) => {
    console.log(preferTime);
    setPreferTime(preferTime);
    setIsValid(true);
    sessionStorage.setItem('preferTime', preferTime);
  };

  const handleClickNext = async () => {
    const factorsStorage = sessionStorage.getItem('selectedLabels');
    const factors = factorsStorage ? JSON.parse(factorsStorage) : []; // `null`이면 빈 배열
    const station = sessionStorage.getItem('station');
    const timeRange = sessionStorage.getItem('preferTime');
    const sex = sessionStorage.getItem('sex');
    const workDay = sessionStorage.getItem('workDay');

    const ageString = sessionStorage.getItem('age');
    const arrivalTimeString = sessionStorage.getItem('arrivalTime');

    // 문자열을 숫자로 변환
    const age = ageString ? parseInt(ageString) : null;
    const arrivalTime = arrivalTimeString ? parseInt(arrivalTimeString) : null;

    // 요청 객체
    const onBoardingRequest = {
      factors: factors,
      station: station,
      timeRange: timeRange,
      sex: sex,
      age: age,
      arrivalTime: arrivalTime,
      workDay: workDay,
    };
    console.log(onBoardingRequest);

    try {
      const response = await postOnboarding(onBoardingRequest);
      if (response && response.isSuccess) {
        console.log(response);
        sessionStorage.setItem('accessToken', response.result.accessToken);
        navigate(`/townRecommend`);
      } else {
        console.log('Failed to get a valid response:', response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickLogo = () => {
    navigate(`/`);
  };

  return (
    <div>
      <IconD1 src={iconD1} alt="iconD1" />
      <IconD2 src={iconD2} alt="iconD1" />
      <MiniLogo onClick={() => handleClickLogo()} src={seoul} alt="seoul" />
      <OnBoardingBContainer>
        <MainText>선호하는 소요시간을 선택해주세요. </MainText>
        <ButtonContainer>
          <TimeButton
            onClick={() => handleClickTimeButton('WITHIN_30_MINUTES')}
            isClicked={preferTime === 'WITHIN_30_MINUTES'}>
            30분 이내
          </TimeButton>
          <TimeButton
            onClick={() => handleClickTimeButton('WITHIN_60_MINUTES')}
            isClicked={preferTime === 'WITHIN_60_MINUTES'}>
            60분 이내
          </TimeButton>
          <TimeButton
            onClick={() => handleClickTimeButton('WITHIN_90_MINUTES')}
            isClicked={preferTime === 'WITHIN_90_MINUTES'}>
            90분 이내
          </TimeButton>
          <TimeButton
            onClick={() => handleClickTimeButton('OVER_90_MINUTES')}
            isClicked={preferTime === 'OVER_90_MINUTES'}>
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

const IconD1 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 60px;
`;

const IconD2 = styled.img`
  position: absolute;
  top:: 0;
  right: 0;
`;
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
