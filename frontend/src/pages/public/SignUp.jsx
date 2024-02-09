import { Button, Container, Stack, Text } from "@chakra-ui/react";
import FormTextField from "../../components/fields/FormTextField";
import { useFormik } from "formik";
import FormPasswordField from "../../components/fields/FormPasswordField";
import React from "react";
import RegisterationLayout from "../../layouts/RegisterationLayout";
import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const registerFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <DefaultLayout>
      <RegisterationLayout>
        <Stack spacing={4}>
          <Stack spacing={4} align="center" textAlign="center" mb={10}>
            <Text fontSize="48px" fontWeight="bold" color={"brand.300"}>
              Start Your Potential Business
            </Text>
            <Text fontSize="20px" color={"#667085"}>
              Sign up to access the PEV Application
            </Text>
          </Stack>
          <Container maxW={"sm"}>
            <Stack spacing={4} color={"brand.500"}>
              <Text fontSize="14px" color={"#667085"}>
                Please Enter your credentials carefully to access your account
              </Text>

              <Stack
                spacing={4}
                direction={{ base: "column", md: "row" }}
                w={"100%"}
              >
                <FormTextField
                  label={"First Name"}
                  name={"firstName"}
                  type={"text"}
                  placeholder={"Enter your first name"}
                  value={registerFormik.values.firstName}
                  onChange={registerFormik.handleChange}
                  error={registerFormik.errors.firstName}
                  touched={registerFormik.touched.firstName}
                />
                <FormTextField
                  label={"Last Name"}
                  name={"lastName"}
                  type={"text"}
                  placeholder={"Enter your last name"}
                  value={registerFormik.values.lastName}
                  onChange={registerFormik.handleChange}
                  error={registerFormik.errors.lastName}
                  touched={registerFormik.touched.lastName}
                />
              </Stack>
              <FormTextField
                label={"Email"}
                name={"email"}
                type={"email"}
                placeholder={"Enter your email"}
                value={registerFormik.values.email}
                onChange={registerFormik.handleChange}
                error={registerFormik.errors.email}
                touched={registerFormik.touched.email}
              />
              <FormPasswordField
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                label={"Password"}
                name={"password"}
                placeholder={"Enter your password"}
                value={registerFormik.values.password}
                onChange={registerFormik.handleChange}
                error={registerFormik.errors.password}
                touched={registerFormik.touched.password}
                helperText={"Password must be at least 8 characters"}
              />
              <Button bg="brand.300" color={"white"} size="lg" type="submit">
                Continue
              </Button>
            </Stack>
          </Container>
          <Stack spacing={4} align="center" textAlign="center">
            <Text fontSize="14px" color={"#667085"}>
              {"  Already have an account? "} {"  "}
              <Link
                as="span"
                color={"brand.300"}
                cursor={"pointer"}
                to={"/login"}
              >
                Login
              </Link>
            </Text>
          </Stack>
        </Stack>
      </RegisterationLayout>
    </DefaultLayout>
  );
}
export default SignUp;
