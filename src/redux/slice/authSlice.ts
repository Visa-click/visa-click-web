import { createSlice } from '@reduxjs/toolkit';
import { isString } from '@bunt/is';
import { authAPI } from '../service/authService';

interface AuthState {
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken'),
  isAuth: isString(localStorage.getItem('accessToken')),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
      state.isAuth = true;
    },

    logout: (state) => {
      localStorage.removeItem('accessToken');
      state.accessToken = null;

      authAPI.util.resetApiState();
    },
  },
});

export const { logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
