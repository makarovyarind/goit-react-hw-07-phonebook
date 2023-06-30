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

