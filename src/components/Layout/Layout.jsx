import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';


export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};