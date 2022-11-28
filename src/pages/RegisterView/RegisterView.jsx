import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import {
  InputLabel,
  FormWrap,
  InputSpan,
  InputSpanName,
  FormBtn,
  InputForm,
  InputSpanEmail,
} from './RegisterView.styled';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  // }, []);

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
    dispatch(register({ name, email, password }));
    // setEmail('');
    // setPassword('');
    // setName('')
  };

  

  return (
    <FormWrap onSubmit={handleSubmitForm}>
      <InputLabel>
        <InputSpanName>Name</InputSpanName>
        <InputForm
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
        />
      </InputLabel>
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
          type="number"
          name="password"
          value={password}
        />
      </InputLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormWrap>
  );
};

export default RegisterView;
