import React, { useEffect } from 'react';
import miniClock from '../../assets/MiniClock.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { TownCardsResponse } from '../../types/ranking';

interface TownProps {
  number: number;
  town: TownCardsResponse;
}

const RecommendCommon = ({ number, town }: TownProps) => {
  const navigate = useNavigate();

  const handleRecommendClick = () => {
    navigate('/townInfo', { state: { town: town } });
  };

  return (
    <RecommendCommonContainer onClick={() => handleRecommendClick()}>
      <Ranking>{number}</Ranking>
      <RecommendCommonWrap>
        <AreaText>{town.town}</AreaText>
        <TimeContainer>
          <TimeWrap>
            <img src={miniClock} alt="mini clock" />
            <TimeItem>소요시간</TimeItem>
          </TimeWrap>
          <TimeItem>{town.travelTime}분</TimeItem>
        </TimeContainer>
        <InfoWrap>
          <InfoItem>평균 월세</InfoItem>
          <InfoItemPrice>
            {`${town.avgRental}/${town.avgDeposit}`}
          </InfoItemPrice>
        </InfoWrap>
        <InfoWrap>
          <InfoItem>평균 전세</InfoItem>
          <InfoItemPrice>{town.avgLump}</InfoItemPrice>
        </InfoWrap>
      </RecommendCommonWrap>
    </RecommendCommonContainer>
  );
};

export default RecommendCommon;

const RecommendCommonContainer = styled.div`
  position: relative;
  width: 408px;
  max-height: 300px;
  border-radius: 20px;
  background-color: #f6f6f6;
  cursor: pointer;
`;

const Ranking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #005cab;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #005cab;
  border-radius: 50%;
  margin: 20px;
`;

const RecommendCommonWrap = styled.div`
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 26px;
  padding: 50px;
`;

const AreaText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-left: 120px;
`;

const TimeContainer = styled.div`
  width: 297px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #8c8c8c;
  padding-bottom: 12px;
  gap: 60px;
`;

const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 8px;
  }
`;

const TimeItem = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0b9cdb;
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 2px;
  margin-left: 55px;
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
