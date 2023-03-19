import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button';
import { Form, Wrap } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isInContacts = contacts.find(contact => contact.name === name);
    if (isInContacts) return alert(`${name} is aready in contacts.`);
    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrap>
        <label htmlFor={nameInputId}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Wrap>
      <Wrap>
        <label htmlFor={numberInputId}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Wrap>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
