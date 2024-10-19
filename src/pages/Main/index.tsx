import { HelmetHead } from '@components/seo';
import { FC } from 'react';
import { Offer } from './Offer';
import { HowWork } from './HowWork';
import { Benefits } from './Benefits';
import { Trust } from './Trust';
import { Feedback } from './Feedback';

const Main: FC = () => {
  return (
    <>
      <HelmetHead
        title="Виза в Южную Корею"
        descr="Сервис для оформления визы в Южную Корею всего за 490 рублей"
      />
      <Offer />
      <HowWork />
      <Benefits />
      <Trust />
      <Feedback />
    </>
  );
};

export default Main;
