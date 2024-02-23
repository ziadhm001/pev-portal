import { Flex, Text, Image } from "@chakra-ui/react";
import Chevron from "../../assets/images/Chevron.png";
import clock from "../../assets/images/clock.png";
import check from "../../assets/images/check.svg";

function TimeIsNow() {
  return (
    <Flex flexDirection={"column"} padding={"40px"} alignItems={"center"}>
      <Flex alignItems={"center"}>
        <Flex
          flexDirection={"column"}
          margin={"40px 20px"}
          h={"460px"}
          w={"373px"}
        >
          <Text
            as={"b"}
            bg={
              "linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"
            }
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontSize={"40px"}
          >
            'Wantrapreneurs' need not apply
          </Text>
          <br />
          <Text>
            FI is hard, because building a great business is much, much harder.
          </Text>
          <br />
          <Text>
            Our Admissions Process is designed to accept only high-potential
            entrepreneurs, and then less than 40% of accepted founders are able
            to graduate.
          </Text>
          <br />
          <Text> To complete the program, you must:</Text>
        </Flex>
        <Image src={Chevron} alt="chevron" h={"121px"} w={"121px"} />
        <Flex
          flexDirection={"column"}
          margin={"40px 20px"}
          h={"460px"}
          w={"500px"}
        >
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Keep up with the pace of the program by completing the weekly
              Growth Sprints, designed to take an average of 20 hours per week.
            </Text>
          </Flex>
          <br />
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              If you have not already, form a corporation that is
              investment-friendly (ex. a Delaware C-Corp in the U.S.).
            </Text>
          </Flex>
          <br />
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Meet a minimum ratings threshold from the program's Mentors, Local
              Leaders, and Peers. Every week your progress and strategy are
              rated and reviewed.
            </Text>
          </Flex>
          <br />
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Participants can drop out before the 'Revenue & Business Models'
              session (May 08, 2024) for a full refund. If you drop out after
              that you can join the next cohort and try again.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        margin={"40px 0"}
        bg={"#4BB543"}
        w={"90%"}
        borderRadius={"15px"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
      >
        <Image src={clock} alt="chevron" h={"146px"} w={"146px"} />
        <Flex flexDirection={"column"} margin={"40px 20px"}>
          <Text color="white" as={"b"} fontSize={"64px"}>
            The Time is Now
          </Text>
          <Text color="white">
            {" "}
            When the world changes, entrepreneurs are best positioned to take
            advantage and build the future, but only if they move quickly to
            respond to changing customer needs. The Founder Institute is
            designed to help you do just that. Apply to FI Core today.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TimeIsNow;
