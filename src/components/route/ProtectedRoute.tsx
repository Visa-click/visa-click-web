import { Outlet, useLocation } from 'react-router-dom';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { isNull } from '@bunt/is';
import { RoutePrefix } from '@utils/routes';
import { Redirect } from './Redirect';

export const ProtectedRoute: FC = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (isNull(accessToken)) {
    console.log(1);

    localStorage.setItem('authPathname', location.pathname);
    return <Redirect uri={RoutePrefix.AUTH} replace />;
  }
  return <Outlet />;
};
