import { AuthForm } from '@components/auth';
import { AuthSber } from '@components/auth/AuthSber';
import { AuthTBank } from '@components/auth/AuthTBank';
import { HelmetHead } from '@components/seo';
import styled from '@emotion/styled';
import { Container } from '@styled/com';
import { P1 } from '@styled/com/Text';
import { $phoneWidth } from '@styled/helpers';
import { FC } from 'react';

const Auth: FC = () => {
  return (
    <>
      <HelmetHead title="Авторизация" descr="Авторизация" />
      <Wrapper>
        <Title>
          Для оформления заявки войдите <br /> или зарегистрируйте аккаунт
        </Title>
        <AuthForm />
        <Or as="span">или</Or>
        <Alternative>
          <AuthTBank />
          <AuthSber />
        </Alternative>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  > * {
    max-width: 21.88rem;
  }
`;

const Title = styled.div`
  font-size: 2.63rem;
  font-weight: 700;
  line-height: 2.63rem;
  margin-bottom: 2rem;
  max-width: 100%;
  text-align: center;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    br {
      display: none;
    }
  }
`;

const Or = styled(P1)`
  text-align: center;
  margin: 2rem 0;
`;

const Alternative = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export default Auth;
