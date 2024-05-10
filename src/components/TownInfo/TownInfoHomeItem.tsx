import React from 'react';
import styled from '@emotion/styled';
import miniHome from '../../assets/miniHome.svg';
import miniMap from '../../assets/miniMap.svg';
import { HomeRecommendPropertyResponse } from '../../types/homeRecommned';

interface HomeRecommendItemProps {
  property: HomeRecommendPropertyResponse;
}

const TownInfoHomeItem = ({ property }: HomeRecommendItemProps) => {
  // console.log(property);

  const calculateArea = (area: number, floor: number) => {
    const result = area / floor;
    return parseFloat(result.toFixed(2));
  };

  const formatMoney = (value: number) => {
    if (value >= 10000) {
      const billions = Math.floor(value / 10000);
      const rest = value % 10000;
      return `${billions}억${rest > 0 ? ` ${rest}만원` : '원'}`;
    }
    return `${value}만원`;
  };

  const getRentDisplay = (
    rentType: string,
    rental: number,
    deposit: number,
  ) => {
    switch (rentType) {
      case 'MONTH':
        return `${formatMoney(rental)}/${formatMoney(deposit)}`;
      default:
        return '0';
    }
  };

  const getRentLumpDisplay = (
    rentType: string,
    rental: number,
    deposit: number,
  ) => {
    switch (rentType) {
      case 'LUMP':
        return `${formatMoney(deposit)}`;
      default:
        return '0';
    }
  };

  const rentMonthDisplay = getRentDisplay(
    property.rentType,
    property.rental,
    property.deposit,
  );

  const rentLumpDisplay = getRentLumpDisplay(
    property.rentType,
    property.rental,
    property.deposit,
  );

  return (
    <RecommendCommonContainer>
      <RecommendCommonWrap>
        <AreaText>{property.name}</AreaText>
        <div>
          <InfoMapWrap>
            <img src={miniMap} alt="miniMap" />
            <div>{property.address}</div>
          </InfoMapWrap>
        </div>
        <div>
          <InfoMapWrap>
            <img src={miniHome} alt="miniHome" />
            <div>면적:</div>
            <div>{calculateArea(property.area, property.floor)}m²</div>
          </InfoMapWrap>
        </div>
        <InfoMapText />
        <InfoWrap>
          <InfoItem>월세</InfoItem>
          <InfoItemPrice>{rentMonthDisplay}</InfoItemPrice>
        </InfoWrap>
        <InfoWrap>
          <InfoItem>전세</InfoItem>
          <InfoItemPrice>{rentLumpDisplay}</InfoItemPrice>
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
  overflow-x: auto;
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
  white-space: nowrap;

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
  width: 271px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  color: #8c8c8c;
  margin-left: 60px;
`;

const InfoItemPrice = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;
