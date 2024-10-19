import { FC } from 'react';
import { IconPassport } from '@components/icons';
import { Head } from '../com/Head';
import { DragAndDrop } from './DragAndDrop';
import { Buttons } from './Buttons';

export const Scanning: FC = () => {
  return (
    <>
      <Head
        step={1}
        title={
          <>
            Загрузите фотографию <br />
            вашего заграничного паспорта
          </>
        }
        descr={
          <>
            Мы обработаем данные вашего паспорта,
            <br />
            чтобы вам было легче продолжить заполнение заявки
          </>
        }
        imageNode={{
          label: 'Схема размещения паспорта на фото:',
          node: <IconPassport />,
        }}
      />
      <DragAndDrop />
      <Buttons />
    </>
  );
};
