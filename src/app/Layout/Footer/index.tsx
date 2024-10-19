import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '@styled/com';
import { RoutePrefix } from '@utils/routes';
import { Picture } from '@components/image';
import { LogoPng, LogoWebp } from '@assets/img/header';
import { Button } from '@components/form';
import { Link } from 'react-router-dom';
import { $btnBlock, $btnElement, $phoneWidth, $white100, $white50 } from '@styled/helpers';
import { P1 } from '@styled/com/Text';

export const Footer: FC = () => {
  return (
    <Wrapper as="footer">
      <Top>
        <Logo to={RoutePrefix.MAIN}>
          <Picture png={LogoPng} webp={LogoWebp} alt="Логотип" />
          Виза<span>.клик</span>
        </Logo>
        <Button $fitContent $theme="general">
          Задать вопрос в поддержку
        </Button>
      </Top>
      <Descr>
        Оформление визы в Южную Корею с легкостью! <br /> Откройте новые возможности для путешествий
        с нашим удобным сервисом. <br /> Мы ценим ваше доверие и готовы помочь вам в каждом шаге
        вашего путешествия.
      </Descr>
      <Bottom>
        <Left>© {new Date().getFullYear()} Все права защищены.</Left>
        <Right>
          <span>ИП Царюк А.А ИНН 1234567890</span>
          <Links>
            <Link to={RoutePrefix.POLICY}>Соглашение о конфиденциальности</Link>
          </Links>
        </Right>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 3rem;
    margin-top: 3rem;
    padding-bottom: 3rem;
    border-top: 0.03rem solid rgb(66, 89, 131);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0%;
  img {
    width: 2.63rem;
    height: 2.63rem;
    margin-right: 1rem;
  }
  span {
    color: ${$white50};
  }
  @media screen and (max-width: ${$phoneWidth}) {
    margin-bottom: 1.5rem;
  }
`;

const Descr = styled(P1)`
  color: ${$white50};
  margin: 1.5rem 0;
  @media screen and (max-width: ${$phoneWidth}) {
    text-align: center;
    br {
      display: none;
    }
  }
`;

const Bottom = styled(P1)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  * {
    color: ${$btnBlock};
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column-reverse;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  > * {
    color: ${$btnElement};
    transition: color 0.3s;
    &:hover {
      color: ${$white100};
    }
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
