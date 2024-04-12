import { Flex, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import how from "../../assets/images/how.svg";
import what from "../../assets/images/what.svg";
import Arrow from "../../assets/images/Arrow.svg";

function WhatHow() {
  return (
    <Flex
      h={"566px"}
      bg={"#FAF0E7"}
      justifyContent={"center"}
      boxShadow={"0px 0px 20px 0px #0000004D"}
    >
      <Flex justifyContent={"space-around"} w={"90%"}>
        <Flex
          flexDirection={"column"}
          marginTop={"120px"}
          w={"40%"}
          alignItems={"center"}
        >
          <Image src={what} alt="What?" marginBottom={"20px"} />
          <Text
            fontSize="4xl"
            fontWeight={"600"}
            color={"#B3261E"}
            alignSelf={"self-start"}
          >
            Problem We Face
          </Text>
          <Text color={"#667085"}>
            Startups face a multitude of challenges, from securing funding and attracting talent to navigating market uncertainties and fierce competition. Operational inefficiencies, scalability issues, and regulatory complexities further compound their journey.
          </Text>
        </Flex>
        <Image
          src={Arrow}
          alt="arrow"
          height={"81px"}
          width={"81px"}
          alignSelf={"center"}
        />
        <Flex
          flexDirection={"column"}
          marginTop={"120px"}
          w={"40%"}
          alignItems={"center"}
        >
          <Image src={how} alt="How?" marginBottom={"20px"} />
          <Text
            fontSize="4xl"
            fontWeight={"600"}
            color={"#4BB543"}
            alignSelf={"self-start"}
          >
            Program Solution
          </Text>
          <Text color={"#667085"}>
          The Accelera program we offer presents a remarkable framework, simplifying the process of building startups. Enhanced by perspectives from a worldwide network of advisors, we deliver thorough assistance at each phase of development.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default WhatHow;
