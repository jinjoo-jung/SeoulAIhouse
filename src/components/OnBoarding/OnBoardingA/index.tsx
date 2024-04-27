import React from 'react';
import homezLogo from '../../../assets/homezLogo.svg';
import styled from '@emotion/styled';

const OnBoardingA = () => {
  return (
    <div>
      <img src={homezLogo} alt="homezlogo" />
      <div>
        구해줘 홈즈를 통해 자신에게 맞는 동네를 추천받고, <br />
        그에 맞는 매물을 확인해보세요!
      </div>
      <button>시작하기</button>
    </div>
  );
};
export default OnBoardingA;

const OnBoardingAContainer = styled.div;
