import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isAuth: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      return { ...state, isAuth: true, ...action };
    },
    [logIn.fulfilled](state, action) {
      return { ...state, isAuth: true, ...action };
    },
    [logOut.fulfilled](state) {
      return { ...state, isAuth: false, isRefreshing: false };
    },
    [refreshUser.pending](state) {
      console.log('refreshUser.pending');
      return {
        ...state,
        isRefreshing: false,
      };
    },
    [refreshUser.fulfilled](state, action) {
      console.log('refreshUser.fulfilled');
      return { ...state, isAuth: true, ...action };
    },
    [refreshUser.rejected](state) {
      console.log('refreshUser.rejected');
      return {
        ...state,
        isRefreshing: false,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
