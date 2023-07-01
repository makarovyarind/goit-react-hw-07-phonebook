 import axios from "axios";

 export const getContacts = async () => {
     const { data } = await axios ('https://649a8f8abf7c145d0239059f.mockapi.io/contacts')
    return data
  };

  export const addContact = async (contact) => {
     const { data } = await axios.post('https://649a8f8abf7c145d0239059f.mockapi.io/contacts', contact);
     return data;
   };

  export const deleteContact = async (id) => {
      const { data } = await axios.delete(`https://649a8f8abf7c145d0239059f.mockapi.io/contacts/${id}`);
      return data;
    };

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://649a8f8abf7c145d0239059f.mockapi.io/',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: (builder) => ({
//     getContacts: builder.query({
//       query: () => 'contacts',
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//        query: (contact) => ({
//          url: 'contacts',
//          method: 'POST',
//          body: contact,
//        }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: (id) => ({
//         url: `contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//    }),
//  });

// export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;



