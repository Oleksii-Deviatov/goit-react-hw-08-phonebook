import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, Typography } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

function Home() {
  return (
    <>
      <Container maxWidth="xs">
        <ContactForm />

        <Typography align="center" variant="h4">
          Contacts
        </Typography>
        <Filter />

        <ContactList />
      </Container>
      <ToastContainer />
    </>
  );
}

export default Home;
