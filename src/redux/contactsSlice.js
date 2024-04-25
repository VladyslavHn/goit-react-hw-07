import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const contactsSlice = createSlice({
 name: "contacts",

   initialState: {
      items: [],
      loading: false,
      error: null,
   },

   extraReducers: (builder) => {
      builder
         .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchContacts.fulfilled, (state, action) => { 
            state.loading = false;
            state.error = null;
            state.items = action.payload;
         })
         .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload)
         })
         .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
         })
         .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
      })
   
 },
});

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter.trim() === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
);

export const contactsReducer = contactsSlice.reducer;


