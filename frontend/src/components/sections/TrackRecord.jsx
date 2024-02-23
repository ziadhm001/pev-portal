import { Divider, Flex, Text } from "@chakra-ui/react";

function TrackRecord() {
  return (
    <Flex justifyContent={"center"} padding={"40px"}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        padding={"60px"}
        borderRadius={"15px"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
        w={"70%"}
      >
        <Text as={"b"} fontSize={"52px"}>
          Our Track Records
        </Text>
        <Text>
          {" "}
          Our scale of successful portfolio companies across the globe is truly
          unprecedented.
        </Text>
        <br />
        <br />
        <Flex w={"100%"} justifyContent={"center"}>
          <Flex flexDirection="column" margin={"0 50px"} alignItems={"center"}>
            <Text color="#4BB543" as="b" fontSize={"64px"}>
              $30BN+
            </Text>
            <Text color="#4BB543">Estimate Portfolio Value</Text>
          </Flex>

          <Divider orientation="vertical" />
          <Flex flexDirection="column" margin={"0 50px"} alignItems={"center"}>
            <Text color="#4BB543" as="b" fontSize={"64px"}>
              $1.75BN+
            </Text>
            <Text color="#4BB543">Total Funding</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TrackRecord;
