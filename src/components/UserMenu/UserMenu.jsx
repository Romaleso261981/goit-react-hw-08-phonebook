import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { Wrapper, Username } from "./UserMenu.styled";
import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
    console.log(user.name);

  return (
    <Wrapper >
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </button>
    </Wrapper>
  );
};

export default UserMenu;

