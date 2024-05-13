import React, { useEffect, useState } from 'react';
import Clock from '../../assets/Clock.svg';
import RecommendCommon from './RecommendCommon';
import styled from '@emotion/styled';
import { TimeGroupsResponse, TownCardsResponse } from '../../types/ranking';

interface RankingPros {
  timeGroups: TimeGroupsResponse[];
}

const RecommendList = ({ timeGroups }: RankingPros) => {
  const [commonRange, setCommonRange] = useState<TownCardsResponse[]>([]);

  useEffect(() => {
    const targetGroup = timeGroups.find(
      (group) => group.timeRange === 'WITHIN_60_MINUTES',
    );

    if (targetGroup) {
      setCommonRange(targetGroup.townCards);
    }
  }, [timeGroups]);

  const getTimeRangeLabel = (timeRange: string) => {
    const labels = {
      WITHIN_30_MINUTES: '0분 ~ 30분',
      WITHIN_60_MINUTES: '30분 ~ 60분',
      WITHIN_90_MINUTES: '60분 ~ 90분',
      OVER_90_MINUTES: '90분 이상',
    };
    return (
      labels[timeRange as keyof typeof labels] || '정의되지 않은 시간 범위'
    );
  };

  return (
    <RecommendListContainer>
      <TimeWrap>
        <img src={Clock} alt="clock" />
        <div>0분 ~ 60분</div>
      </TimeWrap>
      <ArrowAndScrollContainer>
        <ScrollContainer>
          <RecommendCommonWrap>
            {commonRange.map((town, townIndex) => (
              <RecommendCommon
                key={townIndex}
                town={town}
                number={townIndex + 1}
              />
            ))}
          </RecommendCommonWrap>
        </ScrollContainer>
      </ArrowAndScrollContainer>
      <Divider />
      {timeGroups.map((group, index) => (
        <div key={index}>
          <TimeWrap>
            <img src={Clock} alt="clock" />
            <div>{getTimeRangeLabel(group.timeRange)}</div>
          </TimeWrap>
          <ArrowAndScrollContainer>
            <ScrollContainer>
              <RecommendCommonWrap>
                {group.townCards.map((town, townIndex) => (
                  <RecommendCommon
                    key={townIndex}
                    town={town}
                    number={townIndex + 1}
                  />
                ))}
              </RecommendCommonWrap>
            </ScrollContainer>
          </ArrowAndScrollContainer>
        </div>
      ))}
    </RecommendListContainer>
  );
};

export default RecommendList;

const RecommendListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 114px;
  margin-bottom: 114px;
`;

const TimeWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0; // 상단에서 고정
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 220px;
  padding-top: 100px;

  div {
    font-size: 32px;
    font-weight: bold;
    margin-left: 10px;
  }
`;
const ScrollContainer = styled.div`
  position: relative;
  overflow-x: auto; // 가로 스크롤 가능하게 설정
  -ms-overflow-style: none; // IE와 Edge 스크롤바 숨김
  scrollbar-width: none; // Firefox 스크롤바 숨김
  padding-left: 220px;
`;

const ArrowAndScrollContainer = styled.div`
  position: relative; // 화살표들을 이 컨테이너에 대해 절대 위치
  display: flex;
  align-items: center;
`;

const LeftIconImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 250px;
  margin-top: 110px;
  z-index: 1;
`;

const RightIconImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 190px;
  margin-top: 110px;
  z-index: 1;
`;

const RecommendCommonWrap = styled.div`
  display: flex;
  gap: 30px;
  flex-shrink: 0; // 컴포넌트 크기가 줄어들지 않도록 설정
  height: 300px;

  & > * {
    flex-shrink: 0; // 자식 요소들도 크기가 줄어들지 않도록 설정
    min-width: max-content; // 자식 요소가 내용에 맞는 최소 너비를 가지도록 설정
  }

  &::-webkit-scrollbar {
    display: none; // 스크롤바 숨기기
  }
`;

const Divider = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #8c8c8c;
  margin-top: 100px;
`;
