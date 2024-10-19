import { Button, Input, InputField } from '@components/form';
import styled from '@emotion/styled';
import { $phoneWidth } from '@styled/helpers';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import useNotifications from '@hooks/useNotifications';
import { TVisaForm, useVisaContext } from '../VisaProvider';

const genders = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' },
];

export const Form: FC = () => {
  const form = useForm<TVisaForm>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const { notify } = useNotifications();
  const { nextStep, prevStep } = useVisaContext();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      nextStep();
    } catch (error) {
      console.log(error);
      notify('Ошибка авторизации', 'error');
    }
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Col>
        <InputField
          label="ФИО:"
          error={errors.surname?.message || errors.name?.message || errors.patronymic?.message}>
          <Group>
            <Controller
              name="surname"
              control={control}
              rules={{
                required: "Поле 'Фамилия' обязательно",
                minLength: { value: 2, message: 'Минимальная длина - 2 символа' },
              }}
              render={({ field }) => <Input {...field} />}
            />
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Поле 'Имя' обязательно",
                minLength: { value: 2, message: 'Минимальная длина - 2 символа' },
              }}
              render={({ field }) => <Input {...field} />}
            />
            <Controller
              name="patronymic"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Group>
        </InputField>
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Поле 'Пол' обязательно" }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <InputField label="Пол:" error={error?.message}>
              <Genders>
                {genders.map((gender) => (
                  <Button
                    key={gender.value}
                    type="button"
                    onClick={() => onChange(gender.value)}
                    $theme={value === gender.value ? 'general' : 'block'}>
                    {gender.label}
                  </Button>
                ))}
              </Genders>
            </InputField>
          )}
        />
        <InputField label="Дата рождения:" error={errors.birthDate?.message}>
          <Controller
            name="birthDate"
            control={control}
            rules={{
              required: "Поле 'Дата рождения' обязательно",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: 'Дата должна быть в формате ГГГГ-ММ-ДД',
              },
            }}
            render={({ field }) => (
              <MyInputMask
                mask="9999-99-99"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </InputField>
      </Col>
      <Col>
        <InputField label="Тип:" error={errors.type?.message}>
          <Controller
            name="type"
            control={control}
            rules={{ required: "Поле 'Тип' обязательно" }}
            render={({ field }) => <Input {...field} />}
          />
        </InputField>
        <InputField label="Номер паспорта:" error={errors.passportNumber?.message}>
          <Controller
            name="passportNumber"
            control={control}
            rules={{
              required: "Поле 'Номер паспорта' обязательно",
              minLength: { value: 6, message: 'Минимальная длина - 6 символов' },
              maxLength: { value: 9, message: 'Максимальная длина - 9 символов' },
            }}
            render={({ field }) => <Input {...field} />}
          />
        </InputField>
        <InputField label="Гражданство:" error={errors.citizenship?.message}>
          <Controller
            name="citizenship"
            control={control}
            rules={{ required: "Поле 'Гражданство' обязательно" }}
            render={({ field }) => <Input {...field} />}
          />
        </InputField>
        <InputField label="Место рождения:" error={errors.placeOfBirth?.message}>
          <Controller
            name="placeOfBirth"
            control={control}
            rules={{ required: "Поле 'Место рождения' обязательно" }}
            render={({ field }) => <Input {...field} />}
          />
        </InputField>
      </Col>
      <Col>
        <InputField label="Дата выдачи:" error={errors.issueDate?.message}>
          <Controller
            name="issueDate"
            control={control}
            rules={{
              required: "Поле 'Дата выдачи' обязательно",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: 'Дата должна быть в формате ГГГГ-ММ-ДД',
              },
            }}
            render={({ field }) => (
              <MyInputMask
                mask="9999-99-99"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </InputField>
        <InputField label="Дата окончания срока действия:" error={errors.expiryDate?.message}>
          <Controller
            name="expiryDate"
            control={control}
            rules={{
              required: "Поле 'Дата окончания срока действия' обязательно",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: 'Дата должна быть в формате ГГГГ-ММ-ДД',
              },
            }}
            render={({ field }) => (
              <MyInputMask
                mask="9999-99-99"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </InputField>
        <InputField label="Орган выдавший документ:" error={errors.issuingAuthority?.message}>
          <Controller
            name="issuingAuthority"
            control={control}
            rules={{ required: "Поле 'Орган выдавший документ' обязательно" }}
            render={({ field }) => <Input {...field} />}
          />
        </InputField>
      </Col>
      <Btns>
        <Button onClick={prevStep} $fitContent type="button" $theme="block">
          Загрузить документ заново
        </Button>
        <Button $fitContent $theme="general">
          Все верно, продолжить
        </Button>
      </Btns>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: grid;
  align-content: baseline;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const Group = styled.div`
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Btns = styled.div`
  display: flex;
  grid-column: span 3;
  > *:not(:last-child) {
    margin-right: 0.75rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    grid-column: auto;
    flex-direction: column;
    > * {
      width: 100% !important;
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.75rem;
      }
    }
  }
`;

const Genders = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const MyInputMask = Input.withComponent(InputMask);
