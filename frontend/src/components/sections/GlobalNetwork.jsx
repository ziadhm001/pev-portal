import { Flex, Image, Text } from "@chakra-ui/react";
import network from "../../assets/images/network.png";

function GlobalNetwork() {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} margin={"40px 0"}>
      <Text fontWeight={"600"} fontSize={"48px"}>
        Our Global Network
      </Text>
      <Text color={"#667085"}>
        We live in a global economy, so PEV connects you to entrepreneurs,
        advisors, and investors across 200+ cities and 6 continents.
      </Text>
      <br />
      <br />
      <Image src={network} alt="network" w={"100%"} />
    </Flex>
  );
}

export default GlobalNetwork;
