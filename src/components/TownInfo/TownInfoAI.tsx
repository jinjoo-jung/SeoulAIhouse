import React, { PureComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import chartTrain from '../../assets/chartTrain.svg';
import chartTime from '../../assets/chartTime.svg';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { AIResponse, ChartDataResponse } from '../../types/report';
import postReport from '../../api/postReport';

const data = [
  {
    name: '영화관',
    percent: '33',
  },
  {
    name: '미술관',
    percent: '89',
  },
  {
    name: '문화 복지 시설',
    percent: '100',
  },
  {
    name: '여성 복지 시설',
    percent: '10',
  },
  {
    name: '약국',
    percent: '52',
  },
  {
    name: '녹지 분포',
    percent: '14',
  },
];

interface TownNameProps {
  townName: string;
  station: string;
}

const TownInfoAI = ({ townName, station }: TownNameProps) => {
  const [reports, setReports] = useState<AIResponse | null>();
  const [chartData, setChartData] = useState<ChartDataResponse[]>([]);

  useEffect(() => {
    const factorsString = sessionStorage.getItem('selectedLabels');
    const factors = factorsString ? JSON.parse(factorsString) : [];
    const destination = sessionStorage.getItem('destination');

    const reportAI = async () => {
      const reportRequest = {
        factors: factors,
        destination: destination,
        town: townName,
        station: station,
      };

      try {
        const reportResponse = await postReport(reportRequest);
        setReports(reportResponse);
        if (
          reportResponse &&
          reportResponse.result &&
          reportResponse.result.graph
        ) {
          setChartData(reportResponse.result.graph);
        } else {
          console.log('Graph data is missing or invalid');
          setChartData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    reportAI();
  }, [townName]);

  return (
    <TownInfoContainer>
      <TownInfoChartContainer>
        <ChartTownText>{townName}AI 리포트</ChartTownText>
        <ChartAIContainer>
          <ChartAIText>서울시집 AI 분석 결과, </ChartAIText>
          <ChartContent>{reports?.result.totalStatement}</ChartContent>
        </ChartAIContainer>
        <ChartItemContainer>
          <ChartItemWrap>
            <ChartItemText>
              <p>추천도</p>
              <div>
                {reports?.result.matchRate
                  ? parseFloat(reports.result.matchRate).toFixed(1)
                  : 'N/A'}
                %
              </div>
            </ChartItemText>
            <ChartInfoContainer>
              <ChartInfoWrap>
                <img src={chartTime} alt="chartTime" />
                <div>소요시간</div>
              </ChartInfoWrap>
              <div>{reports?.result.travelTime}분</div>
            </ChartInfoContainer>
            <ChartInfoContainerB>
              <ChartInfoWrap>
                <img src={chartTrain} alt="chartTrain" />
                <div>지하철역</div>
              </ChartInfoWrap>
              <div>{reports?.result.station}</div>
            </ChartInfoContainerB>
            <ChartInfoContainer>
              <ChartInfoText>평균 월세</ChartInfoText>
              <div>{`${reports?.result.avgRental}/${reports?.result.avgDeposit}`}</div>
            </ChartInfoContainer>
            <ChartInfoContainerB>
              <ChartInfoText>평균 전세</ChartInfoText>
              <div>{reports?.result.avgLump}</div>
            </ChartInfoContainerB>
          </ChartItemWrap>
          <ChartMainWrap>
            <RadarChart
              cx={300}
              cy={270}
              outerRadius={160}
              width={550}
              height={500}
              data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="percent"
                stroke="#0B9CDB"
                fill="#0B9CDB"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ChartMainWrap>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChartTownText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 88px;
  margin-bottom: 40px;
`;

const ChartAIContainer = styled.div`
  width: 1048px;
  height: 113px;
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
  padding: 10px;
`;

const ChartItemContainer = styled.div`
  width: 834px;
  height: 432px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 150px;
`;

const ChartMainWrap = styled.div`
  margin-left: 30px;
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
  white-space: nowrap;
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
  white-space: nowrap;
`;

const ChartInfoContainerB = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: -20px;
  white-space: nowrap;
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
