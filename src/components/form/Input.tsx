import styled from '@emotion/styled';
import { $btnBlock, $btnHover, $primary } from '@styled/helpers';

export const Input = styled.input`
  border-radius: 0.75rem;
  background-color: ${$btnBlock};
  height: 2.63rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0.63rem 1rem 0.63rem 1rem;
  border: 0.0625rem solid transparent;

  transition: border 0.3s, background-color 0.3s;

  &::placeholder {
    opacity: 1;
    color: rgba(255, 255, 255, 0.5);

    transition: opacity 0.3s;
  }
  &:focus {
    border: 0.0625rem solid ${$primary};
    background-color: ${$btnHover};
    &::placeholder {
      opacity: 0;
    }
  }
`;
