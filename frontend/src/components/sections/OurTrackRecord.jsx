import { Flex, Text, Stack } from "@chakra-ui/react";
function OurTrackRecord() {
  return (
    <Flex
      bg="white "
      justifyContent="center"
      alignItems="center"
      pt={8}
      pb={8}
      boxShadow={"0px 2px 20px 1px #00000045"}
    >
      <Stack
        spacing={4}
        align={"center"}
        p={8}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Text fontSize="48px" fontWeight="700" color="black">
          {" "}
          Our Track Record
        </Text>
        <Text>
          {" "}
          Everything you need to convert, engage, and retain more users.
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={"80px"}
          p={8}
          color={"#4BB543"}
        >
          <Stack
            borderRight={{ base: "none", md: "1px solid " }}
            pr={8}
            borderBottom={{ base: "1px solid ", md: "none" }}
          >
            <Text fontSize={"64px"} fontWeight={"700"}>
              40+
            </Text>
            <Text>Integerations</Text>
          </Stack>
          <Stack
            borderRight={{ base: "none", md: "1px solid " }}
            pr={8}
            borderBottom={{ base: "1px solid ", md: "none" }}
          >
            <Text fontSize={"64px"} fontWeight={"700"}>
              600%
            </Text>
            <Text>Return On Investment</Text>
          </Stack>
          <Stack pr={8}>
            <Text fontSize={"64px"} fontWeight={"700"}>
              4K
            </Text>
            <Text>Global customers</Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default OurTrackRecord;
