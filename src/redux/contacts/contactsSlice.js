import { createSlice } from '@reduxjs/toolkit';
import { getContactList } from './contactsOperations';
import { createContact } from './contactsOperations';
import { removeContact } from './contactsOperations';

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
    [getContactList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getContactList.rejected]: handleRejected,
    [createContact.pending]: handlePending,
    [createContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [createContact.rejected]: handleRejected,
    [removeContact.pending]: handlePending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [removeContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
