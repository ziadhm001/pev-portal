import { Flex, Image, Text } from "@chakra-ui/react";
import bullet1 from "../../assets/images/Bullet1.png";
import bullet2 from "../../assets/images/Bullet2.png";
import bullet3 from "../../assets/images/Bullet3.png";
import bullet4 from "../../assets/images/Bullet4.png";
import bullet5 from "../../assets/images/Bullet5.png";

function FloatingCards() {
  return (
    <Flex bg="#ECECEC" padding={"40px"} justifyContent={"space-evenly"}>
      <Flex flexDirection={"column"}>
        <Flex
          marginTop={"20px"}
          w={"566px"}
          h={"250"}
          bg={"white"}
          flexDirection={"column"}
          className="floating-card"
        >
          <Flex bg="#39807F" h={"12px"} w="100%" />
          <Flex padding={"20px"}>
            <Image
              src={bullet1}
              marginRight={"10px"}
              alignSelf={"flex-start"}
            />
            <Flex flexDirection={"column"} alignSelf={"flex-start"}>
              <Text fontSize={"40px"}>Join a Global Network</Text>
              <Text color={"#667085"}>
                Scale your team, develop new business opportunities, and recruit
                an amazing advisory board through the worlds largest network of
                startup founders, CEOs, advisors and investors.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          marginTop={"20px"}
          w={"566px"}
          h={"250"}
          bg={"#39807F"}
          flexDirection={"column"}
          className="floating-card"
        >
          <Flex bg="#A8BE38" h={"12px"} w="100%" />
          <Flex padding={"20px"}>
            <Image
              src={bullet2}
              marginRight={"10px"}
              alignSelf={"flex-start"}
            />
            <Flex flexDirection={"column"} alignSelf={"flex-start"}>
              <Text color={"white"} fontSize={"40px"}>
                Get Personalized Help from our HQ Team
              </Text>
              <Text color={"white"}>
                Our Silicon Valley-based Alumni Support Team will answer
                questions, check in on you, and help you through any specific
                business challenges as you grow the business.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          marginTop={"20px"}
          w={"566px"}
          h={"250"}
          bg={"white"}
          flexDirection={"column"}
          className="floating-card"
        >
          <Flex bg="#4BB543" h={"12px"} w="100%" />
          <Flex padding={"20px"}>
            <Image
              src={bullet3}
              marginRight={"10px"}
              alignSelf={"flex-start"}
            />
            <Flex flexDirection={"column"} alignSelf={"flex-start"}>
              <Text fontSize={"30px"}>Onboard to Post-Programs</Text>
              <Text color={"#667085"}>
                Get your company to the next major milestone through one of our
                Founder Labs - a series of advanced accelerator programs where
                you work closely with our Headquarters team to unlock the next
                phase of your business.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} margin={"40px 20px"}>
        <Flex
          marginTop={"20px"}
          w={"566px"}
          h={"250"}
          bg={"#4BB543"}
          flexDirection={"column"}
          className="floating-card"
        >
          <Flex bg="white" h={"12px"} w="100%" />
          <Flex padding={"20px"}>
            <Image
              src={bullet4}
              marginRight={"10px"}
              alignSelf={"flex-start"}
            />
            <Flex flexDirection={"column"} alignSelf={"flex-start"}>
              <Text color="white" fontSize={"30px"}>
                Onboard to Post-Programs
              </Text>
              <Text color="white">
                Get your company to the next major milestone through one of our
                Founder Labs - a series of advanced accelerator programs where
                you work closely with our Headquarters team to unlock the next
                phase of your business.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          marginTop={"20px"}
          w={"566px"}
          h={"250"}
          bg={"#FAF0E7"}
          flexDirection={"column"}
          className="floating-card"
        >
          <Flex bg="#5A7729" h={"12px"} w="100%" />
          <Flex padding={"20px"}>
            <Image
              src={bullet5}
              marginRight={"10px"}
              alignSelf={"flex-start"}
            />
            <Flex flexDirection={"column"} alignSelf={"flex-start"}>
              <Text fontSize={"30px"}>Onboard to Post-Programs</Text>
              <Text color={"#667085"}>
                Get your company to the next major milestone through one of our
                Founder Labs - a series of advanced accelerator programs where
                you work closely with our Headquarters team to unlock the next
                phase of your business.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FloatingCards;
