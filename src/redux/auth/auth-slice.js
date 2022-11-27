import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, number: null },
  token: null,
  isLoggedIn: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            
      }
  },
});

export default authSlise.reducer;
