import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FormInput } from '../form-input/form-input.component';
import { Button, BUTTON_TYPES_CLASSES } from '../button/button.componente';
// import {
//   signInWtihEmailPassword,
//   // signInWithGooglePopup,
// } from '../../utils/firebase/firebase.utils';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

import {
  SignUpContainer,
  SignUpTitle,
  ButtonsContainer,
} from './sign-in-form.style';

const defaultFormFilds = {
  email: '',
  password: '',
};

export type HandleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => void;
export type HandleFormEvent = (event: FormEvent<HTMLFormElement>) => void;

// | HTMLFormElement
export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFilds);
  const dispatch = useDispatch();
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFilds);
  };
  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange: HandleChangeEvent = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit: HandleFormEvent = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error instanceof ReferenceError) {
        switch (error.code as any) {
          case 'auth/wrong-password':
            alert('incorrect password');
            break;
          case 'auth/user-not-found':
            alert('incorrect email ');
            break;

          default:
            break;
        }
      }

      console.error(error);
    }
  };
  return (
    <SignUpContainer>
      <SignUpTitle>I have an account</SignUpTitle>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};
