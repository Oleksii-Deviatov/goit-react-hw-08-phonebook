import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as operations from './redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { getLoading } from './redux/contacts/contacts-selectors';
import Spinner from './components/RegisterPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import { React, lazy, Suspense } from 'react';

const RegisterPage = lazy(() =>
  import('./components/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);

const LoginPage = lazy(() =>
  import('./components/LoginPage' /* webpackChunkName: "LoginPage" */),
);

function App({ fetchContacts, getLoading }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Container maxWidth="xs">
          <NavBar></NavBar>

          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Redirect to="/" />
          </Switch>

          <Typography variant="h2" align="center">
            Phonebook
          </Typography>

          {getLoading && <Spinner />}

          <ContactForm />

          <Typography variant="h4" align="center">
            Contacts
          </Typography>

          <Filter />

          <ContactList />
        </Container>
      </Suspense>
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
