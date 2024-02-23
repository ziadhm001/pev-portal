import { Flex, Text, Image } from "@chakra-ui/react";
import women from "../../assets/images/women.png";
import logos from "../../assets/images/logos.png";
import circleQuote from "../../assets/images/circle-quote.png";

function Funds() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      padding={"50px"}
      bg={"#ECECEC"}
    >
      <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
        Over $1.75BN in Funding Raised by PEV Alumni
      </Text>
      <Text
        fontSize="20px"
        maxW={"768px"}
        color={"#667085"}
        textAlign={"center"}
      >
        The Prime Elevate’s global scale and number of successful Alumni is
        truly unprecedented.
      </Text>
      <br />

      <Flex bg={"#FAF0E7"} borderRadius={"15px"}>
        <Image src={women} />
        <Flex flexDirection={"column"} padding={"50px"}>
          <Image src={circleQuote} w="66px" h="66px" />
          <br />
          <Text fontSize={"32px"} fontWeight={"500"}>
            "The real question is: can the Founder Institute be game-changing
            for your business? The answer is yes. Without FI, Udemy may have
            never raised any money."
          </Text>
          <Image src={logos} w="392px" h="45px" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Funds;
