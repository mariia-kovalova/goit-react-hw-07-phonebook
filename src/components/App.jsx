import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { MainTitle } from './GlobalStyles.styled';

export const App = () => (
  <main>
    <MainTitle>Phonebook</MainTitle>
    <Section>
      <ContactForm />
    </Section>
    <Section title="Contacts">
      <Filter />
      <ContactList />
    </Section>
  </main>
);
