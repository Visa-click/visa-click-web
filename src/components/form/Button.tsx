import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  $btnBlock,
  $btnElement,
  $btnHover,
  $primary,
  $secondary,
  $white100,
  $white50,
} from '@styled/helpers';

type TButtonTheme = 'general' | 'block' | 'element';

export const Button = styled.button<{ $theme: TButtonTheme; $fitContent?: boolean }>`
  cursor: pointer;
  width: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100%')};
  height: 2.63rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0%;
  padding: 0 1.5rem;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.75rem;
  color: ${$white100};
  transition: background-color 0.3s, color 0.3s;
  ${({ $theme }) => {
    switch ($theme) {
      case 'general':
        return css`
          background-color: ${$primary};
          &:hover {
            background-color: ${$secondary};
          }
          &:active {
            background-color: ${$secondary};
            color: ${$white50};
          }
        `;
      case 'block':
        return css`
          background-color: ${$btnBlock};
          &:hover {
            background-color: ${$btnHover};
          }
          &:active {
            background-color: ${$btnHover};
            color: ${$white50};
          }
        `;
      case 'element':
        return css`
          background-color: ${$btnElement};
          &:hover {
            background-color: ${$btnHover};
          }
          &:active {
            background-color: ${$btnHover};
            color: ${$white50};
          }
        `;
    }
  }}
`;
