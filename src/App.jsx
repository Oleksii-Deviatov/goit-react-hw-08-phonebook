import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as operations from './redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { getLoading } from './redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import styles from './styles.module.css';

function App({ fetchContacts, getLoading }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h2" align="center">
          Phonebook
        </Typography>

        {getLoading && (
          <Loader
            className={styles.loader}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        )}

        <ContactForm />

        <Typography variant="h4" align="center">
          Contacts
        </Typography>

        <Filter />

        <ContactList />
      </Container>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(operations.fetchContacts()),
  };
};

const mapStateToProps = state => ({
  getLoading: getLoading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
