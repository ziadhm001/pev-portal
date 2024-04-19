import { Flex, Text, Image } from "@chakra-ui/react";
import jetback from "../../assets/images/jetback.png";
import check from "../../assets/images/check.svg";

function Accomplish() {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} padding={"50px"}>
      <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
        What You’ll Accomplish
      </Text>
      <Text
        fontSize="20px"
        maxW={"768px"}
        color={"#667085"}
        textAlign={"center"}
      >
        The bar for graduating varies by individual, business, and stage. Some
        founders raise funding in the program, but at the very least you can
        expect to leave the program with the following:
      </Text>
      <br />

      <Flex>
        <Flex
          flexDirection={"column"}
          margin={"40px"}
          w={"488px"}
          padding={"20px"}
          borderRadius={"15px"}
          boxShadow={"0px 0px 20px 0px #0000004D"}
          border={" 3px solid #4BB543"}
          bg={"#fff"}
        >
          <Flex alignItems={"center"}>
            <Image
              src={jetback}
              alt="jetback"
              w={"47px"}
              h={"47px"}
              marginBottom={"10px"}
              marginRight={"10px"}
            />
            <Text
              fontSize={"32px"}
              as={"b"}
              bg={
                "linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"
              }
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Launch Track
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Fully Validated Business Idea & Vision
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Significant Progress on Team</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Significant Progress on Product</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Investor-friendly Corporation</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Formal Business Advisors</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Clear Milestones & Actionable Next Steps
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDirection={"column"}
          margin={"40px"}
          w={"488px"}
          borderRadius={"15px"}
          boxShadow={"0px 0px 20px 0px #0000004D"}
          padding={"20px"}
          border={" 3px solid #4BB543"}
          bg={"#fff"}
        >
          <Flex alignItems={"center"}>
            <Image
              src={jetback}
              alt="jetback"
              w={"47px"}
              h={"47px"}
              marginBottom={"10px"}
              marginRight={"10px"}
            />
            <Text
              fontSize={"32px"}
              as={"b"}
              bg={
                "linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"
              }
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Growth Track
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Significant KPI Growth</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Investment-ready Pitch Deck</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Diligence-ready Business</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Fully Validated Product & Team Roadmap
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Formal Advisory Board</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Clear Milestones & Actionable Next Steps
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Accomplish;
