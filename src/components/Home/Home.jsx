import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from '@material-ui/core';
import Title from '../Title';

function Home() {
  return (
    <>
      <Container maxWidth="xs">
        <ContactForm />

        <Title title="Contacts" variant="h4" />

        <Filter />

        <ContactList />
      </Container>
    </>
  );
}

export default Home;
