import React from 'react';
import MiniLogo from '../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';

const RecommendHeader = () => {
  return (
    <RecommendHeaderContainer>
      <img src={MiniLogo} alt="mini-logo" />
      <HeaderWrap>
        <HeaderText>000동 00로</HeaderText>
      </HeaderWrap>
      <div>변경하기</div>
    </RecommendHeaderContainer>
  );
};

export default RecommendHeader;

const RecommendHeaderContainer = styled.div`
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #8c8c8c;
`;

const HeaderWrap = styled.div`
  width: 754px;
  height: 67px;
  border-radius: 20px;
  border: 1px solid #060606;
  display: flex;
  align-items: center;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

const Recommne;
