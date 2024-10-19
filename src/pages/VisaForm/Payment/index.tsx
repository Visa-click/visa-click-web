import { FC } from 'react';
import { Head } from '../com/Head';
import { PaymentInfo } from './PaymentInfo';

export const Payment: FC = () => {
  return (
    <>
      <Head
        step={3}
        title="Оплатите госпошлину"
        descr={
          <>
            Посольство Южной Кореи берет госпошлину
            <br />
            за оформление заявки на получение визы
          </>
        }
      />
      <PaymentInfo />
    </>
  );
};
