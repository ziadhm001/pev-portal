import { Flex, Image, Text } from "@chakra-ui/react";
import wave from "../../assets/images/wave.png";
import jetback from "../../assets/images/jetback.png";
import GreenButton from "../buttons/GreenButton";

function PEVAcceleraProgarm() {
  return (
    <Flex bg={"#ECECEC"} padding={"60px 0px"} justifyContent={"space-evenly"}>
      <Flex flexDirection={"column"} margin={"50px 0"}>
        <Text color={"#4BB543"} as={"b"} fontSize={"80px"} w={"700px"}>
          PEV Accelera Program
        </Text>
        <Text>
          Since 2009, our flagship program has combined structured sprints with
          constant feedback to help you reach the milestones needed for
          investment and growth.
        </Text>
        <br />
        <Flex>
          <Image src={wave} alt="wave" w={"114px"} h={"40px"} />
          <Image src={wave} alt="wave" w={"114px"} h={"40px"} />
        </Flex>

        <Flex>
          <Flex
            flexDirection={"column"}
            margin={"40px"}
            w={"242px"}
            h={"242px"}
            padding={"20px"}
            border={" 3px solid #4BB543"}
            boxShadow={"0px 0px 20px 0px #0000004D"}
            borderRadius={"15px"}
          >
            <Image
              src={jetback}
              alt="jetback"
              w={"47px"}
              h={"47px"}
              marginBottom={"10px"}
            />
            <Text as={"b"}> Proven Methodology</Text>
            <Text>
              {" "}
              Our process helps you build a fundable business faster, and
              cheaper. No theoretical 'homework' here.
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            margin={"40px"}
            w={"242px"}
            h={"242px"}
            padding={"20px"}
            border={" 3px solid #4BB543"}
            boxShadow={"0px 0px 20px 0px #0000004D"}
            borderRadius={"15px"}
          >
            <Image
              src={jetback}
              alt="jetback"
              w={"47px"}
              h={"47px"}
              marginBottom={"10px"}
            />
            <Text as={"b"}> Constant Feedback</Text>
            <Text>
              {" "}
              Weekly Feedback Sessions, Office Hours and Working Groups ensure
              that you move quickly, and smartly.
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            margin={"40px"}
            w={"242px"}
            h={"242px"}
            padding={"20px"}
            border={" 3px solid #4BB543"}
            boxShadow={"0px 0px 20px 0px #0000004D"}
            borderRadius={"15px"}
          >
            <Image
              src={jetback}
              alt="jetback"
              w={"47px"}
              h={"47px"}
              marginBottom={"10px"}
            />
            <Text as={"b"}> Supportive Network</Text>
            <Text>
              {" "}
              You don't have to do it alone! Immediately get a team of
              supporters that are invested in your success.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bg={"#FAF0E7"}
        w={"417px"}
        border={" 3px solid #4BB543"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
        borderRadius={"15px"}
        padding={"20px"}
        flexDirection={"column"}
        mt={12}
      >
        <Flex
          bg={"white"}
          h={"133px"}
          w={"368px"}
          borderRadius={"15px"}
          padding={"20px"}
        >
          <Text fontSize="32px" as={"b"}>
            Egypt - Middle East Winter 2024
          </Text>
        </Flex>
        <br />
        <Text color={"#667085"}>
          This program will contain both online and in-person events, but all
          required sessions will be online.
        </Text>
        <br />
        <Flex justifyContent={"space-around"}>
          <Flex flexDirection={"column"}>
            <Text color={"#4BB543"}> Early deadline</Text>
            <Text> Feb 18, 2024</Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Text color={"#4BB543"}> Final deadline</Text>
            <Text> Apr 07, 2024</Text>
          </Flex>
        </Flex>
        <br />
        <br />
        <br />
        <Flex
          bg={"white"}
          h={"133px"}
          w={"368px"}
          borderRadius={"15px"}
          padding={"20px"}
          border={" 3px solid #4BB543"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize="32px" as={"b"} color={"#4BB543"}>
            Entrance Fee
          </Text>
          <Text as="b">$299</Text>
          <Text>$399 After early Deadline</Text>
        </Flex>
        <GreenButton label={"Apply Now →"} margin={"20px 0"} h="72px" />
      </Flex>
    </Flex>
  );
}

export default PEVAcceleraProgarm;
