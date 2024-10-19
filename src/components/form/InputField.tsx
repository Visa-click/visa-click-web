import styled from '@emotion/styled';
import { FC } from 'react';
import { isUndefined } from '@bunt/is';
import { OverflowWrapper } from '@components/animation';
import { P1 } from '@styled/com/Text';
import { $errorColor, $phoneWidth } from '@styled/helpers';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  label?: React.ReactNode;
  error?: string;
};

export const InputField: FC<Props> = (props) => {
  const { children, error, label } = props;
  return (
    <Wrap>
      {!isUndefined(label) && <Label>{label}</Label>}
      <Content $error={Boolean(error)}>{children}</Content>
      <OverflowWrapper open={Boolean(error)}>
        <Empty />
        <Error>{error}</Error>
      </OverflowWrapper>
    </Wrap>
  );
};

const Content = styled.div<{ $error: boolean }>`
  border: ${({ $error }) => ($error ? `0.0625rem solid ${$error}` : `0.0625rem solid transparent`)};
  color: ${({ $error }) => ($error ? $error : 'inherit')};
  border-radius: 0.75rem;
  > * {
    color: ${({ $error }) => ($error ? $error : 'inherit')};
    width: 100%;
    /* height: 100%; */
  }
  input:not([type='checkbox']) {
    ${({ $error }) =>
      $error &&
      css`
        border: 0.0625rem solid ${$errorColor};
        background-color: rgba(255, 83, 83, 0.1);
      `}
  }
`;

const Label = styled(P1)`
  text-align: left;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
`;

const Empty = styled.div`
  height: 0;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: padding 0.3s;
`;

const Error = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  min-height: 1.25rem;
  color: ${$errorColor};
`;
