import React from 'react';
import Clock from '../../assets/Clock.svg';
import RecommendCommon from './RecommendCommon';
import styled from '@emotion/styled';

const RecommendList = () => {
  return (
    <RecommendListContainer>
      <TimeWrap>
        <img src={Clock} alt="clock" />
        <div>0분 ~ 60분</div>
      </TimeWrap>
      <ScrollContainer>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
      </ScrollContainer>
      <Divider />
      <TimeWrap>
        <img src={Clock} alt="clock" />
        <div>0분 ~ 30분</div>
      </TimeWrap>
      <ScrollContainer>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
      </ScrollContainer>
      <TimeWrap>
        <img src={Clock} alt="clock" />
        <div>30분 ~ 60분</div>
      </TimeWrap>
      <ScrollContainer>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
      </ScrollContainer>
      <TimeWrap>
        <img src={Clock} alt="clock" />
        <div>60분 ~ 90분</div>
      </TimeWrap>
      <ScrollContainer>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
      </ScrollContainer>
      <TimeWrap>
        <img src={Clock} alt="clock" />
        <div>90분 이상</div>
      </TimeWrap>
      <ScrollContainer>
        <RecommendCommonWrap>
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
          <RecommendCommon />
        </RecommendCommonWrap>
      </ScrollContainer>
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
  overflow-x: auto; // 가로 스크롤 가능하게 설정
  -ms-overflow-style: none; // IE와 Edge 스크롤바 숨김
  scrollbar-width: none; // Firefox 스크롤바 숨김
  padding-left: 220px;
`;

const RecommendCommonWrap = styled.div`
  display: flex;
  gap: 30px;
  flex-shrink: 0; // 컴포넌트 크기가 줄어들지 않도록 설정

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
