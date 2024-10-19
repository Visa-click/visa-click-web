import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { $btnBlock, $phoneWidth, $white50 } from '@styled/helpers';
import { P1 } from '@styled/com/Text';
import { isDefined, isUndefined } from '@bunt/is';
import { Title } from './Title';

type Props = {
  title: ReactNode;
  descr: ReactNode;
  step: number;
  imageNode?: {
    label: string;
    node: ReactNode;
  };
};

export const Head: FC<Props> = (props) => {
  const { imageNode, ...rest } = props;
  return (
    <Wrapper>
      <Title center={isUndefined(imageNode)} {...rest} />
      {isDefined(imageNode) && (
        <Image>
          <span>{imageNode.label}</span>
          <ImgWrap>{imageNode.node}</ImgWrap>
        </Image>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding-top: 3rem;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    padding-top: 0;
  }
`;

const Image = styled(P1)`
  display: flex;
  align-items: center;
  margin-left: auto;
  span {
    color: ${$white50};
    margin-right: 1.5rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    margin: 0 auto;
    span {
      margin-bottom: 0.75rem;
    }
  }
`;

const ImgWrap = styled.div`
  box-sizing: border-box;
  border-radius: 0.24rem;
  background: ${$btnBlock};
  width: 8.85rem;
  height: 6.25rem;
  position: relative;
`;
