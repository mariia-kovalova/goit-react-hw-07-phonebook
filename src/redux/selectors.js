import { createSelector } from '@reduxjs/toolkit';

export const selectContactsItems = state => state.contacts.items;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectFilter = state => state.filter.value;

export const selectFilteresContacts = createSelector(
  [selectContactsItems, selectFilter],
  (contacts, filter) => {
    if (filter === '') return contacts;
    const normalizedFilter = filter.toLocaleLowerCase();
    const regExp = new RegExp(normalizedFilter, 'gi');
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().match(regExp)
    );
  }
);
