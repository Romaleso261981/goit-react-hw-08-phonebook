import { getContactList } from './contactsOperations';
import { createContact } from './contactsOperations';
import { removeContact } from './contactsOperations';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

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
      state.isLoading = false;
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

export const contactsReducer = contactsSlice.reducer;
