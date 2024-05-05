import React from 'react';
import MiniLogo from '../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const RecommendHeader = () => {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate(`/`);
  };

  const hanldeMapClick = () => {
    navigate(`/map`);
  };

  return (
    <RecommendHeaderContainer>
      <img onClick={() => handleClickLogo()} src={MiniLogo} alt="mini-logo" />
      <HeaderWrap>
        <HeaderText>000동 00로</HeaderText>
      </HeaderWrap>
      <RecommendChange>변경하기</RecommendChange>
      <MapMoveText onClick={() => hanldeMapClick()}>
        전월세/이동시간 맞춤 지도 바로가기
      </MapMoveText>
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
  z-index: 10;
  img {
    cursor: pointer;
  }
`;

const HeaderWrap = styled.div`
  width: 700px;
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
  margin-left: 300px;
  cursor: pointer;
`;

const MapMoveText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #005cab;
  margin-left: 50px;
  cursor: pointer;
`;
