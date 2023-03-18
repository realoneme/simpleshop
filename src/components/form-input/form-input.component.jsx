import { FormInputLabel, Input, Group } from './form-input.style';
export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInputLabel shrink={otherProps?.value}>{label}</FormInputLabel>
      )}
      <Input className='form-input' {...otherProps} />
    </Group>
  );
};
