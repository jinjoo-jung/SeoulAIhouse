import React, { useState } from 'react';
import homezMiniLogo from '../../../assets/homezMiniLogo.svg';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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

  const handleSelectClick = (index: number) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleClickNext = () => {
    navigate(`/onBoardingC`);
  };
  return (
    <div>
      <MiniLogo src={homezMiniLogo} alt="homezMiniLogo" />
      <OnBoardingBContainer>
        <MainText>
          집을 선택할 때, 가장 중요하게 보는 요소들을 선택해주세요.
        </MainText>
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
        <NextButton onClick={() => handleClickNext()}>다음</NextButton>
      </OnBoardingBContainer>
    </div>
  );
};

export default OnBoardingB;

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
  background-color: #005cab;
  font-size: 24px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
  font-weight: 500;
`;
