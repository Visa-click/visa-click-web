import { type FC } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '@redux/store';
import { NotificationsList } from '@components/notify';
import { GlobalStyles } from '@styled/GlobalStyles';
import { ErrorBoundary } from '@components/error';
import { isReactSnap } from '@components/fn';
import { SelectRoute } from './Route/SelectRoute';

export const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route path="*" element={<SelectRoute />} />
    </Route>,
  ),
);

const Application: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <RouterProvider router={router} />
        {!isReactSnap && <NotificationsList />}
      </Provider>
    </>
  );
};

export default Application;
