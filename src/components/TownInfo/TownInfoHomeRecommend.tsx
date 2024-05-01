import React from 'react';
import TownInoHomeItem from './TownInfoHomeItem';
import likeIcon from '../../assets/LikeIcon.svg';
import styled from '@emotion/styled';

const TownInfoHomeRecommend = () => {
  return (
    <div>
      <HomeWrap>
        <img src={likeIcon} alt="likeIcon" />
        <div>매물 추천</div>
      </HomeWrap>
      <ScrollContainer>
        <RecommendCommonWrap>
          <TownInoHomeItem />
          <TownInoHomeItem />
          <TownInoHomeItem />
          <TownInoHomeItem />
          <TownInoHomeItem />
          <TownInoHomeItem />
          <TownInoHomeItem />
        </RecommendCommonWrap>
      </ScrollContainer>
    </div>
  );
};

export default TownInfoHomeRecommend;

const HomeWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0; // 상단에서 고정
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 100px;

  div {
    font-size: 32px;
    font-weight: bold;
    margin-left: 16px;
  }
`;
const ScrollContainer = styled.div`
  overflow-x: auto; // 가로 스크롤 가능하게 설정
  -ms-overflow-style: none; // IE와 Edge 스크롤바 숨김
  scrollbar-width: none; // Firefox 스크롤바 숨김
  margin-left: -220px;
  margin-right: -220px;
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
