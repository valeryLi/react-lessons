import contactsReducer from './contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/filterSlice';
import authReducer from './auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { selectToken } from './auth/auth-selectors';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export const persistor = persistReducer;
