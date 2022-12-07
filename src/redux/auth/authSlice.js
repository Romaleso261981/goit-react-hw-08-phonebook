import { createSlice } from '@reduxjs/toolkit';
import {
  registrationUser,
  loginUser,
  logoutUser,
  currentUser,
} from './authOperations';

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const handlePending = state => {
  state.isLoading = true;
};

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
    [registrationUser.pending]: handlePending,
    [loginUser.pending]: handlePending,
    [logoutUser.pending]: handlePending,
    [currentUser.pending]: handlePending,
    [registrationUser.rejected]: handleRejected,
    [loginUser.rejected]: handleRejected,
    [logoutUser.rejected]: handleRejected,
    [currentUser.rejected]: handleRejected,
    [registrationUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [logoutUser.fulfilled]: state => {
      state.loading = false;
      state.user = {};
      state.token = '';
      state.isLogin = false;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.user = payload;
      state.isLogin = true;
    },
  },
});

export default authSlice.reducer;
