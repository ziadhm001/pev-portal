import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Stack,
} from "@chakra-ui/react";

function CheckBoxGroupField({
  label,
  name,
  values,
  setFieldValues,
  error,
  touched,
  helperText,
  options,
}) {
  const isError = error !== undefined;
  const isTouched = touched !== undefined;
  const isInvalid = isError && isTouched;
  return (
    <FormControl id={name} isRequired isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup
        value={values}
        onChange={(str) => {
          setFieldValues(str);
        }}
      >
        <Stack>
          {options.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <FormHelperText>{!error && helperText}</FormHelperText>
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default CheckBoxGroupField;
