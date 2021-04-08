import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: contactsReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
