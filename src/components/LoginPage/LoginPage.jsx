import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as operations from '../../redux/auth/auth-operations';
import { toast } from 'react-toastify';
import { getError } from '../../redux/auth/auth-selectors';

function LoginPage({ onLogin }) {
  const [inputEmain, setInputEmain] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function inputNumberHendler({ target: { value } }) {
    setInputEmain(value);
  }

  function inputPasswordHendler({ target: { value } }) {
    setInputPassword(value);
  }

  function submitHendler(e) {
    e.preventDefault();

    const userData = {
      email: inputEmain,
      password: inputPassword,
    };

    onLogin(userData);
  }

  return (
    <form onSubmit={submitHendler} autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          label="E-Mail"
          value={inputEmain}
          onChange={inputNumberHendler}
          margin="dense"
          required
        />
        <TextField
          label="PassWord"
          value={inputPassword}
          onChange={inputPasswordHendler}
          type="password"
          margin="dense"
          required
        />
        <Button variant="outlined" type="submit" color="primary">
          Login
        </Button>
      </Box>
    </form>
  );
}

const mapDispatchToProps = {
  onLogin: operations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
