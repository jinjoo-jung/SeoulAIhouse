import React, { useEffect, useState } from 'react';
import likeIcon from '../../assets/LikeIcon.svg';
import styled from '@emotion/styled';
import phoneIcon from '../../assets/Phone.svg';
import mapA from '../../assets/MapA.svg';
import getAgencyRecommend from '../../api/getAgencyRecommend';
import { AgencyListResponse } from '../../types/agency';

interface TownNameProps {
  townName: string;
}

const TownInfoPhone = ({ townName }: TownNameProps) => {
  const [agencies, setAgencies] = useState<AgencyListResponse[]>([]);

  const agencyRecommend = async () => {
    try {
      const agencyRecommendResponse = await getAgencyRecommend(townName);
      if (agencyRecommendResponse) {
        setAgencies(agencyRecommendResponse.result.agencies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    agencyRecommend();
  }, [townName]);

  return (
    <div>
      <HomeWrap>
        <img src={likeIcon} alt="likeIcon" />
        <div>{townName} 공인중개사 목록</div>
      </HomeWrap>
      <PhoneContainer>
        {agencies.map((agency, index) => (
          <PhoneWrap key={index}>
            <PhoneName> {agency.name}</PhoneName>
            <PhoneItemWrap>
              <img src={phoneIcon} alt="phoneICon" />
              <div>{agency.phone}</div>
            </PhoneItemWrap>
            <PhoneItemWrap>
              <img src={mapA} alt="mapA" />
              <div>{agency.address}</div>
            </PhoneItemWrap>
          </PhoneWrap>
        ))}
      </PhoneContainer>
    </div>
  );
};

export default TownInfoPhone;

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

const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1048px;
  height: auto; // 높이를 auto로 설정하여 내용에 맞게 조정
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 40px;
`;

const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; // 왼쪽에서 시작
`;

const PhoneItemWrap = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start; // 왼쪽에서 시작
  gap: 10px;
`;

const PhoneName = styled.div`
  width: 30%; // 세 항목이 동일한 비율을 차지하도록
  text-align: left; // 텍스트 왼쪽 정렬

  font-size: 20px;
  font-weight: 600;
`;
