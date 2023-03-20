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
  if (filter === '') return contacts;
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

  const showError = !isLoading && error;
  const isOk = !isLoading && !error;
  const empty = isOk && contacts.length === 0;
  const noMatches = isOk && filter !== '' && filteredContacts.length === 0;
  const showContactsList = isOk && filteredContacts.length !== 0;

  return (
    <>
      {isLoading && <Loader open={isLoading} />}
      {showError && <Error>Sorry, something went wrong.</Error>}
      {empty && <Error>Your contacts list is empty.</Error>}
      {noMatches && <Error>Sorry, there is no such contacs</Error>}
      {showContactsList && (
        <List>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
