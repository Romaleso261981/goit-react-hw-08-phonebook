import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navigation } from '../Navigation/Navigation';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';


export const Layout = () => {
  const { isLoggedIn } = false
  return (
    <>
      <AppBar />
      {/* {isLoggedIn ? <AppBar /> : <Navigation />} */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};