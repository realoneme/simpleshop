import { SignInForm } from '../../components/sign-in-form/sign-in-form.component';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';

import { AuthContainer } from './authentication.style';

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
