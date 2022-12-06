import { createSlice } from '@reduxjs/toolkit';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getContactList, createContact, removeContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (_, { payload }) => {
      return payload;
    },
  },
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContactList.pending]: handlePending,
    [createContact.pending]: handlePending,
    [removeContact.pending]: handlePending,
    [getContactList.rejected]: handleRejected,
    [createContact.rejected]: handleRejected,
    [removeContact.rejected]: handleRejected,
    [getContactList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [createContact.fulfilled](state, action) {
      state.error = null;
      state.items.push(action.payload);
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
