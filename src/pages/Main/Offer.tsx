import { OfferMainPng, OfferMainWebp } from '@assets/img/pages/main/offer';
import { AnimatedContainer } from '@components/animation';
import { Button } from '@components/form';
import { IconArrow } from '@components/icons';
import { Picture } from '@components/image';
import { NavigateClick } from '@components/route';
import styled from '@emotion/styled';
import { Container } from '@styled/com';
import { H2, P1 } from '@styled/com/Text';
import { $btnElement, $phoneWidth, $primary10, $white100 } from '@styled/helpers';
import { RoutePrefix } from '@utils/routes';
import { motion } from 'framer-motion';
import { FC, useCallback, useRef } from 'react';

export const Offer: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <AnimatedContainer
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}>
      <Wrapper ref={ref}>
        <MyContainer>
          <ImageMain>
            <Picture
              png={OfferMainPng}
              webp={OfferMainWebp}
              alt="Сервис для оформления визы в Южную Корею всего за 490 рублей"
            />
          </ImageMain>
          <Title as="h1">
            Сервис для оформления визы <br /> в Южную Корею всего за 490 рублей
          </Title>
          <Descr>
            Просто заполните заявку, загрузите скан вашего паспорта,
            <br /> и мы возьмем на себя всю остальную работу.
          </Descr>
          <NavigateClick to={RoutePrefix.AUTH}>
            <Button $fitContent $theme="general">
              Подать заявку на визу
            </Button>
          </NavigateClick>
          <Arrow onClick={handleScroll} as="span">
            <span>Узнайте подробности</span>
            <IconArrow />
          </Arrow>
        </MyContainer>
      </Wrapper>
    </AnimatedContainer>
  );
};

const Wrapper = styled(motion.section)`
  background-color: ${$primary10};
  margin-top: -6rem;
`;

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding-bottom: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-bottom: 1rem;
    padding-top: 4.875rem;
    min-height: auto;
  }
`;

const ImageMain = styled.div`
  margin-top: auto;
  img {
    width: 44vh;
    height: auto;
    margin-bottom: 1.125rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    img {
      width: 60vw;
    }
  }
`;

const Title = styled(H2)`
  margin-bottom: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

const Descr = styled(P1)`
  margin-bottom: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1rem;
  }
`;

const Arrow = styled(P1)`
  cursor: pointer;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${$btnElement};
  margin-top: auto;
  transition: color 0.3s;
  svg {
    margin-top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${$btnElement};
    stroke: ${$btnElement};
    transition: fill 0.3s, stroke 0.3s;
  }
  &:hover {
    color: ${$white100};
    svg {
      fill: ${$white100};
      stroke: ${$white100};
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    margin-top: 2.5rem;
  }
`;
