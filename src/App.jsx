// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RegisterView from './pages/RegisterView/RegisterView';
import LoginView from './pages/LoginView/LoginView';
// import ContactListView from './pages/ContactListView/';
// import HomeView from './pages/HomeView/';

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

  return false ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        {/* <Route exact path='/' component={ HomeView } /> */}
        <Route exact path='/register' component={ RegisterView } />
        <Route exact path='/login' component={ LoginView } />
        {/* <Route exact path='/contacts' component={ ContactListView } /> */}
    </Routes>
  );
}
