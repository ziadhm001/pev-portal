import { Flex, Text } from "@chakra-ui/react";

function PrimeNetwork() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      margin={"40px 0"}
      padding={"60px"}
      bg={"#39807F"}
      boxShadow={"0px 0px 20px 0px #0000004D"}
    >
      <Text fontSize={"96px"} color={"#A8BE38"}>
        Prime Elevate Venture Network
      </Text>
      <br />
      <Text fontSize={"48px"} color={"white"} textAlign={"center"}>
        Alumni ready to raise funding can get matched with investors through the
        FI Venture Network
      </Text>
      <br />
      <Text color="#4BB543" textAlign={"center"}>
        The PEV Community Network is an exclusive network of investors actively
        funding pre-seed and seed-stage startups before anyone else. With a
        focus on investors actively participating in a startup's first or second
        round of funding, FIVN includes angels, accelerators, and pre-seed/ seed
        stage investors across multiple sectors and continents.
      </Text>
    </Flex>
  );
}

export default PrimeNetwork;
