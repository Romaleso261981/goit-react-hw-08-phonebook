import { createReducer } from '@reduxjs/toolkit';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import {
  registrationUser,
  loginUser,
  currentUser,
  logoutUser,
} from './operations';

// import { Report } from 'notiflix/build/notiflix-report-aio';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isAuth: false,
  isRegister: false,
  isLoggedIn: true,
  contactfilter: '',
};

export const userReducer = createReducer(initialState, {
  [registrationUser.pending]: (_, { payload }) => {
    Loading.pulse();
  },
  [registrationUser.fulfilled]: (state, { payload }) => {
    Loading.remove();
    return { ...state, isRegister: true, ...payload };
  },
  [registrationUser.rejected]: (_, { payload }) => {
    Loading.remove();
  },
  [loginUser.pending]: (state, { payload }) => {
    console.log(loginUser.pending);
    Loading.pulse();
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    console.log(state.isAuth);
    Loading.remove();
    return { ...state, isAuth: true, ...payload };
  },
  [loginUser.rejected]: (state, { payload }) => {
    Loading.remove();
  },

  [currentUser.pending]: (state, { payload }) => {
    Loading.pulse();
  },
  [currentUser.fulfilled]: (state, { payload }) => {
    Loading.remove();
    return { ...state, isAuth: true, user: { ...payload } };
  },
  [currentUser.rejected]: (state, { payload }) => {
    Loading.remove();
  },

  [logoutUser.pending]: (state, { payload }) => {
    console.log('logoutUser.pending');
    Loading.pulse();
  },
  [logoutUser.fulfilled]: (state, { payload }) => {
    Loading.remove();
    console.log('logoutUser.fulfilled');
    return { ...state, isAuth: false, isRegister: false };
  },
  [logoutUser.rejected]: (state, { payload }) => {
    Loading.remove();
  },
});
