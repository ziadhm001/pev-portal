import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function FormPasswordField({
  showPassword,
  setShowPassword,
  label,
  name,
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
      <FormHelperText color="gray">{!error && helperText}</FormHelperText>
      <InputGroup>
        <Input
          border={"1px solid"}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isInvalid={isInvalid}
          {...rest}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{isInvalid && error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormPasswordField;
