import React, { useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const OnBoardingE = () => {
  const navigate = useNavigate();
  const [sex, setSex] = useState;

  const [isValid, setIsValid] = useState(false);

  const handleClickNext = () => {
    navigate(`/onBoardingB`);
  };
  const handleClickLogo = () => {
    navigate(`/`);
  };
  return (
    <OnBoardingContainer>
      <MiniLogo
        onClick={() => handleClickLogo()}
        src={homezMiniLogo}
        alt="homezMiniLogo"
      />
      <OnBoardingBContainer>
        <OnBoardingEWrap>
          <ElementText>성별</ElementText>
          <div>
            <button>남자</button>
            <button>여자</button>
          </div>
          <ElementText>나이</ElementText>
          <input type="text" placeholder="나이를 입력해주세요." />
          <ElementText>출근</ElementText>
          <div>
            <button>평일</button>
            <button>주말</button>
          </div>
          <ElementText>도착 시간</ElementText>
          <input
            type="text"
            placeholder="학교나 직장에 도착해야 하는 시간을 입력해주세요."
          />
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

const OnBoardingBContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OnBoardingEWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ElementText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? 'rgba(129, 129, 129, 0.4)' : '#005CAB'};
  font-size: 24px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
  font-weight: 500;
`;
