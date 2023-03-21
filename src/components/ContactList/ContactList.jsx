import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsIsLoading,
  selectContactsError,
  selectFilteresContacts,
  selectFilter,
} from 'redux/selectors';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const contacts = useSelector(selectFilteresContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isOk = !isLoading && !error;
  const showError = !isLoading && error;
  const empty = isOk && filter === '' && contacts.length === 0;
  const noMatches = isOk && filter !== '' && contacts.length === 0;
  const showList = isOk && contacts.length !== 0;

  return (
    <>
      {isLoading && <Loader open={isLoading} />}
      {showError && <Error>Sorry, something went wrong.</Error>}
      {empty && <Error>Your contacts list is empty.</Error>}
      {noMatches && <Error>Sorry, there is no such contacs</Error>}
      {showList && (
        <List>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
