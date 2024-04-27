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
      <RecommendChange>변경하기</RecommendChange>
    </RecommendHeaderContainer>
  );
};

export default RecommendHeader;

const RecommendHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  border-bottom: 1px solid #8c8c8c;
  z-index: 1;
`;

const HeaderWrap = styled.div`
  width: 754px;
  height: 67px;
  border-radius: 20px;
  border: 1px solid #060606;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

const RecommendChange = styled.button`
  position: absolute;
  width: 119px;
  height: 43px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #005cab;
  border-radius: 20px;
  margin-left: 730px;
  cursor: pointer;
`;
