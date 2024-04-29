import styled from '@emotion/styled';
import React from 'react';
import chartTrain from '../../assets/chartTrain.svg';
import chartTime from '../../assets/chartTime.svg';

const TownInfoAI = () => {
  return (
    <TownInfoContainer>
      <TownInfoChartContainer>
        <ChartTownText>000동</ChartTownText>
        <ChartAIContainer>
          <ChartAIText>AI 종합 분석</ChartAIText>
          <ChartContent>
            가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가
          </ChartContent>
        </ChartAIContainer>
        <ChartItemContainer>
          <ChartItemWrap>
            <ChartItemText>
              <p>추천도</p>
              <div>88%</div>
            </ChartItemText>
            <ChartInfoContainer>
              <ChartInfoWrap>
                <img src={chartTime} alt="chartTime" />
                <div>소요시간</div>
              </ChartInfoWrap>
              <div>10분</div>
            </ChartInfoContainer>
            <ChartInfoContainerB>
              <ChartInfoWrap>
                <img src={chartTrain} alt="chartTrain" />
                <div>지하철역</div>
              </ChartInfoWrap>
              <div>이대역</div>
            </ChartInfoContainerB>
            <ChartInfoContainer>
              <ChartInfoText>평균 월세</ChartInfoText>
              <div>80/500</div>
            </ChartInfoContainer>
            <ChartInfoContainerB>
              <ChartInfoText>평균 전세</ChartInfoText>
              <div>80/500</div>
            </ChartInfoContainerB>
          </ChartItemWrap>
          <div>통계 자리</div>
        </ChartItemContainer>
      </TownInfoChartContainer>
    </TownInfoContainer>
  );
};

export default TownInfoAI;

const TownInfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TownInfoChartContainer = styled.div`
  width: 1048px;
  height: 751px;
`;

const ChartTownText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const ChartAIContainer = styled.div`
  width: 100%;
  height: 93px;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 40px;
`;

const ChartAIText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #005cab;
  margin-bottom: 20px;
`;

const ChartContent = styled.div`
  font-size: 20px;
`;

const ChartItemContainer = styled.div`
  width: 834px;
  height: 432px;
  display: flex;
`;

const ChartItemWrap = styled.div`
  width: 250px;
  height: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const ChartItemText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  div {
    font-size: 60px;
    font-weight: bold;
    color: #0b9cdb;
    margin-left: 20px;
  }
`;

const ChartInfoContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const ChartInfoContainerB = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: -20px;
`;

const ChartInfoText = styled.div`
  font-size: 20px;
  font-weight: 6x00;
  color: #8c8c8c;
  margin-right: 90px;
`;

const ChartInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8c8c8c;
  font-size: 20px;
  margin-right: 60px;
  img {
    margin-right: 10px;
  }
`;
