import { AuthSber } from '@components/auth/AuthSber';
import { AuthTBank } from '@components/auth/AuthTBank';
import { Button } from '@components/form';
import styled from '@emotion/styled';
import { $phoneWidth } from '@styled/helpers';
import { FC } from 'react';
import { useVisaContext } from '../VisaProvider';

export const Buttons: FC = () => {
  const { nextStep } = useVisaContext();

  return (
    <Wrapper>
      <Button onClick={nextStep} $theme="block">
        Ввести данные вручную
      </Button>
      <AuthTBank />
      <AuthSber />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.75rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 0.75rem;
    }
  }
`;
