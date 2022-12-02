import { Routes, Route, Navigate } from 'react-router-dom';
import { currentUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
// import { ProtectedRoute } from 'components/ProtectedRoute';
// import { Layout } from './components/Layout/Layout';
// import UserMenu from './components/UserMenu/UserMenu';
import ButtonAppBar from './components/LogInMUI/LogIn';
import {LogIn} from "./components/LogIn";
import HomePage from './MUI/HomePage/HomePage';
import LoginPage from './MUI/LoginPage/LoginPage';
// import { ContactList } from './pages/ContactList/ContactList';
// import { LoginView } from './pages/LoginView/LoginView';
import RegisterView from './pages/RegisterView/RegisterView';
// import HomePage from 'pages/HomePage';

function App() {
  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    console.log("полетів за контактами");
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/register" element={<RegisterView />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<>/contacts</>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
