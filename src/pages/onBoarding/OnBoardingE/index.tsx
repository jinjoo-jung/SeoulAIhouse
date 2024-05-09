import React, { ChangeEvent, useEffect, useState } from 'react';
import seoul from '../../../assets/seoul.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import iconE from '../../../assets/onBoardingE.svg';

const OnBoardingE = () => {
  const navigate = useNavigate();
  const [sex, setSex] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [workDay, setWorkDay] = useState('');
  const [arrivalTime, setArrivalTime] = useState<number | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);
  const [isValidArrivalTime, setIsValidArrivalTime] = useState(false);

  const handleClickNext = () => {
    navigate(`/onBoardingB`);
  };
  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleSexClick = (sex: string) => {
    setSex(sex);
    sessionStorage.setItem('sex', sex);
  };

  const handleWorkDayClick = (workDay: string) => {
    setWorkDay(workDay);
    sessionStorage.setItem('workDay', workDay);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const ageValue = parseInt(e.target.value, 10);
    if (!e.target.value) {
      setAge(null);
      setIsValidAge(false);
    } else if (ageValue >= 18 && ageValue <= 40) {
      setAge(ageValue);
      setIsValidAge(false); // 유효성 검사 통과
      sessionStorage.setItem('age', e.target.value);
    } else {
      setAge(ageValue); // 여전히 값을 설정하지만 유효하지 않음
      setIsValidAge(true); // 유효하지 않다고 표시
    }
  };

  const handleArrivalTime = (e: ChangeEvent<HTMLInputElement>) => {
    const arrivalTimeValue = parseInt(e.target.value, 10);
    if (!e.target.value) {
      setArrivalTime(null);
      setIsValidArrivalTime(false);
    } else if (arrivalTimeValue >= 0 && arrivalTimeValue <= 23) {
      setArrivalTime(arrivalTimeValue);
      setIsValidArrivalTime(false); // 유효성 검사 통과
      sessionStorage.setItem('arrivalTime', e.target.value);
    } else {
      setArrivalTime(arrivalTimeValue);
      setIsValidArrivalTime(true); // 유효하지 않다고 표시
    }
  };

  useEffect(() => {
    const validateForm = () => {
      return (
        sex !== '' && age !== null && workDay !== '' && arrivalTime !== null
      );
    };
    setIsValid(validateForm());
  }, [age, sex, arrivalTime, workDay]);

  return (
    <OnBoardingContainer>
      <IconE src={iconE} alt="IconE" />
      <MiniLogo
        onClick={() => handleClickLogo()}
        src={seoul}
        alt="homezseoulMiniLogo"
      />
      <OnBoardingBContainer>
        <OnBoardingEWrap>
          <ElementText>성별</ElementText>
          <Buttonwrap>
            <ButtonStyle
              isClicked={sex === 'MALE'}
              onClick={() => handleSexClick('MALE')}>
              남자
            </ButtonStyle>
            <ButtonStyle
              isClicked={sex === 'FEMALE'}
              onClick={() => handleSexClick('FEMALE')}>
              여자
            </ButtonStyle>
          </Buttonwrap>
          <ElementText>나이</ElementText>
          <AgeInput
            value={age || ''}
            onChange={handleAgeChange}
            type="number"
            placeholder="나이를 입력해주세요."
          />
          {isValidAge && (
            <ValidationText>
              18 ~ 40세 사이의 숫자를 입력 해주세요.
            </ValidationText>
          )}
          <ElementText>출근</ElementText>
          <Buttonwrap>
            <ButtonStyle
              isClicked={workDay === 'WEEKDAY'}
              onClick={() => handleWorkDayClick('WEEKDAY')}>
              평일
            </ButtonStyle>
            <ButtonStyle
              isClicked={workDay === 'WEEKEND'}
              onClick={() => handleWorkDayClick('WEEKEND')}>
              주말
            </ButtonStyle>
          </Buttonwrap>
          <ElementText>도착 시간</ElementText>
          <AgeInput
            value={arrivalTime || ''}
            onChange={handleArrivalTime}
            type="number"
            placeholder="학교나 직장에 도착해야 하는 시간을 입력해주세요. (ex. 9) "
          />

          {isValidArrivalTime && (
            <ValidationText>
              학교나 직장에 도착해야 하는 시간을 입력해주세요.
            </ValidationText>
          )}
        </OnBoardingEWrap>
        <NextButton onClick={() => handleClickNext()} disabled={!isValid}>
          다음
        </NextButton>
      </OnBoardingBContainer>
    </OnBoardingContainer>
  );
};

export default OnBoardingE;

const MiniLogo = styled.img`
  margin: 30px;
  cursor: pointer;
`;

const OnBoardingContainer = styled.div`
  height: 100vh;
  overflow: scroll-y;
`;

const IconE = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const OnBoardingBContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OnBoardingEWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 800px;
  margin-top: 50px;
  margin-right: 350px;
`;

const ElementText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Buttonwrap = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 40px;
`;

const ButtonStyle = styled.button<{ isClicked: boolean }>`
  width: 239.5px;
  height: 65px;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => (props.isClicked ? '#0B9CDB' : '#8c8c8c')};
  border: ${(props) => (props.isClicked ? '3px' : '1px')} solid
    ${(props) => (props.isClicked ? '#0B9CDB' : '#8c8c8c')};
  background-color: transparent;
  margin: 10px 0px;
  cursor: pointer;
`;

const AgeInput = styled.input`
  width: 702px;
  height: 66px;
  border: 1px solid black;
  border-radius: 20px;
  font-size:24px;
  padding-left:20px;
  margin-bottom: 40px;


  ::placeholder {
    color: rgba(129, 129, 129, 0.4);
  }
  &:focus {
    outline: none; // 포커스 상태에서의 아웃라인 제거
`;

const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? 'rgba(129, 129, 129, 0.4)' : '#005CAB'};
  font-size: 24px;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
  font-weight: 500;
`;

const ValidationText = styled.div`
  margin-top: -50px;
  margin-left: 10px;
  font-size: 16px;
  color: red;
`;
