import { useSelector } from 'react-redux';
import { Container } from "./Container/Container";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length === 0 ? (
      <p>Your phonebook is empty. Please add a contact.</p>
    ) : (
      <ContactList />
    )}
    </Container>
  );
}
