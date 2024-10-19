import {
  MastercardPng,
  MastercardWebp,
  MirPng,
  MirWebp,
  VisaPng,
  VisaWebp,
} from '@assets/img/payments';
import { Button } from '@components/form';
import { Picture } from '@components/image';
import styled from '@emotion/styled';
import { H4, P1, P2, P3 } from '@styled/com/Text';
import { $primary, $primary10, $white100, $white50 } from '@styled/helpers';
import { FC } from 'react';
import { useVisaContext } from '../VisaProvider';

export const PaymentInfo: FC = () => {
  const { nextStep } = useVisaContext();

  return (
    <Wrapper>
      <Title>К оплате:</Title>
      <List>
        <Item>
          <Label as="span">Госпошлина Южной Кореи:</Label>
          <Value>720 руб.</Value>
        </Item>
        <Item>
          <Label as="span">Коммиссия сервиса:</Label>
          <Value>490 руб.</Value>
        </Item>
        <Item>
          <Label as="span">Страховка на случай отказа:</Label>
          <Value>90 руб.</Value>
        </Item>
      </List>
      <Rejection>Отказаться от страхования платежа</Rejection>
      <Total>
        <span>Итоговая сумма:</span>
        <b>1300 руб.</b>
      </Total>
      <PaymentMethods as="div">
        <span>Доступные способы оплаты:</span>
        <ul>
          <li>
            <Picture png={VisaPng} webp={VisaWebp} />
          </li>
          <li>
            <Picture png={MastercardPng} webp={MastercardWebp} />
          </li>
          <li>
            <Picture png={MirPng} webp={MirWebp} />
          </li>
        </ul>
      </PaymentMethods>
      <Button onClick={nextStep} $theme="general">
        Перейти к оплате
      </Button>
      <Descr>Вы перейдете на наш сервис оплаты</Descr>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  border: 0.0625rem solid ${$primary};
  border-radius: 1.5rem;
  background: ${$primary10};
  padding: 2rem;
  max-width: 21.88rem;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled(H4)`
  margin-bottom: 0.75rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    margin-bottom: 0.75rem;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled(P2)`
  color: ${$white50};
`;

const Value = styled(P2)`
  color: ${$primary};
`;

const Rejection = styled.div`
  cursor: pointer;
  color: ${$white50};
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0%;
  text-align: left;
  text-decoration-line: underline;
  transition: color 0.3s;
  &:hover {
    color: ${$white100};
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  span {
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0%;
  }
  b {
    color: ${$primary};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0%;
  }
`;

const PaymentMethods = styled(P1)`
  margin-bottom: 2rem;
  span {
    margin-bottom: 0.25rem;
    color: ${$white50};
  }
  ul {
    display: flex;
    li {
      img {
        width: 2rem;
        height: 2rem;
      }
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }
`;

const Descr = styled(P3)`
  color: ${$white50};
  margin-top: 0.75rem;
  text-align: center;
`;
