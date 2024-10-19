import { SuccessPng, SuccessWebp } from '@assets/img/payments';
import { Button } from '@components/form';
import { Picture } from '@components/image';
import { NavigateClick } from '@components/route';
import styled from '@emotion/styled';
import { H4, P1 } from '@styled/com/Text';
import { $white50 } from '@styled/helpers';
import { RoutePrefix } from '@utils/routes';
import { FC } from 'react';

export const PaymentSuccess: FC = () => {
  return (
    <Wrapper>
      <Image>
        <Picture png={SuccessPng} webp={SuccessWebp} />
      </Image>
      <Title>Оплата прошла успешно!</Title>
      <Descr>
        Большое спасибо за ваш заказ! <br />
        Информация со статусом подачи заявления будет отправлена на вашу почту.
      </Descr>
      <NavigateClick to={RoutePrefix.MAIN}>
        <Button $theme="general" $fitContent>
          Отлично
        </Button>
      </NavigateClick>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  margin: auto 0;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.25rem;
  img {
    width: 11.88rem;
    height: 11.88rem;
  }
`;

const Title = styled(H4)`
  margin-bottom: 0.75rem;
`;

const Descr = styled(P1)`
  color: ${$white50};
  margin-bottom: 2.25rem;
`;
