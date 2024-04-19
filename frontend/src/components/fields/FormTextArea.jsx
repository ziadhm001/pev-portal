import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

function FormTextArea({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  touched,
  helperText,
  setValue,
  ...rest
}) {
  const isError = error !== undefined;
  const isTouched = touched !== undefined;
  const isInvalid = isError && isTouched;
  return (
    <FormControl id={name} isRequired isInvalid={isInvalid}>
      <FormLabel fontWeight={600}>{label}</FormLabel>
      <FormHelperText color={'gray'}>{!error && helperText}</FormHelperText>
      <Textarea
        border={"1px solid"}
        type={type}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
          if (setValue) {
            setValue(e.target.value);
          }
        }}
        placeholder={placeholder}
        isInvalid={isInvalid}
        {...rest}
      />
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormTextArea;
