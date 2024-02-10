import { useFormik } from "formik";
import FormTextField from "../../components/fields/FormTextField";
import SideBar from "../../components/sidebar/SideBar";
import { Stack, Text, Flex } from "@chakra-ui/react";
import GradientLine from "../../components/gradient/GradientLine";
import FormSelectField from "../../components/fields/FormSelectField";
import BirthDateField from "../../components/fields/BirthDateField";
import FormTextArea from "../../components/fields/FormTextArea";

function ApplicationForm1() {
  const founderDataForm = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      day: "",
      month: "",
      year: "",
      gender: "",
      country: "",
      profession: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const startupDataForm = useFormik({
    initialValues: {
      businessModelType: "",
      stageOfDevelopment: "",
      idustryMatches: "",
      numberOfEmployees: "",
      previousEngagementWithVCorPE: "",
      yearsOfExperience: "",
      TurnOverPerYear: "",
      previousRoundsOfFundRaising: "",
      ExpectationsOfRequiredFunds: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <SideBar>
      <Flex
        w={"100%"}
        h={"100%"}
        bg={"white"}
        p={8}
        boxShadow={"md"}
        position={"relative"}
        zIndex={6}
        justifyContent={"center"}
        alignItems={"center"}
        color={"brand.300"}
        fontWeight={"700"}
        fontSize={"24px"}
      >
        <Text justifyContent={"center"} alignItems={"center"}>
          Founder Information
        </Text>
      </Flex>
      <GradientLine zIndex={5} h={"10px"} mb={10} />

      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        w={"100%"}
        p={10}
      >
        <Stack spacing={4} p={8} w={"100%"}>
          <Stack spacing={4} color={"brand.500"}>
            <FormTextField
              label={"Full Name"}
              name={"fullName"}
              type={"text"}
              placeholder={"Enter your full name"}
              value={founderDataForm.values.fullName}
              onChange={founderDataForm.handleChange}
              error={founderDataForm.errors.fullName}
              touched={founderDataForm.touched.fullName}
              helperText={"Enter your full name"}
              bg={"white"}
            />
            <FormTextField
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"Enter your email"}
              value={founderDataForm.values.email}
              onChange={founderDataForm.handleChange}
              error={founderDataForm.errors.email}
              touched={founderDataForm.touched.email}
              helperText={"Enter your email"}
              bg={"white"}
            />
            <FormTextField
              label={"Address"}
              name={"address"}
              type={"text"}
              placeholder={"Enter your address"}
              value={founderDataForm.values.address}
              onChange={founderDataForm.handleChange}
              error={founderDataForm.errors.address}
              touched={founderDataForm.touched.address}
              helperText={"Enter your address"}
              bg={"white"}
            />

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <BirthDateField
                day={founderDataForm.values.day}
                onDayChange={founderDataForm.handleChange}
                month={founderDataForm.values.month}
                onMonthChange={founderDataForm.handleChange}
                year={founderDataForm.values.year}
                onYearChange={founderDataForm.handleChange}
                dayError={founderDataForm.errors.day}
                monthError={founderDataForm.errors.month}
                yearError={founderDataForm.errors.year}
                dayTouched={founderDataForm.touched.day}
                monthTouched={founderDataForm.touched.month}
                yearTouched={founderDataForm.touched.year}
              />
              <FormSelectField
                label={"Gender"}
                name={"gender"}
                allOptions={[
                  { code: "male", name: "Male" },
                  {
                    code: "female",
                    name: "Female",
                  },
                ]}
                placeholder={"Select gender"}
                value={founderDataForm.values.gender}
                onChange={founderDataForm.handleChange}
                error={founderDataForm.errors.gender}
                touched={founderDataForm.touched.gender}
                helperText={"Select gender"}
                bg={"white"}
              />
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <FormSelectField
                label={"Country"}
                name={"country"}
                allOptions={[
                  { code: "egypt", name: "Egypt" },
                  { code: "nigeria", name: "Nigeria" },
                  {
                    code: "ghana",
                    name: "Ghana",
                  },
                ]}
                placeholder={"Select country"}
                value={founderDataForm.values.country}
                onChange={founderDataForm.handleChange}
                error={founderDataForm.errors.country}
                touched={founderDataForm.touched.country}
                helperText={"Select country"}
                bg={"white"}
              />
              <FormSelectField
                label={"City/Village"}
                name={"city"}
                allOptions={[
                  { code: "cairo", name: "Cairo" },
                  { code: "lagos", name: "Lagos" },
                  {
                    code: "accra",
                    name: "Accra",
                  },
                ]}
                placeholder={"Select city/village"}
                value={founderDataForm.values.city}
                onChange={founderDataForm.handleChange}
                error={founderDataForm.errors.city}
                touched={founderDataForm.touched.city}
                helperText={"Select city/village"}
                bg={"white"}
              />
            </Stack>
            <FormTextArea
              label={"Profession"}
              name={"profession"}
              placeholder={"Enter your profession"}
              value={founderDataForm.values.profession}
              onChange={founderDataForm.handleChange}
              error={founderDataForm.errors.profession}
              touched={founderDataForm.touched.profession}
              helperText={"Enter your profession"}
              bg={"white"}
            />
          </Stack>
        </Stack>
        <Stack
          spacing={4}
          p={8}
          bg={"white"}
          boxShadow={"md"}
          borderRadius={"md"}
          h={"fit-content"}
          w={{
            base: "100%",
            md: "40%",
          }}
        >
          <Text fontSize={"sm"}>Founder Information</Text>
          <Text fontSize={"sm"}>Start from where you left off</Text>
        </Stack>
      </Stack>
      <GradientLine zIndex={5} h={"10px"} />
      <Flex
        w={"100%"}
        h={"100%"}
        bg={"white"}
        p={8}
        boxShadow={"md"}
        position={"relative"}
        zIndex={6}
        justifyContent={"center"}
        alignItems={"center"}
        color={"brand.300"}
        fontWeight={"700"}
        fontSize={"24px"}
      >
        <Text justifyContent={"center"} alignItems={"center"}>
          Startup Information
        </Text>
      </Flex>
      <GradientLine zIndex={5} h={"10px"} />
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        w={"100%"}
        p={10}
      >
        <Stack spacing={4} p={8} w={"100%"}>
          <FormSelectField
            label={"Business Model Type"}
            name={"businessModelType"}
            allOptions={[
              { code: "b2b", name: "B2B" },
              { code: "b2c", name: "B2C" },
              {
                code: "b2g",
                name: "B2G",
              },
            ]}
            placeholder={"Select business model type"}
            value={startupDataForm.values.businessModelType}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.businessModelType}
            touched={startupDataForm.touched.businessModelType}
            helperText={"Select business model type"}
            bg={"white"}
          />
        </Stack>
      </Stack>
    </SideBar>
  );
}

export default ApplicationForm1;
