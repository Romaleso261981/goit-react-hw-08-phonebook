import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from "react-router-dom";
import { currentUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProtectedRoute } from './ProtectedRoute';
import Header  from './components/Header/Header';
import ContactList from './pages/ContactList/ContactList';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationForm/RegistrationForm';
import HomePage from './pages/HomePage/HomePage';
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

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
console.log(isAuth);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

    return (
      <>        
        <Routes>          
          <Route path='/' element={<Header />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/register'
              element={<ProtectedRoute redirectPath='/contacts' isAllowed={!isAuth}>
                        <RegisterPage />
                      </ProtectedRoute>}>
            </Route>
            <Route path='/login'
              element={<ProtectedRoute   redirectPath='/contacts' isAllowed={!isAuth}>
                        <LoginPage />
                      </ProtectedRoute>}>
            </Route>
            <Route path='/contacts'
              element={<ProtectedRoute redirectPath='/login' isAllowed={isAuth}>
                        <ContactList />
                      </ProtectedRoute>}>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </>
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
//   // const isAuth = useSelector(state => state.auth.isAuth);

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
