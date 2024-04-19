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
      <FormLabel fontWeight={600}>{label}</FormLabel>
      <Select
        border={"1px solid"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      >
        {allOptions.map((xOption) => (
          <option key={xOption.code} value={xOption.code}>
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
