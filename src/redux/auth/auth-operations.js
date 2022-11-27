import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://lpj-tasker.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
      const { data } = await axios.post('/user/signup', credentials);
      return data
  } catch (error) {
      
  }
});



const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await axios.post('/user/login', credentials)
    } catch (error) {
        
    }
})