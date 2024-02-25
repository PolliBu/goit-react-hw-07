import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsFilter } from '../../redux/selectors';

const selectFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = selectFilteredContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
