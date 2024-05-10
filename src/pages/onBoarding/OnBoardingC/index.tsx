import React, { useEffect, useRef, useState } from 'react';
import seoul from '../../../assets/seoul.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import getAddressStation from '../../../api/getStation';
import iconC1 from '.././../../assets/onBoardingC1.svg';
import iconC2 from '.././../../assets/onBoardingC2.svg';
import { useRecoilState } from 'recoil';
import { addressState } from '../../../recoil/addressState';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Coords {
  x: number;
  y: number;
}

interface InputStyleProps {
  error: boolean;
}

const OnBoardingC = () => {
  const [isModal, setIsModal] = useState(false);
  const [address, setAddress] = useRecoilState(addressState);
  const [coords, setCoords] = useState<Coords | null>(null);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isValidErrorMessage, setIsValidErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const modalRef = useRef(null);

  const handleClickNext = () => {
    navigate(`/onBoardingD`);
  };

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleInputClick = () => {
    setIsModal((prev) => !prev);
  };

  // 주소 주변 역 조회 함수
  const addressStation = async () => {
    if (coords) {
      console.log(coords.x, coords.y);
      try {
        const response = await getAddressStation(coords);
        if (response?.isSuccess) {
          setIsValid(true);
          setIsValidErrorMessage(false);
          sessionStorage.setItem('destination', response.result.destination);
        }
      } catch (error) {
        setIsValid(false);
        setIsValidErrorMessage(true);
        console.log(error);
        setErrorMessage(
          '죄송합니다. 지원하지 않는 위치입니다. 현재 1km 내 서울 1~9호선 지하철역이 있는 경우에만 서비스를 제공중입니다.',
        );
      }
    }
  };

  useEffect(() => {
    addressStation();
  }, [coords]);

  const handleComplete = (data: { address: string }) => {
    console.log(data);
    setAddress({ address: data.address });
    setIsModal(false);

    // Daum Maps Geocoder를 사용하여 좌표 검색
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, function (results: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const result = results[0];
        setCoords({
          x: result.x,
          y: result.y,
        });
      }
    });
  };

  return (
    <div>
      <IconC2 src={iconC2} alt="iconC2" />
      <IconC1 src={iconC1} alt="iconC1" />
      <MiniLogo onClick={() => handleClickLogo()} src={seoul} alt="seoul" />
      <OnBoardingBContainer>
        <MainText>직장이나 학교 주소를 입력해주세요.</MainText>
        {isModal && (
          <Modal ref={modalRef}>
            <DaumPostcode onComplete={handleComplete} />
          </Modal>
        )}
        <TextInput
          onClick={() => handleInputClick()}
          type="text"
          value={address.address}
          placeholder="ex) 00구 00동 00로, 000대학교"
          readOnly
          error={isValidErrorMessage}
        />
        {isValidErrorMessage && (
          <ErrorMessageText>{errorMessage}</ErrorMessageText>
        )}
        <NextButton onClick={() => handleClickNext()} disabled={!isValid}>
          다음
        </NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingC;

const IconC1 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

const IconC2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 180px;
  margin-left: 80px;
`;

const MiniLogo = styled.img`
  margin: 30px;
  cursor: pointer;
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

const TextInput = styled.input<InputStyleProps>`
  position: relative;
  width: 1048px;
  height: 90px;
  border-radius: 20px;
  border: ${(props) => (props.error ? '2px' : '1px')} solid
    ${(props) => (props.error ? 'red' : 'black')};
  font-size: 24px;
  padding-left: 20px;
  margin-top: 30px;
  margin-bottom: 191px;

  ::placeholder {
    color: rgba(129, 129, 129, 0.4);
  }
  &:focus {
    outline: none; // 포커스 상태에서의 아웃라인 제거
`;

const ErrorMessageText = styled.div`
  position: absolute;
  font-size: 20px;
  color: red;
  margin-top: -20px;
`;

const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: ${(props) => (props.disabled ? 'rgba(129, 129, 129, 0.4)' : '#005CAB')};
  font-size: 24px;
  font-weight: 500;
  border-radius: 20px;
  margin-top: 50px;ß
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
