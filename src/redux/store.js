import contactsReducer from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
