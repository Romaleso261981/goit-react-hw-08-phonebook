import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper, Username } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
    const { user } = useAuth();
    console.log(user);

  return (
    <Wrapper >
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </Wrapper>
  );
};
