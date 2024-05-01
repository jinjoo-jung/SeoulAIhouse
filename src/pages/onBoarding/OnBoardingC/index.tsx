import React, { useEffect, useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';

const OnBoardingC = () => {
  const [isModal, setIsModal] = useState(false);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate(`/onBoardingD`);
  };

  const handleInputClick = () => {
    setIsModal((prev) => !prev);
    console.log(isModal);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setIsModal(false);
  };

  // useEffect(() => {
  //   console.log(isOpen); // 이제 isOpen 상태 변경시마다 로그가 찍힘
  // }, [isOpen]); // isOpen 상태가 변경될 때마다 이 효과를 실행

  return (
    <div>
      <MiniLogo src={homezMiniLogo} alt="homezMiniLogo" />
      <OnBoardingBContainer>
        <MainText>직장이나 학교 주소를 입력해주세요.</MainText>
        {isModal && (
          <Modal>
            <DaumPostcode onComplete={handleComplete} />
          </Modal>
        )}
        <TextInput
          onClick={() => handleInputClick()}
          type="text"
          value={address}
          placeholder="ex) 00구 00동 00로, 000대학교"
          readOnly
        />
        <NextButton onClick={() => handleClickNext()}>다음</NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingC;

const MiniLogo = styled.img`
  margin: 30px;
`;

const OnBoardingBContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.div`
  font-size: 32px;
  margin: 8px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const TextInput = styled.input`
  width: 1048px;
  height: 90px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 12px;
  font-size: 24px;
  padding-left: 20px;
  margin-top: 30px;
  margin-bottom: 191px;

  ::placeholder {
    color: rgba(129, 129, 129, 0.4);
  }
`;

const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: #005cab;
  font-size: 24px;
  font-weight: 500;

  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed; // 모달을 화면 중앙에 고정
  top: 50%; // 화면의 중앙에 위치
  left: 50%; // 화면의 중앙에 위치
  transform: translate(-50%, -50%); // 정확한 중앙 위치 조정
  width: 480px; // 너비 설정
  height: 500px; // 높이 설정
  background-color: white; // 배경색
  z-index: 100; // 다른 요소들 위에 렌더링
  border-radius: 8px; // 테두리 둥글게 처리
  padding: 20px; // 패딩
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5); // 그림자 효과
`;
