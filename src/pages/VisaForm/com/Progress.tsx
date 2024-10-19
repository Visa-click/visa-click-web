import { FC } from 'react';
import styled from '@emotion/styled';
import { $btnBlock, $primary } from '@styled/helpers';
import { stepDictionary, useVisaContext } from '../VisaProvider';

export const Progress: FC = () => {
  const { currentStep } = useVisaContext();
  const progress = ((stepDictionary[currentStep] || 1) / 4) * 100;

  return (
    <Wrapper progress={progress}>
      <i style={{ width: `${progress}%` }} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ progress?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0.75rem;
  background-color: ${$btnBlock};
  z-index: 2;
  i {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${$primary};
    transition: width 0.3s ease-in-out;
    width: ${({ progress = 0 }) => progress + '%'};
  }
`;
