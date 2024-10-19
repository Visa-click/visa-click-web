import { Fn } from '@bunt/type';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@styled/com';
import { $primary } from '@styled/helpers';
import { Button } from '../form';

type Props = {
  message: string;
  description?: string;
  onReset: Fn;
};

export const ErrorPage: React.FC<Props> = ({ onReset, message, description }) => {
  const navigate = useNavigate();
  const onClick = React.useCallback(() => {
    navigate(-1);
    setTimeout(onReset, 500);
  }, []);

  const isDev = false;

  return (
    <Wrapper>
      <MyContainer>
        <Head $dev={isDev}>
          <Text>
            <b>Something went wrong</b>
            <span>We are already working on a fix</span>
          </Text>
        </Head>
        {isDev && (
          <Body>
            <h1>{message}</h1>
            <Pre>{description}</Pre>
          </Body>
        )}
        <Button onClick={onClick}>Go back</Button>
      </MyContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #25293f;
`;

const Pre = styled.pre`
  text-align: left;
  font-size: 1.25rem;
  color: #fff;
  opacity: 0.75;
  line-height: 120%;
  padding: 1.5rem 1rem;
`;

const Body = styled.div`
  background-color: #121422;
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  h1 {
    font-size: 1.5rem;
    text-align: left;
    background: #121422;
    padding: 1rem;
    border-radius: 0.75rem 0.75rem 0 0;
  }
`;

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

const Head = styled.div<{ $dev: boolean }>`
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
  width: 100%;
  ${({ $dev }) =>
    $dev &&
    css`
      flex-direction: row;
    `}
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto 1rem;
  b {
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0.5rem;
    color: ${$primary};
  }
  span {
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }
`;
