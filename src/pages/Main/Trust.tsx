import { Button } from '@components/form';
import { NavigateClick } from '@components/route';
import { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '@styled/com';
import { H2, P1 } from '@styled/com/Text';
import { $phoneWidth, $primary10, $white50 } from '@styled/helpers';
import { Picture } from '@components/image';
import { AnimatedContainer } from '@components/animation';
import { motion } from 'framer-motion';
import { config } from './config';

export const Trust: FC = () => {
  return (
    <Wrapper as="section">
      {config.trust.map(({ png, webp, alt, label, descr, btn }, i) => (
        <AnimatedContainer
          key={i}
          variants={{
            hidden: { opacity: 0, scale: 0.75, x: i % 2 !== 0 ? '-50%' : '50%' },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}>
          <Item>
            <Text>
              <Title as="h3">{label}</Title>
              <Descr>{descr}</Descr>
              <NavigateClick to={btn.to}>
                <Button $fitContent $theme="general">
                  {btn.label}
                </Button>
              </NavigateClick>
            </Text>
            <ImageWrap>
              <Picture png={png} webp={webp} alt={alt} />
            </ImageWrap>
          </Item>
        </AnimatedContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Container)``;

const Item = styled(motion.div)`
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  > * {
    width: 100%;
  }
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column-reverse !important;
    align-items: center;
    padding: 1.5rem 0;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled(H2)`
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
`;

const Descr = styled(P1)`
  color: ${$white50};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1rem;
    br {
      display: none;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  height: 15.5rem;
  border-radius: 1.5rem;
  background-color: ${$primary10};
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 28.5rem;
    max-width: 28.5rem;
    height: 28.5rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    height: 9.25rem;
    img {
      min-width: auto;
      max-width: none;
      height: 150%;
    }
  }
`;
