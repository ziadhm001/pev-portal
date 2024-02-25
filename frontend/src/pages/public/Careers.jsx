import DefaultLayout from "../../layouts/DefaultLayout";
import { Flex, Select, Text } from "@chakra-ui/react";
export default function Careers() {
  return (
    <DefaultLayout>
      <Flex
        direction="column"
        gap={10}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          textAlign={"center"}
          fontSize={"48px"}
          mt={"10vh"}
          fontWeight={"bold"}
        >
          Careers at Prime Elevate
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#667085",
          }}
          fontSize={"20px"}
          w={"60%"}
        >
          Working at PEV is a unique opportunity to help founders build their
          companies at all stages, and offers unprecedented insight into the
          greater startup ecosystem. See open positions below across our
          software, investment and operations teams.
        </Text>
        <Flex w={"60%"} direction={"column"}>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            Open positions
          </Text>
          <Flex gap={10}>
            <Select placeholder="department"></Select>
            <Select placeholder="location"></Select>
            <Select placeholder="Employment type"></Select>
          </Flex>

          <Flex direction={"column"} gap={4} mt={4}>
            <JobEntry
              title={"Outreach"}
              description={"Senior Video Producer"}
              location={"Egypt"}
              type={"Full Time"}
            />
            <JobEntry
              title={"People OPS"}
              description={"Junior Executive Assistant"}
              location={"Egypt"}
              type={"Full Time"}
            />
            <JobEntry
              title={"Software"}
              description={"Infrastructure Software Engineer"}
              location={"Egypt"}
              type={"Full Time"}
            />
          </Flex>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

function JobEntry({ title, description, location, type }) {
  return (
    <Flex direction={"column"} gap={1}>
      <Text fontWeight={"bold"}>{title}</Text>
      <Text
        fontWeight={"bold"}
        textColor={"#4BB543"}
        textTransform={"uppercase"}
      >
        {description}
      </Text>
      <Text>
        {title} . {location} . {type}
      </Text>
    </Flex>
  );
}
