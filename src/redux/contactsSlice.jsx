import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      const isDuplicate = state.items.some(
        contact => contact.name === action.payload.name
      );
      if (!isDuplicate) {
        state.items.push(action.payload);
      } else {
        alert('Contact with this name already exists!');
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;
