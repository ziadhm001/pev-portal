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
      <FormLabel fontWeight={600}>{label}</FormLabel>
      <FormHelperText color="gray">{!error && helperText}</FormHelperText> 
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
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default CheckBoxGroupField;
