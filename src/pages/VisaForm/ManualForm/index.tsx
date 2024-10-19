import { FC } from 'react';
import { IconPassport } from '@components/icons';
import { Head } from '../com/Head';
import { Form } from './Form';

export const ManualForm: FC = () => {
  return (
    <>
      <Head
        step={2}
        title="Проверьте ваши данные"
        descr={
          <>
            Во избежании ошибок при сканировании данных, <br /> пожалуйста проверьте их
          </>
        }
        imageNode={{
          label: 'Загруженный документ:',
          node: <IconPassport />,
        }}
      />
      <Form />
    </>
  );
};
