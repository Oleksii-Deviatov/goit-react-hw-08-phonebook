const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getError = state => state.auth.error;

export { getIsAuthenticated, getUsername, getError };
