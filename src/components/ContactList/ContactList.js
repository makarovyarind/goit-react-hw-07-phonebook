import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from '../../redux/thunks';
import { useEffect } from 'react';

export function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  console.log(contacts);
  const filterName = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = async (id) => {
    await dispatch(deleteContactThunk(id));
    await dispatch(getContactsThunk());
  };

  const filteredContacts = (contacts, filterName) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase()),
    );
  };

  // const newContacts = filteredContacts(contacts, filterName);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredContacts(contacts, filterName).map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.contact}>
            {name}: {number}
          </p>
          <button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}