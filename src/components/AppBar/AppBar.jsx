import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from '../../hooks';
import { Header } from './AppBar.style';

export const AppBar = () => {
  // const { isLoggedIn } = true;

  return <Header>{true ? <UserMenu /> : <AuthNav />}</Header>;
};
