import { combineReducers, configureStore } from '@reduxjs/toolkit/react';
import { useDispatch } from 'react-redux';
import notifications from './slice/notificationsSlice';
import auth from './slice/authSlice';
import { authAPI } from './service/authService';

const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  notifications,
  auth,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
