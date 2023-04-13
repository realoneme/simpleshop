import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  PaymentButton,
  PaymentFormContainer,
  PaySpinnerContainer,
} from './payment-form.styles';
import { FormContainer } from './payment-form.styles';
import { BUTTON_TYPES_CLASSES } from '../button/button.componente';

import { selectedCartTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useEffect, useState } from 'react';
import { updateCartItemReducer } from '../../utils/cart/cart.utils';
import { setCartItems } from '../../store/cart/cart.action';

export const PaymentForm = () => {
  const amount = useSelector(selectedCartTotalPrice);
  const displayName = useSelector(selectCurrentUser)?.displayName;
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paystatus, setPaystatus] = useState(false);
  const [paySuccess, setpaySuccess] = useState(false);
  const cleanCart = () => {
    updateCartItemReducer([], setCartItems, 0, 0, dispatch);
  };
  const paymentHandler = async (e) => {
    e.preventDefault();
    setPaystatus(true);
    if (!stripe || !elements) return;
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: displayName || 'Guest',
        },
      },
    });
    setPaystatus(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment successful');
        setpaySuccess(true);
      }
    }
  };

  useEffect(() => {
    if (paySuccess) {
      cleanCart();
      navigate('/shop');
    }
  }, [paySuccess]);

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPES_CLASSES.inverted}>
          {!paystatus ? 'Pay Now' : <PaySpinnerContainer />}
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
