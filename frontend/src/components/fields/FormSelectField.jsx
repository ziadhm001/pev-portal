import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from "@chakra-ui/react";

function FormSelectField({
  setValue,
  label,
  name,
  allOptions,
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
      <Select
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      >
        {allOptions.map((xOption) => (
          <option key={xOption.code} value={xOption.name}>
            {xOption.name}
          </option>
        ))}
      </Select>
      <FormHelperText>{!error && helperText}</FormHelperText>
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormSelectField;
