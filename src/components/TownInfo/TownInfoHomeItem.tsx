import React from 'react';
import styled from '@emotion/styled';
import miniHome from '../../assets/miniHome.svg';
import miniMap from '../../assets/miniMap.svg';
import { HomeRecommendPropertyResponse } from '../../types/homeRecommned';

interface HomeRecommendItemProps {
  property: HomeRecommendPropertyResponse;
}

const TownInfoHomeItem = ({ property }: HomeRecommendItemProps) => {
  console.log(property);

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
        <div>
          <InfoMapWrap>
            <img src={miniHome} alt="miniHome" />
            <div>면적:</div>
            <div>24m²</div>
          </InfoMapWrap>
        </div>
        <InfoMapText />
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
  gap: 26px;
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
  width: 238px;
  border: 0.5px solid #8c8c8c;
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
