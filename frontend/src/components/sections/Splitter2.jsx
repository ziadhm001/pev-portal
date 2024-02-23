import { Flex, Text } from "@chakra-ui/react";
import GreenButton from "../buttons/GreenButton";

function Splitter2() {
  return (
    <Flex
      bg={"#39807F"}
      boxShadow={"0px 0px 20px 0px #0000004D"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex w={"80%"} justifyContent={"space-between"} alignItems={"center"}>
        <Flex color={"white"} flexDirection={"column"} margin={"20px"}>
          <Text fontSize={"40px"}>Build a fundable business in Egypt</Text>
          <Text>
            Over 75 Core Programs are accepting applications worldwide,
            including the Egypt program.
          </Text>
        </Flex>

        <GreenButton
          label={"Apply to Accelera →"}
          boxShadow={"0px 0px 30px 0px #0000004D"}
        />
      </Flex>
    </Flex>
  );
}

export default Splitter2;
