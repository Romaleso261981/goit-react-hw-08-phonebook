import { createSlice } from '@reduxjs/toolkit';
import {
  registrationUser,
  loginUser,
  logoutUser,
  currentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  loading: false,
  isLoadingUser: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrationUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [registrationUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [registrationUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logoutUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: state => {
      state.loading = false;
      state.user = {};
      state.token = '';
      state.isLogin = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [currentUser.pending]: state => {
      state.isLoadingUser = true;
      state.error = null;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.user = payload;
      state.isLogin = true;
    },
    [currentUser.rejected]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
