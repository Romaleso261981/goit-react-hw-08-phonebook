export const selectContacts = state => state.contacts.items;
export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;
export const selectIsLogin = state => state.auth.isLogin;
export const selectFilterdContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLocaleLowerCase();
  const filterdContacts = contacts.items.filter(({ name, number }) => {
    const normalizedName = name.toLocaleLowerCase();
    const normalizedNumber = number.toLocaleLowerCase();
    const result =
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter);
    return result;
  });

  return filterdContacts;
};
