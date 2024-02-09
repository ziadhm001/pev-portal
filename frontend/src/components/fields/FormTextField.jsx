import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function FormTextField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  touched,
  helperText,
  ...rest
}) {
  const isError = error !== undefined;
  const isTouched = touched !== undefined;
  const isInvalid = isError && isTouched;
  return (
    <FormControl id={name} isRequired isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
        {...rest}
      />
      <FormHelperText>{!error && helperText}</FormHelperText>
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormTextField;
