import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { RoutePrefix } from '@utils/routes';
import { Redirect } from './Redirect';

export const ProtectedAuthRoute: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  if (isAuth) {
    return <Redirect uri={RoutePrefix.VISA} replace />;
  }

  return <Outlet />;
};
