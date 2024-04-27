import React from 'react';
import Clock from '../../assets/Clock.svg';
import RecommendCommon from './RecommendCommon';
import styled from '@emotion/styled';

const RecommendList = () => {
  return (
    <RecommendListContainer>
      <RecommendItemListContainer>
        <RecommendCommonItemListWrap>
          <TimeWrap>
            <img src={Clock} alt="clock" />
            <div>0분 ~ 60분</div>
          </TimeWrap>
          <RecommendCommonWrap>
            <RecommendCommon />
            <RecommendCommon />
            <RecommendCommon />
          </RecommendCommonWrap>
        </RecommendCommonItemListWrap>
        <RecommendItemListWrap>
          <TimeWrap>
            <img src={Clock} alt="clock" />
            <div>0분 ~ 60분</div>
          </TimeWrap>
          <RecommendCommonWrap>
            <RecommendCommon />
            <RecommendCommon />
            <RecommendCommon />
          </RecommendCommonWrap>
        </RecommendItemListWrap>
        <RecommendItemListWrap>
          <TimeWrap>
            <img src={Clock} alt="clock" />
            <div>0분 ~ 60분</div>
          </TimeWrap>
          <RecommendCommonWrap>
            <RecommendCommon />
            <RecommendCommon />
            <RecommendCommon />
          </RecommendCommonWrap>
        </RecommendItemListWrap>{' '}
        <RecommendItemListWrap>
          <TimeWrap>
            <img src={Clock} alt="clock" />
            <div>0분 ~ 60분</div>
          </TimeWrap>
          <RecommendCommonWrap>
            <RecommendCommon />
            <RecommendCommon />
            <RecommendCommon />
          </RecommendCommonWrap>
        </RecommendItemListWrap>
      </RecommendItemListContainer>
    </RecommendListContainer>
  );
};

export default RecommendList;

const RecommendListContainer = styled.div`
  margin-top: 114px;
`;

const RecommendItemListContainer = styled.div``;

const RecommendCommonItemListWrap = styled.div``;

const RecommendItemListWrap = styled.div``;

const TimeWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 32px;
    font-weight: bold;
  }
`;

const RecommendCommonWrap = styled.div`
  display: flex;
`;
