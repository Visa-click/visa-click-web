import { IconTBank } from '@components/icons';
import styled from '@emotion/styled';
import { FC } from 'react';

export const AuthTBank: FC = () => {
  return (
    <Wrapper>
      <IconTBank /> Войти через Tinkoff ID
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  color: rgb(0, 0, 0);
  width: 100%;
  border-radius: 0.75rem;
  background: rgb(250, 221, 86);
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: rgba(250, 221, 86, 0.8);
  }

  &:active {
    color: rgba(0, 0, 0, 0.5);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
