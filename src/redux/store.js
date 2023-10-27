import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phoneBookSlice';

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
  },
});
