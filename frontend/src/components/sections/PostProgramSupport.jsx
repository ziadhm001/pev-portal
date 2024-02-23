import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import revenue from "../../assets/images/revenue.png";
import check from "../../assets/images/check.svg";

function PostProgramSupport() {
  return (
    <Flex padding={"60px"} flexDirection={"column"} alignItems={"center"}>
      <Flex>
        <Flex flexDirection={"column"} margin={"40px 20px"}>
          <Text color={"#4BB543"} fontSize={"48px"}>
            Post-Program Support
          </Text>
          <br />
          <Text color="#667085">
            Founder Institute Alumni get access to a series of advanced
            accelerator programs, ongoing support from our Silicon Valley Team,
            valuable partner and service discounts, and more to continue
            building the business for years to come.
          </Text>
          <br />
          <Text color="#667085">
            Founder Institute Alumni get access to a series of advanced
            accelerator programs, ongoing support from our Silicon Valley Team,
            valuable partner and service discounts, and more to continue
            building the business for years to come.
          </Text>
          <br />
          <Text color="#667085">
            There are no hidden costs, additional contracts or surprise
            subscription fees: all our post-program support is free and
            exclusive to FI Alumni companies, for life.
          </Text>
        </Flex>
        <Image src={revenue} alt="revenue" w={"656px"} h={"656px"} />
      </Flex>
      <Flex>
        <Flex
          flexDirection={"column"}
          margin={"40px"}
          w={"477px"}
          padding={"20px"}
          borderRadius={"15px"}
          boxShadow={"0px 0px 20px 0px #0000004D"}
          border={" 3px solid #4BB543"}
          bg={"#FAF0E7"}
        >
          <Flex alignItems={"center"} alignSelf={"center"}>
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
              Continued Support
            </Text>
          </Flex>
          <br />
          <Divider />
          <br />
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Dedicated Alumni Support Team in Silicon Valley
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Access to the worlds largest network of mentors and investors
              (35,000+)
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Private Networking Events and Sessions
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>$2M in partner discounts</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Office Hours with Mentors</Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>Potential introductions to investors</Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          margin={"40px"}
          w={"477px"}
          padding={"20px"}
          borderRadius={"15px"}
          boxShadow={"0px 0px 20px 0px #0000004D"}
          border={" 3px solid #4BB543"}
          bg={"#FAF0E7"}
        >
          <Flex alignItems={"center"} alignSelf={"center"}>
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
              Structured Post-Programs
            </Text>
          </Flex>
          <br />
          <Divider />
          <br />
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              A series of 3-month accelerators where you work with our Silicon
              Valley HQ team to reach your next milestones
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              Funding Lab helps get your lead investor within 6 months
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              P/M Fit Lab (2023) helps you get to Product/Market Fit
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>
              FI Venture Network gets you intros to investors.
            </Text>
          </Flex>
          <Flex marginTop={"20px"}>
            <Image src={check} marginRight={"10px"} alignSelf={"flex-start"} />
            <Text color={"#667085"}>100% FREE for Alumni</Text>
          </Flex>
        </Flex>
      </Flex>

      <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
        Alumni Benefits, in detail:
      </Text>
      <Text
        fontSize="20px"
        maxW={"768px"}
        color={"#667085"}
        textAlign={"center"}
      >
        Alumni also get free access to our Structured Post-Programs, known as
        Founder Lab
      </Text>
      <br />
    </Flex>
  );
}

export default PostProgramSupport;
