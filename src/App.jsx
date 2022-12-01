import { Routes, Route, Navigate } from 'react-router-dom';
import { currentUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
// import { ProtectedRoute } from 'components/ProtectedRoute';
import { Layout } from './components/Layout/Layout';
import { ContactList } from './pages/ContactList/ContactList';
import { LoginView } from './pages/LoginView/LoginView';
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
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ContactList/>}></Route>
          <Route path="/register" element={<RegisterView />}></Route>
          <Route path="/login" element={<LoginView />}></Route>
          <Route path="/contacts" element={<>/contacts</>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
