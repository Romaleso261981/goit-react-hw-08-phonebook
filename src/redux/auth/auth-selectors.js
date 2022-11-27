const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getIsloggedIn = state => state.contacts.isLoading;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getItems,
  getFilter,
  getIsloggedIn,
  getUsername,
};
export default authSelectors;
