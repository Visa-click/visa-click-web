import { Picture } from '@components/image';
import { FC } from 'react';
import { Container } from '@styled/com';
import styled from '@emotion/styled';
import { $phoneWidth, $primary, $primary10, $white50 } from '@styled/helpers';
import { H2, H4, P1, P2 } from '@styled/com/Text';
import { AnimatedContainer } from '@components/animation';
import { motion } from 'framer-motion';
import { config } from './config';

export const HowWork: FC = () => {
  return (
    <Wrapper as="section">
      <AnimatedContainer
        variants={{
          hidden: { opacity: 0, scale: 0.5, x: '-50%' },
          visible: { opacity: 1, scale: 1, x: 0 },
        }}>
        <MyTitle as="h2">Как это работает:</MyTitle>
      </AnimatedContainer>
      <List>
        {config.howWork.map(({ png, webp, label, descr, alt }, i) => (
          <AnimatedContainer
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: '-50%' },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}>
            <Item>
              <ImageWrap>
                <Picture png={png} webp={webp} alt={alt} />
              </ImageWrap>
              <Step as="span">Шаг {i + 1}</Step>
              <Label as="h3">{label}</Label>
              <Descr>{descr}</Descr>
            </Item>
          </AnimatedContainer>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 8rem;
  padding-bottom: 8rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const Title = styled(H2)`
  margin-bottom: 3rem;
  width: fit-content;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

const MyTitle = Title.withComponent(motion.h3);

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: baseline;
  gap: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  &:nth-of-type(even) {
    padding-top: 8rem;
  }
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    &:nth-of-type(even) {
      padding-top: 0;
    }
    br {
      display: none;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  border-radius: 1.5rem;
  background: ${$primary10};
  height: 10.25rem;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 14.375rem;
    max-width: 14.375rem;
    height: 14.375rem;
  }
`;

const Step = styled(P2)`
  width: fit-content;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  background-color: ${$primary};
`;

const Label = styled(H4)`
  margin-bottom: 0.75rem !important;
`;

const Descr = styled(P1)`
  color: ${$white50};
`;
