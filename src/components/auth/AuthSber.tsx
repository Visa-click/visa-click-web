import { IconSber } from '@components/icons';
import styled from '@emotion/styled';
import { $white50 } from '@styled/helpers';
import { FC } from 'react';

export const AuthSber: FC = () => {
  return (
    <Wrapper>
      <IconSber /> Войти через СБЕР ID
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  width: 100%;
  border-radius: 0.75rem;
  background: rgb(33, 160, 55);
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: rgba(33, 160, 55, 0.8);
  }

  &:active {
    color: ${$white50};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
