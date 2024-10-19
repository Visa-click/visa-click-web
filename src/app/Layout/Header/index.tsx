import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '@styled/com';
import { RoutePrefix } from '@utils/routes';
import { Picture } from '@components/image';
import { LogoPng, LogoWebp } from '@assets/img/header';
import { TELEGRAM_LINK } from '@utils/socials';
import { IconTelegram } from '@components/icons';
import { Button } from '@components/form';
import { NavigateClick } from '@components/route';
import { Link } from 'react-router-dom';
import { $phoneWidth, $white50 } from '@styled/helpers';
import { AnimatedContainer } from '@components/animation';
import { motion } from 'framer-motion';

export const Header: FC = () => {
  return (
    <AnimatedContainer
      variants={{
        hidden: { opacity: 0, y: '-50%' },
        visible: { opacity: 1, y: 0 },
      }}>
      <Wrapper>
        <MyContainer>
          <Logo to={RoutePrefix.MAIN}>
            <Picture png={LogoPng} webp={LogoWebp} alt="logo" />
            Виза<span>.клик</span>
          </Logo>
          <Buttons>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
              <Telegram $theme="block">
                <span>Мы в Телеграме</span>
                <IconTelegram />
              </Telegram>
            </a>
            <NavigateClick to={RoutePrefix.AUTH}>
              <Button $theme="general">
                Подать заявку <span>на визу</span>
              </Button>
            </NavigateClick>
            <NavigateClick to={''}>
              <Button className="desktop" $theme="element">
                Узнать статус
              </Button>
            </NavigateClick>
          </Buttons>
        </MyContainer>
      </Wrapper>
    </AnimatedContainer>
  );
};

const Wrapper = styled(motion.header)`
  padding: 1.5rem 0;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0%;
  span {
    color: ${$white50};
  }
  img {
    min-width: 2.63rem;
    height: 2.63rem;
    margin-right: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    margin-right: 0.5rem;
    img {
      margin-right: 0.5rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: row-reverse;
    button {
      white-space: normal;
      span {
        display: none;
      }
    }
    .desktop {
      display: none;
    }
    > *:not(:last-child) {
      margin-right: 0;
    }
    a {
      margin-left: 1rem !important;
    }
  }
`;

const Telegram = styled(Button)`
  position: relative;
  padding: 0 3.63rem 0 1rem;
  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 2.63rem;
    height: 2.63rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 0;
    svg {
      position: relative;
    }
  }
`;
