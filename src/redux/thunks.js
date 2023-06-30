import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from '../api/api';

export const getContactsThunk = createAsyncThunk(
    'contacts/getAllContacts',
    () => {
       return getContacts();
    });

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact) => {
      const response = await addContact(contact);
      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error('Failed to add contact');
      }
    });

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id) => {
      const response = await deleteContact(id);
      if (response.status === 200) {
        return id;
      } else {
        throw new Error('Failed to delete contact');
      }
    });