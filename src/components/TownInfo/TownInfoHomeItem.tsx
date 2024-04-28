import React from 'react';
import styled from '@emotion/styled';
import miniHome from '../../assets/miniHome.svg';
import miniMap from '../../assets/miniMap.svg';

const TownInfoHomeItem = () => {
  return (
    <RecommendCommonContainer>
      <RecommendCommonWrap>
        <AreaText>000아파트</AreaText>
        <div>
          <InfoMapWrap>
            <img src={miniMap} alt="miniMap" />
            <div>서울시 00구 00동</div>
          </InfoMapWrap>
        </div>
        <InfoMapText>이화여대에서 도보 3분</InfoMapText>
        <div>
          <InfoMapWrap>
            <img src={miniHome} alt="miniHome" />
            <div>투룸 / 1층</div>
          </InfoMapWrap>
        </div>
        <InfoWrap>
          <InfoItem>월세</InfoItem>
          <InfoItemPrice>80/500</InfoItemPrice>
        </InfoWrap>
        <InfoWrap>
          <InfoItem>전세</InfoItem>
          <InfoItemPrice>80/500</InfoItemPrice>
        </InfoWrap>
      </RecommendCommonWrap>
    </RecommendCommonContainer>
  );
};

export default TownInfoHomeItem;

const RecommendCommonContainer = styled.div`
  width: 271px;
  height: 341px;
  border-radius: 20px;
  background-color: #f6f6f6;
`;

const RecommendCommonWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const AreaText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

const InfoMapWrap = styled.div`
  width: 238px;
  display: flex;
  align-items: center;
  font-size: 20px;
  img {
    margin-right: 16px;
  }
`;

const InfoMapText = styled.div`
  color: #0b9cdb;
  font-size: 20px;
  margin-left: 24px;
  margin-top: -8px;
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 2px;
`;

const InfoItem = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #8c8c8c;
`;

const InfoItemPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;
