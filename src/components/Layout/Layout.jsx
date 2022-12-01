import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navigation } from '../Navigation/Navigation';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';


export const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuth)
  return (
    <>
      {isLoggedIn ?  <Navigation /> : <AppBar />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};