import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../services/API.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const registrationUser = createAsyncThunk(
  'user/registrationUser',
  async (userData, thunkAPI) => {
    try {
      Loading.pulse();
      const data = await API.signupUser(userData);
      Loading.remove();
      return data;
    } catch (error) {
      Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, thunkAPI) => {
    try {
      Loading.pulse();
      const data = await API.loginUser(userData);
      Loading.remove();
      return data;
    } catch (error) {
      Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'user/currentUser',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }
    try {
      Loading.pulse();
      const data = await API.currentUser(token);
      Loading.remove();
      return data;
    } catch (error) {
      Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      Loading.pulse();
      const token = thunkAPI.getState().auth.token;
      const data = await API.logoutUser(token);
      Loading.remove();
      return data;
    } catch (error) {
      Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
