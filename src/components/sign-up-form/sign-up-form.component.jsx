import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.componente';
import {
  SignUpContainer,
  SignUpTitle,
} from '../sign-in-form/sign-in-form.style';

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';
import { signUpStart } from '../../store/user/user.action';

const defaultFormFilds = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFilds);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const resetFormFields = () => {
    setFormFields(defaultFormFilds);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await createUserDocumentFromAuth(user, { displayName });
      dispatch(signUpStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use');
      } else {
        console.error('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I don't have an account</SignUpTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label={'Email'}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label={'Password'}
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <FormInput
          label={'Confirm Password'}
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
