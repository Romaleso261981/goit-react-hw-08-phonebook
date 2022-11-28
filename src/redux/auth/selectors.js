export const selectUser = state => state.contacts.items;

export const selectIsLoggedIn = state => state.contacts.filter;

export const selectIsRefreshing = state => state.contacts.isLoading;

