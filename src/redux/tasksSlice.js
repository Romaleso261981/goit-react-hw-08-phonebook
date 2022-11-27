// import { createSlice} from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = true;
//   state.error = action.payload;
// };


// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//     isLoading: false,
//     error: null,
//   },
  
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filteredContacts(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchContact.pending]: handlePending,
//     [deleteContactApi.pending]: handlePending,
//     [addContactApi.pending]: handlePending,
//     [fetchContact.rejected]: handleRejected,
//     [deleteContactApi.rejected]: handleRejected,
//     [addContactApi.rejected]: handleRejected,
//     [fetchContact.fulfilled]: (state, action) => {
//       state.status = 'resolved';
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addContactApi.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [deleteContactApi.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedAddContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
