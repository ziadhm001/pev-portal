import { Stack, Text, Flex } from "@chakra-ui/react";
import ContactUsLayout from "../../layouts/ContactUsLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import FormTextField from "../../components/fields/FormTextField";
import { useFormik } from "formik";
import FormTextArea from "../../components/fields/FormTextArea";
import GreenButton from "../../components/buttons/GreenButton";
import CheckBoxGroupField from "../../components/fields/CheckBoxGroupField";

function ContactUs() {
  const contactUsForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      services: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <ContactUsLayout>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          w={{ base: "100%", md: "50%" }}
          h={"100%"}
          zIndex={1}
          position={"relative"}
          top={"-64px"}
        >
          <Stack spacing={4} color={"brand.500"}>
            <Text fontSize="14px" color={"#667085"} mt={12}>
              Please fill out the form and we will get back to you as soon as
              possible.
            </Text>
            <FormTextField
              label={"Name"}
              name={"name"}
              type={"text"}
              placeholder={"Enter your name"}
              value={contactUsForm.values.name}
              onChange={contactUsForm.handleChange}
              error={contactUsForm.errors.name}
              touched={contactUsForm.touched.name}
              helperText={"Please enter your full name"}
            />
            <FormTextField
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"Enter your email"}
              value={contactUsForm.values.email}
              onChange={contactUsForm.handleChange}
              error={contactUsForm.errors.email}
              touched={contactUsForm.touched.email}
              helperText={"Please enter your email"}
            />
            <FormTextField
              label={"Subject"}
              name={"subject"}
              type={"text"}
              placeholder={"Enter your subject"}
              value={contactUsForm.values.subject}
              onChange={contactUsForm.handleChange}
              error={contactUsForm.errors.subject}
              touched={contactUsForm.touched.subject}
              helperText={"Please enter your subject"}
            />
            <FormTextArea
              label={"Message"}
              name={"message"}
              placeholder={"Enter your message"}
              value={contactUsForm.values.message}
              onChange={contactUsForm.handleChange}
              error={contactUsForm.errors.message}
              touched={contactUsForm.touched.message}
              helperText={"Please enter your message"}
            />

            <CheckBoxGroupField
              label={"Services"}
              name={"services"}
              options={[
                { value: "service1", label: "Service 1" },
                { value: "service2", label: "Service 2" },
                { value: "service3", label: "Service 3" },
              ]}
              value={contactUsForm.values.services}
              setFieldValues={(str) => {
                contactUsForm.setFieldValue("services", str);
              }}
              error={contactUsForm.errors.services}
              touched={contactUsForm.touched.services}
              helperText={"Please select your services"}
            />

            <GreenButton
              onClick={contactUsForm.handleSubmit}
              label={"Submit"}
            />
          </Stack>
        </Flex>
      </ContactUsLayout>
    </DefaultLayout>
  );
}

export default ContactUs;
