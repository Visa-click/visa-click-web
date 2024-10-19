import { IOption } from '@interfaces/form';
import { FC } from 'react';
import styled from '@emotion/styled';
import { $btnBlock } from '@styled/helpers';
import { Button } from './Button';

type Props = {
  options: IOption[];
  value: string;
  onChange: (value: string) => void;
};

export const Switcher: FC<Props> = (props) => {
  const { options, value, onChange } = props;

  return (
    <Wrapper>
      {options.map((option) => (
        <Button
          type="button"
          onClick={() => onChange(option.value)}
          $theme={value === option.value ? 'general' : 'block'}
          key={option.value}>
          {option.label}
        </Button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  background-color: ${$btnBlock};
  > *:not(:last-child) {
    margin-right: 0.25rem;
  }
`;
