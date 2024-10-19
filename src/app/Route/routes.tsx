import { Pages } from '@pages/index';
import { RoutePrefix } from '@utils/routes';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: RoutePrefix.MAIN, component: <Pages.Main /> },
  { path: RoutePrefix.POLICY, component: <Pages.Policy /> },
  //...
  { path: RoutePrefix.NOT_FOUND, component: <Pages.NotFound /> },
  { path: '*', component: <Pages.NotFound /> },
];

export const authRoutes: RouteType[] = [{ path: RoutePrefix.AUTH, component: <Pages.Auth /> }];

export const privateRoutes: RouteType[] = [
  { path: RoutePrefix.VISA, component: <Pages.VisaForm /> },
];
