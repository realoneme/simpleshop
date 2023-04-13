import styled from 'styled-components';

import { Button } from '../button/button.componente';
import { SpinnerContainer } from '../spinner/spinner.style';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  align-items: center;
`;

export const PaySpinnerContainer = styled(SpinnerContainer)`
  width: 25px;
  height: 25px;
`;
