import { useFormik } from "formik";
import FormTextField from "../../components/fields/FormTextField";
import SideBar from "../../components/sidebar/SideBar";
import { Stack, Text, Flex } from "@chakra-ui/react";
import GradientLine from "../../components/gradient/GradientLine";
import FormSelectField from "../../components/fields/FormSelectField";
import BirthDateField from "../../components/fields/BirthDateField";
import FormTextArea from "../../components/fields/FormTextArea";
import YesNoWithUploadField from "../../components/fields/YesNoWithUploadField";
import CheckBoxGroupField from "../../components/fields/CheckBoxGroupField";
import GreenButton from "../../components/buttons/GreenButton";
import GreenOutlinedButton from "../../components/buttons/GreenOutlinedButton";
import { useNavigate } from "react-router-dom";

function ApplicationForm1() {
  const navigate = useNavigate();
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
      legalEntity: "",
      legalEntityFile: "",
      previousEngagementWithVCorPE: "",
      taxRegisterationCard: "",
      taxRegisterationCardFile: "",
      yearsOfExperience: "",
      turnOverPerYear: "",
      previousRoundsOfFundRaising: "",
      expectationsOfRequiredFunds: "",
      requiredSupportFromPrimeElevateVentures: [],
      hardwareLevel: "",
      techOptions: [],
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
        {/* <Stack
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
        </Stack> */}
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
        color={"brand.500"}
      >
        <Stack spacing={4} p={8} w={"100%"}>
          <FormSelectField
            label={"Business Model Type"}
            name={"businessModelType"}
            allOptions={[
              { code: "b2b", name: "B2B" },
              { code: "b2c", name: "B2C" },
              { code: "Saas", name: "Saas" },
              { code: "Marketplace", name: "Marketplace" },
            ]}
            placeholder={"Select business model type"}
            value={startupDataForm.values.businessModelType}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.businessModelType}
            touched={startupDataForm.touched.businessModelType}
            helperText={"Select business model type"}
            bg={"white"}
          />
          <FormSelectField
            label={"Solution's Stage of Development"}
            name={"stageOfDevelopment"}
            allOptions={[
              {
                code: "early",
                name: "Early-Stage: Validated Idea (Without MVP)",
              },
              { code: "mvp", name: "Growth-Stage: MVP (Prototype)" },
              {
                code: "mature1",
                name: "Mature Startup1: Product with Revenue (Less than 100k USD)",
              },
              {
                code: "mature2",
                name: "Mature Startup2: Product with Revenue (More than 100k USD)",
              },
            ]}
            placeholder={"Select stage of development"}
            value={startupDataForm.values.stageOfDevelopment}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.stageOfDevelopment}
            touched={startupDataForm.touched.stageOfDevelopment}
            helperText={"Select stage of development"}
            bg={"white"}
          />
          <FormSelectField
            label={"The Industry Your Solution Matches"}
            name={"idustryMatches"}
            allOptions={[
              { code: "deep-tech", name: "Deep Tech and Innovation" },
              { code: "fintech", name: "Fintech" },
              { code: "agritech", name: "AgriTech" },
              { code: "biotech", name: "BioTech" },
              {
                code: "esg",
                name: "ESG (Environmental, Social, and Governance)",
              },
              { code: "healthcare", name: "Healthcare" },
              { code: "edtech", name: "EdTech" },
              {
                code: "women-disability",
                name: "Women and Disability in Tech",
              },
            ]}
            placeholder={"Select industry your solution matches"}
            value={startupDataForm.values.idustryMatches}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.idustryMatches}
            touched={startupDataForm.touched.idustryMatches}
            helperText={"Select industry your solution matches"}
            bg={"white"}
          />
          <FormTextField
            name={"numberOfEmployees"}
            type={"number"}
            label={"Number of Employees"}
            placeholder={"Enter number of employees"}
            value={startupDataForm.values.numberOfEmployees}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.numberOfEmployees}
            touched={startupDataForm.touched.numberOfEmployees}
            helperText={"Enter number of employees"}
            bg={"white"}
          />
          <YesNoWithUploadField
            label={"Legal Entity"}
            name={"legalEntity"}
            placeholder={"Select legal entity"}
            value={startupDataForm.values.legalEntity}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.legalEntity}
            touched={startupDataForm.touched.legalEntity}
            helperText={"Select legal entity"}
            uploadUrlName={"legalEntityFile"}
            fileUploadURL={startupDataForm.values.legalEntityFile}
            onFileUploadURLChange={startupDataForm.handleChange}
            bg={"white"}
          />
          <YesNoWithUploadField
            label={"Tax Registeration Card"}
            name={"taxRegisterationCard"}
            placeholder={"Select tax registeration card"}
            value={startupDataForm.values.taxRegisterationCard}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.taxRegisterationCard}
            touched={startupDataForm.touched.taxRegisterationCard}
            helperText={"Select tax registeration card"}
            uploadUrlName={"taxRegisterationCardFile"}
            fileUploadURL={startupDataForm.values.taxRegisterationCardFile}
            onFileUploadURLChange={startupDataForm.handleChange}
            bg={"white"}
          />
          <FormSelectField
            label={"Previous Engagement with VC or PE"}
            name={"previousEngagementWithVCorPE"}
            allOptions={[
              { code: "yes", name: "Yes" },
              { code: "no", name: "No" },
            ]}
            placeholder={"Select previous engagement with VC or PE"}
            value={startupDataForm.values.previousEngagementWithVCorPE}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.previousEngagementWithVCorPE}
            touched={startupDataForm.touched.previousEngagementWithVCorPE}
            helperText={"Select previous engagement with VC or PE"}
            bg={"white"}
          />
          <FormSelectField
            label={"Years of Experience"}
            name={"yearsOfExperience"}
            allOptions={[
              { code: "0-1", name: "0-1" },
              { code: "1-3", name: "1-3" },
              { code: "3-5", name: "3-5" },
              { code: "5+", name: "5+" },
            ]}
            placeholder={"Select years of experience"}
            value={startupDataForm.values.yearsOfExperience}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.yearsOfExperience}
            touched={startupDataForm.touched.yearsOfExperience}
            helperText={"Select years of experience"}
            bg={"white"}
          />
          <FormTextField
            name={"turnOverPerYear"}
            type={"number"}
            label={"Turn Over Per Year"}
            placeholder={"Enter turn over per year"}
            value={startupDataForm.values.turnOverPerYear}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.turnOverPerYear}
            touched={startupDataForm.touched.turnOverPerYear}
            helperText={"Enter turn over per year"}
            bg={"white"}
          />
          <FormSelectField
            label={"Previous Rounds of Fund Raising"}
            name={"previousRoundsOfFundRaising"}
            allOptions={[
              { code: "yes", name: "Yes" },
              { code: "no", name: "No" },
            ]}
            placeholder={"previous rounds of fund raising"}
            value={startupDataForm.values.previousRoundsOfFundRaising}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.previousRoundsOfFundRaising}
            touched={startupDataForm.touched.previousRoundsOfFundRaising}
            helperText={"previous rounds of fund raising"}
            bg={"white"}
          />
          <FormTextField
            name={"expectationsOfRequiredFunds"}
            type={"number"}
            label={"Expectations of Required Funds 2024-2026"}
            placeholder={"Enter expectations of required funds"}
            value={startupDataForm.values.expectationsOfRequiredFunds}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.expectationsOfRequiredFunds}
            touched={startupDataForm.touched.expectationsOfRequiredFunds}
            helperText={"Enter expectations of required funds"}
            bg={"white"}
          />
          <CheckBoxGroupField
            label={"Required Support from Prime Elevate Ventures"}
            name={"requiredSupportFromPrimeElevateVentures"}
            values={
              startupDataForm.values.requiredSupportFromPrimeElevateVentures
            }
            setFieldValues={(arr) => {
              startupDataForm.handleChange({
                target: {
                  name: "requiredSupportFromPrimeElevateVentures",
                  value: arr,
                },
              });
              console.log(arr);
            }}
            error={
              startupDataForm.errors.requiredSupportFromPrimeElevateVentures
            }
            touched={
              startupDataForm.touched.requiredSupportFromPrimeElevateVentures
            }
            helperText={"Select required support from Prime Elevate Ventures"}
            options={[
              { value: "strategy", label: "Strategy" },
              { value: "market-positioning", label: "Market Positioning" },
              { value: "product-development", label: "Product Development" },
              { value: "business-development", label: "Business Development" },
              { value: "financial-management", label: "Financial Management" },
              { value: "legal-support", label: "Legal Support" },
              { value: "other", label: "Other" },
            ]}
          />
          <FormSelectField
            label={"Hardware Level"}
            name={"hardwareLevel"}
            allOptions={[
              { code: "none", name: "None" },
              { code: "low", name: "Low" },
              { code: "medium", name: "Medium" },
              { code: "high", name: "High" },
            ]}
            placeholder={"Select hardware level"}
            value={startupDataForm.values.hardwareLevel}
            onChange={startupDataForm.handleChange}
            error={startupDataForm.errors.hardwareLevel}
            touched={startupDataForm.touched.hardwareLevel}
            helperText={"Select hardware level"}
            bg={"white"}
          />
          <CheckBoxGroupField
            name={"techOptions"}
            label={"Tech Options"}
            values={startupDataForm.values.techOptions}
            setFieldValues={(arr) => {
              startupDataForm.handleChange({
                target: {
                  name: "techOptions",
                  value: arr,
                },
              });
              console.log(arr);
            }}
            error={startupDataForm.errors.techOptions}
            touched={startupDataForm.touched.techOptions}
            helperText={"Select tech options"}
            options={[
              { value: "blockchain", label: "Blockchain" },
              { value: "ai", label: "AI" },
              { value: "iot", label: "IoT" },
              { value: "big-data", label: "Big Data" },
              { value: "cyber-security", label: "Cyber Security" },
              { value: "other", label: "Other" },
            ]}
          />
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <GreenOutlinedButton
              label={"Save Draft"}
              w={{
                base: "100%",
                md: "20%",
              }}
            />
            <GreenButton
              w={{
                base: "100%",
                md: "20%",
              }}
              label={"Next"}
              onClick={() => {
                founderDataForm.handleSubmit();
                startupDataForm.handleSubmit();
                navigate("/user/application-form2");
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </SideBar>
  );
}

export default ApplicationForm1;
