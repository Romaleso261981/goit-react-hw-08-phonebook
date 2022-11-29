import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import {
  InputLabel,
  FormWrap,
  InputSpan,
  FormBtn,
  InputForm,
  InputSpanEmail,
} from './LoginView.styled';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    dispatch(logIn({ name, email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrap onSubmit={handleSubmitForm}>
      <InputLabel>
        <InputSpanEmail>Email</InputSpanEmail>
        <InputForm
          onChange={handleChange}
          type="text"
          name="email"
          value={email}
        />
      </InputLabel>
      <InputLabel>
        <InputSpan>Password</InputSpan>
        <InputForm
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
      </InputLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormWrap>
  );
};

export default LoginView;