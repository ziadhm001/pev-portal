import RegisterationLayout from "../../layouts/RegisterationLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import FormTextField from "../../components/fields/FormTextField";
export default function ForgotPassword() {
  return (
    <DefaultLayout>
      <RegisterationLayout>
        <Flex direction={"column"} gap={5} alignItems={"center"} mt={"20%"}>
          <Text fontSize={36} fontWeight={700}>
            Forgot your password ?
          </Text>
          <FormTextField
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Please enter your email"}
          />
          <Text fontSize={14} color={"#667085"} alignSelf={"flex-start"}>
            Remembered it ? <Link to="/login">Login</Link>
          </Text>
          <Button bg="brand.300" color={"white"} w={"100%"} size="lg">
            Reset
          </Button>
        </Flex>
      </RegisterationLayout>
    </DefaultLayout>
  );
}
