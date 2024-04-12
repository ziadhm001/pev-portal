import RegisterationLayout from "../../layouts/RegisterationLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import FormTextField from "../../components/fields/FormTextField";
import { useFormik } from "formik";
import { useState } from "react";
import authService from "../../services/auth.service";
export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const forgetFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      authService
        .forgetPassword(values.email)
        .then(() => {
          setText('Please check your mail!')
          setError('')
        })
        .catch((err) => {
          setError(err.response.data.error?.msg ?? err.message);
          setText('')
        });
      setIsLoading(false);
    },
  })
  return (
    <DefaultLayout>
      <RegisterationLayout>
        <Flex direction={"column"} gap={5} alignItems={"center"} mt={"20%"}>
          <Text fontSize={36} fontWeight={700}>
            Forgot your password ?
          </Text>
          <Text fontSize={16} fontWeight={400} color={'green'}>
            {text}
          </Text>
          <Text fontSize={16} fontWeight={400} color={'red'}>
            {error}
          </Text>
          <FormTextField
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Please enter your email"}
            value={forgetFormik.values.email}
            onChange={forgetFormik.handleChange}
            error={forgetFormik.errors.email}
            touched={forgetFormik.touched.email}
          />
          <Text fontSize={14} color={"#667085"} alignSelf={"flex-start"}>
            Remembered it ? <Link to="/login">Login</Link>
          </Text>
          <Button bg="brand.300" color={"white"} w={"100%"} size="lg" onClick={forgetFormik.handleSubmit}
                isLoading={isLoading}
                loadingText="Loading...">
            Reset
          </Button>
        </Flex>
      </RegisterationLayout>
    </DefaultLayout>
  );
}
