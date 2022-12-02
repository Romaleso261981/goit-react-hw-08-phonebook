import DrawerAppBar from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.style';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.auth.isLoggedIn);

  return <Header>{true ? <DrawerAppBar /> : <AuthNav />}</Header>;
};