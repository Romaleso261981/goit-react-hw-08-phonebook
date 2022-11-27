import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {login} from '../../redux/auth/auth-operations'

import {
  InputLabel,
  FormWrap,
  InputSpan,
  InputSpanName,
  FormBtn,
  InputForm,
} from './LoginView.styled';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
  }, [dispatch]);

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
    dispatch(login({ name, email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrap onSubmit={handleSubmitForm}>
      <InputLabel>
        <InputSpanName>Name</InputSpanName>
        <InputForm
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </InputLabel>
      <InputLabel>
        <InputSpan>Number</InputSpan>
        <InputForm
          onChange={handleChange}
          type="text"
          name="email"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={email}
        />
      </InputLabel>
      <InputLabel>
        <InputSpan>Number</InputSpan>
        <InputForm
          onChange={handleChange}
          type="number"
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={password}
        />
      </InputLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormWrap>
  );
};

export default LoginView;
