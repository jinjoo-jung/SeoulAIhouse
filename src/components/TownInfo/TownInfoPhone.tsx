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
        <div>00동 공인중개사 목록</div>
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
  width: 1048px;
  height: 334px;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 40px;
`;

const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-bottom: 40px;
`;

const PhoneItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const PhoneName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
