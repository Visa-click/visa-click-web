import { OverflowWrapper } from '@components/animation';
import { Button, Input, InputField, Switcher } from '@components/form';
import styled from '@emotion/styled';
import useNotifications from '@hooks/useNotifications';
import { setAccessToken } from '@redux/slice/authSlice';
import { RootState, useAppDispatch } from '@redux/store';
import { RoutePrefix } from '@utils/routes';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: 'Вход', value: 'login' },
  { label: 'Регистрация', value: 'register' },
];

type TForm = {
  email: string;
  password: string;
  repeatPassword?: string;
};

export const AuthForm: FC = () => {
  const [authType, setAuthType] = useState<string>('login');
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { notify } = useNotifications();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForm>();

  const password = watch('password');

  const onSubmit = handleSubmit(async (data) => {
    //@TODO Передать accessToken авторизации
    try {
      if (authType === 'register') {
        dispatch(setAccessToken(data.password));
        navigate(RoutePrefix.VISA);
      } else {
        dispatch(setAccessToken(data.password));
        navigate(RoutePrefix.VISA);
      }
    } catch (error) {
      console.log(error);
      notify('Ошибка авторизации', 'error');
    }
  });

  useEffect(() => {
    if (isAuth) {
      navigate(RoutePrefix.MAIN);
    }
  }, [isAuth]);

  return (
    <Wrapper onSubmit={onSubmit}>
      <Switcher onChange={setAuthType} options={options} value={authType} />
      <Fields>
        <InputField label="Введите вашу почту:" error={errors.email?.message}>
          <Input
            {...register('email', {
              required: "Поле 'Почта' обязательно",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email',
              },
            })}
            placeholder="example@e-mail.ru"
          />
        </InputField>
        <InputField label="Введите ваш пароль:" error={errors.password?.message}>
          <Input
            {...register('password', {
              required: "Поле 'Пароль' обязательно",
              minLength: {
                value: 6,
                message: 'Пароль должен быть минимум 6 символов',
              },
            })}
            type="password"
            placeholder="********"
          />
        </InputField>
        <OverflowWrapper open={authType === 'register'}>
          <i />
          <InputField label="Повторите ваш пароль:" error={errors.repeatPassword?.message}>
            <Input
              {...register('repeatPassword', {
                required: authType === 'register' ? "Поле 'Повтор пароля' обязательно" : false,
                validate: (value) =>
                  authType === 'register' ? value === password || 'Пароли не совпадают' : true,
              })}
              type="password"
              placeholder="********"
            />
          </InputField>
        </OverflowWrapper>
      </Fields>
      <Button $theme="general">
        {authType === 'register' ? 'Создать аккаунт' : 'Войти в аккаунт'}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Fields = styled.div`
  margin: 2rem 0 1.5rem;
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;
