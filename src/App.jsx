// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/HomeView/HomeView';
import FormPage from './components/RegisterView/RegisterView';
import AppBar from './components/HomeView/HomeView';
import AppBar from './components/HomeView/HomeView';

// const HomeView = lazy(() => import(''));
// const RegisterView = lazy(() => import(''));
// const LoginView = lazy(() => import(''));
// const ContactListView = lazy(() => import(''));

export default function App() {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return true ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <AppBar />
    </>
  );
}
