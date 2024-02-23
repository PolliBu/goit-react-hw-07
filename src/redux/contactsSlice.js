import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id,
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

//  items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer(state, { payload }) {
//         state.items.push(payload);
//       },
//       prepare(payload) {
//         const id = nanoid();
//         return { payload: { id, ...payload } };
//       },
//     },

//     deleteContact(state, { payload }) {
//       state.items = state.items.filter(contact => contact.id !== payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// ADD

// reducer(state, action) {
// return [...state.items, action.payload];

// const addContact = newContact => {
//   setContacts(prevContacts => {
//     return [...prevContacts, newContact];
//   });
// };

// DELETE

// deleteContact(state, action) {
//   return state.items.filter(contact => contact.id !== action.payload);
// },

// const deleteContact = contactId => {
//   setContacts(prevContacts => {
//     return prevContacts.filter(contact => contact.id !== contactId);
//   });
// };
