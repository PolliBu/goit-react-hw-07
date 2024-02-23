import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getContactsFilter } from '../../redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

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
