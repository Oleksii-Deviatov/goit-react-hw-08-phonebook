import { Typography, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import * as authOperations from './redux/auth/auth-operations';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { React, lazy, Suspense } from 'react';
import NavBar from './components/NavigationBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const StartPage = lazy(() =>
  import('./components/StartPage' /* webpackChunkName: "StartPage" */),
);

const HomePage = lazy(() =>
  import('./components/Home' /* webpackChunkName: "HomePage" */),
);

const RegisterPage = lazy(() =>
  import('./components/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);

const LoginPage = lazy(() =>
  import('./components/LoginPage' /* webpackChunkName: "LoginPage" */),
);

function App({ onGetCurrentUser }) {
  useEffect(() => {
    onGetCurrentUser();
  }, []);

  return (
    <>
      <Container maxWidth="xs">
        <Suspense fallback={null}>
          <NavBar></NavBar>

          <Typography align="center" variant="h2">
            Phonebook
          </Typography>

          <Switch>
            <PublicRoute
              exact
              path="/"
              restricted
              redirectTo="/home"
              component={StartPage}
            />

            <PublicRoute
              path="/register"
              restricted
              redirectTo="/home"
              component={RegisterPage}
            />

            <PublicRoute
              path="/login"
              restricted
              redirectTo="/home"
              component={LoginPage}
            />

            <PrivateRoute
              path="/home"
              redirectTo="/login"
              component={HomePage}
            />

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
