import { createReducer } from '@reduxjs/toolkit';
import {
  registrationUser,
  loginUser,
  currentUser,
  logoutUser,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isAuth: false,
};

export const userReducer = createReducer(initialState, {
  [registrationUser.fulfilled]: (state, { payload }) => {
    return { ...state, isAuth: true, ...payload };
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    return { ...state, isAuth: true, ...payload };
  },
  [currentUser.fulfilled]: (state, { payload }) => {
    return { ...state, isAuth: true, user: { ...payload } };
  },
  [logoutUser.fulfilled]: (state, { payload }) => {
    return { ...state, ...initialState };
  },
});
