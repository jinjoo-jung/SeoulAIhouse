import React, { useEffect, useState } from 'react';
import TownInfoHomeItem from './TownInfoHomeItem';
import likeIcon from '../../assets/LikeIcon.svg';
import styled from '@emotion/styled';
import leftCircleIcon from '../../assets/leftCircle.svg';
import rightCircleIcon from '../../assets/rightCircle.svg';
import getHomeRecommend from '../../api/getHomeRecommend';
import { HomeRecommendPropertyResponse } from '../../types/homeRecommned';

interface TownNameProps {
  townName: string;
}

const TownInfoHomeRecommend = ({ townName }: TownNameProps) => {
  const [properties, setProperties] = useState<HomeRecommendPropertyResponse[]>(
    [],
  );
  const homeRecommend = async () => {
    try {
      const homeRecommendResponse = await getHomeRecommend(townName);
      if (
        homeRecommendResponse &&
        homeRecommendResponse.result &&
        homeRecommendResponse.result.properties
      ) {
        setProperties(homeRecommendResponse?.result.properties);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    homeRecommend();
  }, [townName]);

  return (
    <div>
      <HomeWrap>
        <img src={likeIcon} alt="likeIcon" />
        <div>{townName} 매물</div>
      </HomeWrap>
      <ArrowAndScrollContainer>
        <LeftIconImg src={leftCircleIcon} alt="leftCircle" />
        <ScrollContainer>
          <RecommendCommonWrap>
            {properties.map((property, index) => (
              <TownInfoHomeItem key={index} property={property} />
            ))}
          </RecommendCommonWrap>
        </ScrollContainer>
        <RightIconImg src={rightCircleIcon} alt="rightCircleIcon" />
      </ArrowAndScrollContainer>
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
  min-height: 300px;
  overflow-x: auto; // 가로 스크롤 가능하게 설정
  -ms-overflow-style: none; // IE와 Edge 스크롤바 숨김
  scrollbar-width: none; // Firefox 스크롤바 숨김
  margin-left: -220px;
  margin-right: -220px;
  padding-left: 220px;
`;

const RecommendCommonWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-shrink: 0; // 컴포넌트 크기가 줄어들지 않도록 설정

  & > * {
    flex-shrink: 0; // 자식 요소들도 크기가 줄어들지 않도록 설정
    min-width: max-content; // 자식 요소가 내용에 맞는 최소 너비를 가지도록 설정
  }

  &::-webkit-scrollbar {
    display: none; // 스크롤바 숨기기
  }
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
  margin-top: 110px;
  z-index: 1;
`;

const RightIconImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 110px;
  z-index: 1;
`;
