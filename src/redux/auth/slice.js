import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      console.log(action.payload.user);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRegister = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
      state.isRegister = false;
    },
    [refreshUser.pending](state) {},
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLogin = true;
      state.isRegister = true;
    },
    [refreshUser.rejected](state) {},
  },
});

export const authReducer = authSlice.reducer;
