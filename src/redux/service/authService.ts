import { createApi } from '@reduxjs/toolkit/query/react';
import { IAuthResponse, ILoginRequest, IRegisterRequest } from '@interfaces/auth';
import { baseQueryWithReauth } from '../baseQueryWithReauth';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    register: build.mutation<IAuthResponse, IRegisterRequest>({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: build.mutation<IAuthResponse, ILoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});
