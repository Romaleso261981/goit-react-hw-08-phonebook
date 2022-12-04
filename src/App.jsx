import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from "react-router-dom";
import { refreshUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { ProtectedRoute } from './ProtectedRoute';
import Header  from './components/Header/Header';
import ContactList from './pages/ContactList/ContactList';
import {LoginPage} from './pages/LoginPage/LoginPage';
import {RegistrationForm} from './pages/RegistrationForm/RegistrationForm';
// import HomePage from './pages/HomePage/HomePage';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// const HomePage = lazy(() =>
//   import('pages/HomePage' /* webpackChunkName: "home-page" */)
// );

// const ContactsPage = lazy(() =>
//   import('../pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
// );
// const RegisterPage = lazy(() =>
//   import('../pages/RegisterPage' /* webpackChunkName: "register-page" */)
// );

// const LoginPage = lazy(() =>
//   import('../pages/LoginPage' /* webpackChunkName: "login-page" */)
// );

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const isRegister = useSelector(state => {
    console.log(`isLogin: ${state.auth.isLogin}`);
    console.log(`isRegister: ${state.auth.isRegister}`);
    return state.auth.isRegister
  });
  // const isRegister = false;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

    return (
      <ThemeProvider theme={theme}>        
        <Routes>          
          <Route path='/' element={<Header />}>
            {/* <Route path='/' element={<HomePage />}></Route> */}
            <Route path='/register'
              element={<ProtectedRoute redirectPath='/login' isAllowed={!isRegister}>
                        <RegistrationForm />
                      </ProtectedRoute>}>
            </Route>
            <Route path='/login'
              element={<ProtectedRoute   redirectPath='/contacts' isAllowed={!isLogin}>
                        <LoginPage />
                      </ProtectedRoute>}>
            </Route>
            <Route path='/contacts'
              element={<ProtectedRoute redirectPath='/login' isAllowed={isLogin}>
                        <ContactList />
                      </ProtectedRoute>}>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    );
  }


export default App;




// import { Routes, Route, Navigate } from 'react-router-dom';
// import { currentUser } from './redux/auth/operations';
// import { useEffect } from 'react';
// import { useDispatch} from 'react-redux';
// import LogIn from './MUI/LoginPage/LoginPage';
// import HomePage from './MUI/HomePage/HomePage';
// import RegistrationForm from './MUI/RegistrationForm/RegistrationForm';
// // import { ProtectedRoute } from 'components/ProtectedRoute';
// // import { ContactList } from './pages/ContactList/ContactList';

// function App() {
//   const dispatch = useDispatch();
//   // const isLogin = useSelector(state => state.auth.isLogin);

//   useEffect(() => {
//     console.log("полетів за контактами");
//     dispatch(currentUser());
//   }, [dispatch]);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<RegistrationForm />}>
//           <Route path="/register" element={<RegistrationForm />}></Route>
//           <Route path="/login" element={<LogIn />}></Route>
//           <Route path="/contacts" element={<HomePage/>}></Route>
//         </Route>
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
