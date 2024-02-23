import { Flex, Image, Text } from "@chakra-ui/react";
import grass from "../../assets/images/grass.png";
import people from "../../assets/images/people.png";

function FYI() {
  return (
    <Flex padding={"40px"}>
      <Flex flexDirection={"column"} margin={"40px 20px"}>
        <Text
          as={"b"}
          bg={"linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontSize={"48px"}
        >
          For Serious Founders at the Earliest Stages
        </Text>
        <br />
        <Text color={"#667085"}>
          FI Core is designed for founders at the pre-seed stage: including
          idea-stage founders, first-time founders, people making the leap from
          employee to entrepreneur, and small teams that are pre-funding.
        </Text>
        <br />
        <Text color={"#667085"}>
          We work with founders before they are ready to do a seed-accelerator
          or raise funding from professional investors.
        </Text>
        <br />
        <Image src={grass} alt="grass" w={"285px"} h="30px" />
      </Flex>
      <Image src={people} alt="people" />
    </Flex>
  );
}

export default FYI;
