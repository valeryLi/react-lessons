// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Section } from './Section/Section';
// import { Filter } from './Filter/Filter';

// const App = () => {
//   return (
//     <div>
//       <Section>
//         <h1>Phonebook</h1>
//         <ContactForm />
//       </Section>
//       <Section>
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </Section>
//     </div>
//   );
// };

// export default App;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPages';
import { LoginPage } from 'pages/LoginPages';
import { RegisterPage } from 'pages/RegisterPage';
import { UsersPage } from 'pages/UsersPage';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isfetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isfetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
