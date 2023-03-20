import { useSelector } from 'react-redux';
import {
  selectContactsItems,
  selectContactsIsLoading,
  selectContactsError,
  selectFilter,
} from 'redux/selectors';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

const filterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  const regExp = new RegExp(normalizedFilter, 'gi');
  return contacts.filter(({ name }) => name.toLocaleLowerCase().match(regExp));
};

export const ContactList = () => {
  const contacts = useSelector(selectContactsItems);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <Error>Sorry, something went wrong.</Error>}
      {!isLoading && !error && filteredContacts > 0 && (
        <List>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
