import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { currentUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ProtectedRoute } from './ProtectedRoute';
import Header from './components/Header/Header';
// import ContactsPage from './pages/ContactPage/ContactsPage';
// import { LoginPage } from './pages/LoginPage/LoginPage';
// import { RegistrationForm } from './pages/RegistrationForm/RegistrationForm';
// import HomePage from './pages/HomePage/HomePage';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
  const isAuth = useSelector(state => state.auth.isAuth);

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
                <ProtectedRoute redirectPath="/login" isAllowed={!isAuth}>
                  <RegistrationForm />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <ProtectedRoute redirectPath="/contacts" isAllowed={!isAuth}>
                  <LoginPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <ProtectedRoute redirectPath="/register" isAllowed={isAuth}>
                  <ContactsPage />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
