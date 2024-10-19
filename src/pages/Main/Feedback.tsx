import { FC, useRef, useCallback } from 'react';
import { IconArrow } from '@components/icons';
import { Picture } from '@components/image';
import styled from '@emotion/styled';
import { H2, H4, P1, P2 } from '@styled/com/Text';
import { $btnBlock, $btnElement, $phoneWidth, $white100, $white50 } from '@styled/helpers';
import { Container } from '@styled/com';
import { AnimatedContainer } from '@components/animation';
import { motion } from 'framer-motion';
import { config } from './config';

export const Feedback: FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const getSlideWidth = useCallback(() => {
    return sliderRef.current?.querySelector('.slide')?.clientWidth || 0;
  }, []);

  const scrollNext = useCallback(() => {
    if (sliderRef.current) {
      const slideWidth = getSlideWidth();
      sliderRef.current.scrollBy({
        left: slideWidth + 24,
        behavior: 'smooth',
      });
    }
  }, [getSlideWidth]);

  const scrollPrev = useCallback(() => {
    if (sliderRef.current) {
      const slideWidth = getSlideWidth();
      sliderRef.current.scrollBy({
        left: -slideWidth - 24,
        behavior: 'smooth',
      });
    }
  }, [getSlideWidth]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (sliderRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <Wrapper as="section">
      <AnimatedContainer
        variants={{
          hidden: { opacity: 0, y: '-50%' },
          visible: { opacity: 1, y: 0 },
        }}>
        <Head>
          <Title as="h2">Отзывы наших клиентов:</Title>
          <Arrows>
            <PrevArrow onClick={scrollPrev}>
              <IconArrow />
            </PrevArrow>
            <NextArrow onClick={scrollNext}>
              <IconArrow />
            </NextArrow>
          </Arrows>
        </Head>
      </AnimatedContainer>
      <Slider
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}>
        {config.feedback.map(({ avatar: { png, webp }, name, rating, message, date }, i) => (
          <AnimatedContainer
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.5, x: '-50%' },
              visible: { opacity: 1, scale: 1, x: 0 },
            }}
            transition={{ duration: 0.5 + i * 0.1, ease: 'easeInOut' }}>
            <Slide className="slide">
              <Top>
                <Avatar>
                  <Picture png={png} webp={webp} alt={`Аватар ${name}`} />
                </Avatar>
                <Name as="span">{name}</Name>
                <Rating>{rating}</Rating>
              </Top>
              <Message>{message}</Message>
              <Date>{date}</Date>
            </Slide>
          </AnimatedContainer>
        ))}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8rem 0;
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 3rem 0;
  }
`;

const MyHead = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Head = MyHead.withComponent(motion.div);

const Title = styled(H2)`
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

const Arrows = styled.div`
  display: flex;
  align-items: center;
  > * {
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      svg {
        opacity: 0.5;
      }
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: ${$white100};
      stroke: ${$white100};
      transition: opacity 0.3s;
    }
  }
`;

const PrevArrow = styled.div`
  svg {
    transform: rotate(90deg);
  }
`;

const NextArrow = styled.div`
  svg {
    transform: rotate(-90deg);
  }
`;

const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 120rem;
  padding: 0 20rem 2rem;
  margin-left: auto;
  cursor: grab;
  user-select: none;
  > *:not(:last-child) {
    margin-right: 1.5rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 0 1.5rem 1.5rem;
  }

  &:active {
    cursor: grabbing;
  }
`;

const Slide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  background: ${$btnBlock};
  min-width: 25.69rem;
  height: 15rem;
  padding: 2rem;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  border-radius: 0.75rem;
  background-color: ${$btnElement};
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

const Name = styled(H4)``;

const Rating = styled.div`
  margin-left: auto;
`;

const Message = styled(P1)`
  margin-bottom: 1rem;
`;

const Date = styled(P2)`
  color: ${$white50};
`;
