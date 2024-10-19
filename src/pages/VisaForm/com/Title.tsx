import styled from '@emotion/styled';
import { H4, P1, P2 } from '@styled/com/Text';
import { $phoneWidth, $primary, $white50 } from '@styled/helpers';
import { FC, ReactNode } from 'react';

type Props = {
  step: number;
  title: ReactNode;
  descr: ReactNode;
  center?: boolean;
};

export const Title: FC<Props> = (props) => {
  const { step, title, descr, center = false } = props;
  return (
    <Wrapper $center={center}>
      <Step>{step} этап</Step>
      <Label>{title}</Label>
      <Descr>{descr}</Descr>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $center: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $center }) => ($center ? 'center' : 'flex-start')};
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  @media screen and (max-width: ${$phoneWidth}) {
    align-items: center;
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

const Step = styled(P2)`
  border-radius: 2rem;
  background: ${$primary};
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  margin-bottom: 1.25rem;
  width: fit-content;
`;

const Label = styled(H4)`
  margin-bottom: 0.75rem;
`;

const Descr = styled(P1)`
  color: ${$white50};
`;
