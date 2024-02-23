import { Flex, Text, Image } from "@chakra-ui/react";
import girlImage from "../../assets/images/BG.png";
import check from "../../assets/images/check.svg";

export default function WhoShouldAttend() {
  return (
    <Flex justifyContent={"space-between"} gap={10}>
      <Image w={"600px"} objectFit={"cover"} src={girlImage}></Image>
      <div>
        <Text
          background={
            "linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"
          }
          backgroundClip={"text"}
          color={"transparent"}
          fontWeight={"700"}
          fontSize={40}
          mt={3}
        >
          Who Should Attend an Infosession?
        </Text>
        <Flex marginTop={"20px"}>
          <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
          <Text color={"#667085"}>
            Anyone who has an idea for a startup or an early-stage company
          </Text>
        </Flex>
        <Flex marginTop={"20px"}>
          <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
          <Text color={"#667085"}>
            Anyone with a pre-seed startup (pre-funding)
          </Text>
        </Flex>
        <Text
          background={
            "linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"
          }
          backgroundClip={"text"}
          color={"transparent"}
          fontWeight={"700"}
          fontSize={40}
          mt={12}
        >
          What is the Agenda?
        </Text>
        <Flex marginTop={"20px"}>
          <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
          <Text color={"#667085"}>
            Short Presentation on the Founder Institute
          </Text>
        </Flex>
        <Flex marginTop={"20px"}>
          <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
          <Text color={"#667085"}>Question & Answer Session via live chat</Text>
        </Flex>
      </div>
    </Flex>
  );
}
