import React from 'react';
import Clock from '../../assets/Clock.svg';
import RecommendCommon from './RecommendCommon';
import styled from '@emotion/styled';

const RecommendList = () => {
  return (
    <RecommendListContainer>
      <RecommendItemListContainer>
        <TimeWrap>
          <img src={Clock} alt="clock" />
          <div>0분 ~ 60분</div>
        </TimeWrap>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
        <TimeWrap>
          <img src={Clock} alt="clock" />
          <div>0분 ~ 30분</div>
        </TimeWrap>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
        <TimeWrap>
          <img src={Clock} alt="clock" />
          <div>30분 ~ 60분</div>
        </TimeWrap>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
        <TimeWrap>
          <img src={Clock} alt="clock" />
          <div>60분 ~ 90분</div>
        </TimeWrap>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
        <TimeWrap>
          <img src={Clock} alt="clock" />
          <div>90분 이상</div>
        </TimeWrap>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
      </RecommendItemListContainer>
    </RecommendListContainer>
  );
};

export default RecommendList;

const RecommendListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 114px;
`;

const RecommendItemListContainer = styled.div`
  width: 100%;
  padding-left: 220px; // 왼쪽 패딩으로 위치 조정
`;

const TimeWrap = styled.div`
  position: sticky;
  left: 0; // 상단에서 고정
  display: flex;
  align-items: center;

  div {
    font-size: 32px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const RecommendCommonWrap = styled.div`
  display: flex;
  gap: 30px;
  flex-shrink: 0; // 컴포넌트 크기가 줄어들지 않도록 설정

  & > * {
    flex-shrink: 0; // 자식 요소들도 크기가 줄어들지 않도록 설정
    min-width: max-content; // 자식 요소가 내용에 맞는 최소 너비를 가지도록 설정
  }
`;
