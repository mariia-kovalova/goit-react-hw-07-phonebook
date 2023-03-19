import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  const regExp = new RegExp(normalizedFilter, 'gi');
  return contacts.filter(({ name }) => name.toLocaleLowerCase().match(regExp));
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
