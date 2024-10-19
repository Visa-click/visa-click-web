import { Picture } from '@components/image';
import { FC } from 'react';
import styled from '@emotion/styled';
import { $btnBack, $phoneWidth, $primary10, $white50 } from '@styled/helpers';
import { H2, H4, P1 } from '@styled/com/Text';
import { AnimatedContainer } from '@components/animation';
import { motion } from 'framer-motion';
import { config } from './config';

export const Benefits: FC = () => {
  return (
    <Wrapper>
      <AnimatedContainer
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}>
        <Title as="h2">Преимущества использования нашего сервиса:</Title>
      </AnimatedContainer>
      <List>
        {config.benefits.map(({ png, webp, label, descr, alt }, i) => (
          <AnimatedContainer
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: '50%' },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}>
            <Item>
              <ImageWrap>
                <Picture png={png} webp={webp} alt={alt} />
              </ImageWrap>
              <Label as="h3">{label}</Label>
              <Descr>{descr}</Descr>
            </Item>
          </AnimatedContainer>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 92.25rem;
  padding: 6.13rem;
  margin: 0 auto;
  border-radius: 4rem;
  background-color: ${$primary10};
  @media screen and (max-width: ${$phoneWidth}) {
    margin: 3rem 1.25rem 3rem 1.25rem;
    padding: 1.5rem;
  }
`;

const MyTitle = styled(H2)`
  margin-bottom: 3rem;
  width: fit-content;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;
  }
`;

const Title = MyTitle.withComponent(motion.h2);

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: baseline;
  gap: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  text-align: center;
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
  }
`;

const ImageWrap = styled.div`
  position: relative;
  border-radius: 1.5rem;
  background: ${$btnBack};
  width: 6rem;
  height: 6rem;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 9.5rem;
    max-width: 9.5rem;
    height: 9.5rem;
  }
`;

const Label = styled(H4)`
  margin-bottom: 0.75rem !important;
`;

const Descr = styled(P1)`
  color: ${$white50};
  @media screen and (max-width: ${$phoneWidth}) {
    br {
      display: none;
    }
  }
`;
