// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { Route, Routes} from 'react-router-dom';
import RegisterView from './pages/RegisterView/RegisterView';
import LoginView from './pages/LoginView/LoginView';
import {HomeView} from './pages/HomeView/HomeView';
import {Layout} from './components/Layout/Layout';
import {Container} from './components/Container/Container';
import {NotFound} from './pages/NotFound/NotFound';
// import ContactListView from './pages/ContactListView/';
// import HomeView from './pages/HomeView/';

// const HomeView = lazy(() => import(''));
// const RegisterView = lazy(() => import(''));
// const LoginView = lazy(() => import(''));
// const ContactListView = lazy(() => import(''));

export default function App() {
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Container>
        <Layout/>
      <Routes>
        <Route index path="/" element={<HomeView />} />
        <Route path="register" element={ <RegisterView /> } />
        <Route path="login" element={ <LoginView/> } />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
  );
}

