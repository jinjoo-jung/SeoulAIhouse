import React, { useEffect, useState } from 'react';
import homezMiniLogo from '../../../assets/seoul.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import onBoardingBIcon from '../../../assets/onBoardingB.svg';

const options = [
  '안전도',
  '안전도',
  '시간',
  '안전도',
  '안전도',
  '안전도',
  '안전도',
  '안전도',
  '안전도',
  '안전도',
  '안전도',
  '안전도',
];

const OnBoardingB = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isValid, setIsValid] = useState(false);

  const handleSelectClick = (index: number) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  useEffect(() => {
    const selectedLabels = selectedOptions.map((index) => options[index]);
    sessionStorage.setItem('selectedLabels', JSON.stringify(selectedLabels));
    console.log(selectedLabels);
    if (selectedOptions.length >= 3) {
      setIsValid(true);
    }
  }, [selectedOptions]);

  const handleClickNext = () => {
    navigate(`/onBoardingC`);
  };
  const handleClickLogo = () => {
    navigate(`/`);
  };
  return (
    <div>
      <PageStyleIcon src={onBoardingBIcon} alt="onBoardingBIcon" />
      <MiniLogo
        onClick={() => handleClickLogo()}
        src={homezMiniLogo}
        alt="homezMiniLogo"
      />
      <OnBoardingBContainer>
        <MainText>
          집을 선택할 때, 가장 중요하게 보는 요소들을 선택해주세요.
        </MainText>
        <SubText>최소 3개 이상 선택해주세요. </SubText>
        <ButtonContainer>
          {options.map((label, index) => (
            <ButtonItem
              key={index}
              isSelected={selectedOptions.includes(index)}
              onClick={() => handleSelectClick(index)}>
              {label}
            </ButtonItem>
          ))}
        </ButtonContainer>
        <NextButton onClick={() => handleClickNext()} disabled={!isValid}>
          다음
        </NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingB;

const PageStyleIcon = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
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
  margin-top: 24px;
  margin-bottom: 20px;
`;

const SubText = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
`;

const ButtonItem = styled.button<{ isSelected: boolean }>`
  width: 239.5px;
  height: 65px;
  border-radius: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => (props.isSelected ? '#0B9CDB' : '#8C8C8C')};
  background-color: transparent;
  border: ${(props) => (props.isSelected ? '3px' : '1px')} solid
    ${(props) => (props.isSelected ? '#0B9CDB' : '#8C8C8C')};
  margin: 10px 0px;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 329px;
  height: 75px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? 'rgba(129, 129, 129, 0.4)' : '#005CAB'};
  font-size: 24px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
  font-weight: 500;
`;
