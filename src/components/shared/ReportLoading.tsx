import React from 'react';
import styled from '@emotion/styled';
import { ClipLoader } from 'react-spinners';

const ReportLoading = () => {
  return (
    <OnBoardingAContainer>
      <div>
        <ClipLoader color="#005CAB" loading={true} size={40} />
      </div>
      <MainText>AI 리포트 생성중입니다</MainText>
    </OnBoardingAContainer>
  );
};
export default ReportLoading;

const OnBoardingAContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
`;

const MainText = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 8px;
`;
