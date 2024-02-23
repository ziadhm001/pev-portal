import { Flex, Text, Image, Divider } from "@chakra-ui/react";
import dollar from "../../assets/images/dollar.png";
import check from "../../assets/images/check.svg";
import GreenButton from "../buttons/GreenButton";

function PrimeProgram() {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      margin={"40px 0"}
      padding={"60px"}
    >
      <Text fontWeight={"600"} fontSize={"48px"}>
        Prime Elevate Ventures Programs
      </Text>
      <Flex>
        <Flex
          flexDirection={"column"}
          w={"342px"}
          boxShadow={"0px 4px 5px 1px #00000026"}
          border={"1px solid #4BB543"}
          borderRadius={"20px"}
          margin={"15px"}
          padding={"15px"}
        >
          <Image src={dollar} alt="companyImage" w={"54px"} h={"54px"} />

          <br />
          <Text as="b">Head Start</Text>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Access tools, best practices, and prep work to raise money from
              professional investors
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Self-paced course, monthly open enrollment + interactive Q&A
              sessions - RSVP in Alumni Dashboard
            </Text>
          </Flex>
          <br />
          <Divider />
          <br />
          <Text as="b" color={"#4BB543"}>
            Goal:
          </Text>
          <Text as="b" color={"#667085"}>
            Plan your fundraise
          </Text>
          <br />
          <Divider />
          <br />
          <GreenButton label={"Website"} width={"110px"} />
        </Flex>
        <Flex
          flexDirection={"column"}
          w={"342px"}
          boxShadow={"0px 4px 5px 1px #00000026"}
          border={"1px solid #4BB543"}
          borderRadius={"20px"}
          margin={"15px"}
          padding={"15px"}
        >
          <Image src={dollar} alt="companyImage" w={"54px"} h={"54px"} />

          <br />
          <Text as="b">Funfing Lab</Text>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Leverage a network of fundraising advisors for expertise and
              negotiation assistance
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Structured feedback on pitch deck, term sheet, cap table, data
              room, and strategy
            </Text>
          </Flex>
          <br />
          <Divider />
          <br />
          <Text as="b" color={"#4BB543"}>
            Goal:
          </Text>
          <Text as="b" color={"#667085"}>
            Secure your lead investor
          </Text>
          <br />
          <Divider />
          <br />
          <GreenButton label={"Website"} width={"110px"} />
        </Flex>
        <Flex
          flexDirection={"column"}
          w={"342px"}
          boxShadow={"0px 4px 5px 1px #00000026"}
          border={"1px solid #4BB543"}
          borderRadius={"20px"}
          margin={"15px"}
          padding={"15px"}
        >
          <Image src={dollar} alt="companyImage" w={"54px"} h={"54px"} />

          <br />
          <Text as="b">PE Venture Network</Text>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Deal syndication to a global network of investors
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Intros to Investors & Advisors</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Deal structure and closing assistance</Text>
          </Flex>
          <br />
          <br />
          <Divider />
          <br />
          <Text as="b" color={"#4BB543"}>
            Goal:
          </Text>
          <Text as="b" color={"#667085"}>
            Plan your fundraise
          </Text>
          <br />
          <Divider />
          <br />
          <GreenButton label={"Website"} width={"110px"} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PrimeProgram;
