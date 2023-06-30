import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk, addContactThunk, deleteContactThunk } from './thunks';

const handlePending = (state) => {
  state.contacts.isLoading = true
};

const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false
  state.contacts.items = payload
  state.contacts.error = ''
};

const handleError = (state, { payload }) => {
  state.contacts.isLoading = false
  state.contacts.error = payload
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      setFilter: (state, { payload }) => {
          state.filter = payload
      }
    },
    extraReducers: (builder) =>  {
      builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleError)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.rejected, handleError)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilled)
      .addCase(deleteContactThunk.rejected, handleError);
    }
  });

  export const { setFilter } = contactsSlice.actions;

  export const contactsReducer = contactsSlice.reducer;