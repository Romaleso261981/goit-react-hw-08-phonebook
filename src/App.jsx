import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { currentUser } from './redux/auth/authOperations';
import { selectIsLogin } from './redux/selectors.js';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const ContactsPage = lazy(() => import('./pages/ContactPage/ContactsPage'));

const RegistrationForm = lazy(() =>
  import('./pages/RegistrationForm/RegistrationForm')
);

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/register"
              element={
                <ProtectedRoute redirectPath="/login" isAllowed={!isLogin}>
                  <RegistrationForm />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <ProtectedRoute redirectPath="/contacts" isAllowed={!isLogin}>
                  <LoginPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <ProtectedRoute redirectPath="/register" isAllowed={isLogin}>
                  <ContactsPage />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
          <Route />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
