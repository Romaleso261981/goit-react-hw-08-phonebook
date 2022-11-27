import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navigation } from '../Navigation/Navigation';


export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};