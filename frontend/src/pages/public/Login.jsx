import { Button, Container, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FormTextField from "../../components/fields/FormTextField";
import { useFormik } from "formik";
import FormPasswordField from "../../components/fields/FormPasswordField";
import React from "react";
import RegisterationLayout from "../../layouts/RegisterationLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      authService
        .login(values.email, values.password)
        .then(() => navigate("/"))
        .catch((err) => {
          setError(err.response.data.error?.msg ?? err.message);
        });
      setIsLoading(false);
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
              <Text fontSize="14px" color={"red"}>
                {error}
              </Text>
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
              <Text fontSize="14px" color={"#667085"}>
                Forgot your password ?{" "}
                <Link to="/forgot-password">Reset password</Link>
              </Text>
              <Button
                bg="brand.300"
                color={"white"}
                size="lg"
                type="submit"
                onClick={registerFormik.handleSubmit}
                isLoading={isLoading}
                loadingText="Loading..."
              >
                Continue
              </Button>
            </Stack>
          </Container>
          <Stack spacing={4} align="center" textAlign="center">
            <Text fontSize="14px" color={"#667085"}>
              {"  Don't have an account? "} {"  "}
              <Link
                as="span"
                color={"brand.300"}
                cursor={"pointer"}
                to={"/register"}
              >
                Sign Up
              </Link>
            </Text>
          </Stack>
        </Stack>
      </RegisterationLayout>
    </DefaultLayout>
  );
}

export default Login;
