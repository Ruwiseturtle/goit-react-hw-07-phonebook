import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filter: '',
  name: '',
  number: '',
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const phoneBookSlice = createSlice({
  name: 'contactBook',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  changeFilter,
  setFilter,
  setName,
  setNumber,
} = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
