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

const handleDeleteContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter((contact) => contact.id !== payload);
  state.contacts.error = '';
};

const handleAddContactsFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false
  state.items.push(payload);
  state.contacts.error = ''
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
      .addCase(addContactThunk.fulfilled, handleAddContactsFulfilled)
      .addCase(addContactThunk.rejected, handleError)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContactThunk.rejected, handleError);
    }
  });

  export const { setFilter } = contactsSlice.actions;

  export const contactsReducer = contactsSlice.reducer;