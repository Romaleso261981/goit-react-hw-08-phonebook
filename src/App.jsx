// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import { Layout } from './Layout';
import AppBar from './components/HomeView/HomeView';
// import { Container } from './components/AppStyle';

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
        <AppBar/>
        {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterView />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginView />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactListView />} />
          }
        />
      </Route>
    </Routes> */}
      </>
    
  );
  
}




