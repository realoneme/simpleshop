/**
 * 
default
inverted
google sign in
 */
import { BaseButton, GoogleButton, InvertedButton } from './button.style';

import { ReactNode } from 'react';

type ButtonType = 'base' | 'google-sign-in' | 'inverted';
interface IButtonType {
  base: ButtonType;
  google: ButtonType;
  inverted: ButtonType;
}
interface IButton {
  children: string | ReactNode;
  buttonType?: ButtonType;
  onClick?: () => void;
  type?: string;
}
type getButton = (button?: ButtonType) => React.ElementType;

export const BUTTON_TYPES_CLASSES: IButtonType = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton: getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }: IButton) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
