import React from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import * as operations from '../../redux/auth/auth-operations';

function NavigationBar({ isAuthenticated, onLogout }) {
  return (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      {isAuthenticated && (
        <NavLink to="/home" onClick={onLogout}>
          Logout
        </NavLink>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogout: operations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
