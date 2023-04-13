import { FormInputLabel, Input, Group } from './form-input.style';
import { HandleChangeEvent } from 'components/sign-in-form/sign-in-form.component';

export interface IFormInputProps {
  label: string;
  value: string;
  type: string;
  required?: boolean;
  name: string;
  onChange: HandleChangeEvent;
}

export const FormInput = ({ label, ...otherProps }: IFormInputProps) => {
  return (
    <Group>
      {label && (
        <FormInputLabel shrink={otherProps?.value}>{label}</FormInputLabel>
      )}
      <Input className='form-input' {...otherProps} />
    </Group>
  );
};
