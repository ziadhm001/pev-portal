import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Select,
  FormLabel,
  Textarea,
  Image,
} from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import GreenButton from "../../components/buttons/GreenButton";
import { useFormik } from "formik";
import FormTextField from "../../components/fields/FormTextField";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import upload from "../../assets/images/upload.png";

function JobPage() {
  return (
    <DefaultLayout>
      <Flex flexDirection={"column"} alignItems={"center"} padding={"100px"}>
        <Text fontSize="5xl" fontWeight={"600"}>
          {job.jobName}
        </Text>
        <Text color={" #667085"}>
          {job.department} . {job.location} . {job.jobType}
        </Text>
        <br />
        <Tabs w={"80%"} isFitted color={"black"}>
          <TabList>
            <Tab _selected={{ color: "#4BB543" }}>Overview</Tab>
            <Tab _selected={{ color: "#4BB543" }}>Application</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="#4BB543"
            borderRadius="1px"
          />

          <TabPanels>
            <TabPanel>
              <Overview
                aboutTheRole={job.aboutTheRole}
                WhatWillDo={job.WhatWillDo}
              />
            </TabPanel>
            <TabPanel>
              <Application />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </DefaultLayout>
  );
}

function Overview({ aboutTheRole, WhatWillDo }) {
  return (
    <Flex flexDirection={"column"} gap={"2"}>
      <Text fontSize="3xl" alignSelf={"self-start"} decoration={"underline"}>
        About the Role
      </Text>
      <Text color={"#667085"} w={"80%"}>
        {aboutTheRole}
      </Text>
      <br />
      <Text fontSize="3xl" alignSelf={"self-start"} decoration={"underline"}>
        What You Will Do
      </Text>
      <Text color={"#667085"} w={"80%"}>
        {WhatWillDo}
      </Text>
    </Flex>
  );
}

function Application() {
  const registerFormik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      address: "",
      gender: "",
      country: "",
      city: "",
      profession: "",
      month: "",
      day: "",
      year: "",
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    console.log("hesham");
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    //upload the file
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: "image/*,application/pdf,application/msword",
    noClick: true,
    noKeyboard: true,
  });
  return (
    <Flex flexDirection={"column"} gap={"2"}>
      <FormTextField
        label={"Full Name"}
        labelColor={"#4BB543"}
        name={"fullname"}
        type={"text"}
        value={registerFormik.values.fullname}
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.fullname}
        touched={registerFormik.touched.fullname}
        borderColor={"#4BB543"}
      />
      <FormTextField
        label={"Email"}
        labelColor={"#4BB543"}
        name={"email"}
        type={"email"}
        value={registerFormik.values.email}
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.email}
        touched={registerFormik.touched.email}
        borderColor={"#4BB543"}
      />
      <FormTextField
        label={"Address"}
        labelColor={"#4BB543"}
        name={"address"}
        type={"text"}
        value={registerFormik.values.address}
        onChange={registerFormik.handleChange}
        error={registerFormik.errors.address}
        touched={registerFormik.touched.address}
        borderColor={"#4BB543"}
      />

      <Flex justifyContent={"space-between"}>
        <Flex flexDirection={"column"} w={"40%"}>
          <FormLabel color={"#4BB543"}>Date of birth</FormLabel>
          <Flex>
            <Select
              placeholder="MM"
              borderColor={"#4BB543"}
              value={registerFormik.values.month}
              onChange={registerFormik.handleChange}
              marginRight={"5px"}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <Select
              placeholder="DD"
              borderColor={"#4BB543"}
              value={registerFormik.values.day}
              onChange={registerFormik.handleChange}
              marginRight={"5px"}
            >
              {days.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </Select>
            <Select
              placeholder="YYYY"
              borderColor={"#4BB543"}
              value={registerFormik.values.year}
              onChange={registerFormik.handleChange}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} w={"40%"}>
          <FormLabel color={"#4BB543"}>Gender</FormLabel>
          <Select
            placeholder="Gender"
            borderColor={"#4BB543"}
            value={registerFormik.values.gender}
            onChange={registerFormik.handleChange}
          >
            <option value={"male"}>male</option>
            <option value={"female"}>female</option>
          </Select>
        </Flex>
      </Flex>

      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Flex w={"40%"}>
          <FormTextField
            label={"Country"}
            labelColor={"#4BB543"}
            name={"country"}
            type={"text"}
            value={registerFormik.values.country}
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.country}
            touched={registerFormik.touched.country}
            borderColor={"#4BB543"}
          />
        </Flex>
        <Flex w={"40%"}>
          <FormTextField
            label={"City / Village"}
            labelColor={"#4BB543"}
            name={"city"}
            type={"text"}
            value={registerFormik.values.city}
            onChange={registerFormik.handleChange}
            error={registerFormik.errors.city}
            touched={registerFormik.touched.city}
            borderColor={"#4BB543"}
          />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"}>
        <FormLabel color={"#4BB543"}>
          Profession &nbsp;
          <Text display={"inline"} color={"#686868"}>
            [Max 250 Character]
          </Text>
        </FormLabel>
        <Textarea
          value={registerFormik.values.profession}
          onChange={registerFormik.handleChange}
          maxLength={250}
          borderColor={"#4BB543"}
        />
      </Flex>
      <br />
      <Flex flexDirection={"column"}>
        <FormLabel color={"#4BB543"}>Upload your CV / Resume</FormLabel>
        <Flex {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Flex
              w={"100%"}
              h={"fit-content"}
              padding={"50px"}
              border={"1px dashed #4BB543"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"5px"}
            >
              <Text color={"#4BB543"}>Drop the files here ...</Text>
            </Flex>
          ) : (
            <Flex
              w={"100%"}
              h={"fit-content"}
              padding={"50px"}
              border={"1px dashed #4BB543"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"5px"}
            >
              <Image src={upload} />
              <Text>
                Drag & drop files or{" "}
                <Text
                  display={"inline"}
                  color={"#4BB543"}
                  decoration={"underline"}
                  onClick={open}
                  cursor={"pointer"}
                >
                  Browse
                </Text>
              </Text>
              <Text color={"#667085"}>
                Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <br />
      <br />
      <GreenButton label={"SUBMIT"} />
    </Flex>
  );
}

const job = {
  jobName: "Senior Video Producer",
  location: "Egypt",
  jobType: "Full Time",
  department: "OutReach",
  aboutTheRole:
    "The only people who are authorized to create accounts on this site are professionals who understand risk and are willing to bear the consequences. If you are not an Entrepreneur looking for advice and introductions to potential investors, or you don’t think that you are both an Accredited Investor and sophisticated enough to protect your own interests, then you should not try to create an account on this site.",
  WhatWillDo:
    "The only people who are authorized to create accounts on this site are professionals who understand risk and are willing to bear the consequences. If you are not an Entrepreneur looking for advice and introductions to potential investors, or you don’t think that you are both an Accredited Investor and sophisticated enough to protect your own interests, then you should not try to create an account on this site.",
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = Array.from({ length: 31 }, (_, index) => index + 1);
const years = Array.from(
  { length: 2024 - 1960 + 1 },
  (_, index) => 1960 + index
);
export default JobPage;
