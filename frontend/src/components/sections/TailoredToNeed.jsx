import { Flex, Text, Image } from "@chakra-ui/react";
import jetback from "../../assets/images/jetback.png";
import Arrow from "../../assets/images/Arrow.svg";
import check from "../../assets/images/check.svg";
function TailoredToNeed() {
  return (
    <Flex
      bg={"#FAF0E7"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"50px"}
      boxShadow={"0px 0px 20px 0px #0000004D"}
      width={"100%"}
    >
      <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
        Tailored to Your Needs
      </Text>
      <Text
        fontSize="20px"
        maxW={"768px"}
        color={"#667085"}
        textAlign={"center"}
      >
        Since different founders have different needs, the 4- month Core Program
        is split into tracks with unique milestones and sprints. Founders also
        get sprints specifically designed to address their unique business
        challenges.
      </Text>
      <br />
      <Flex direction={"column"} justifyContent={"center"} gap={1}>
        <Text
          alignSelf={"flex-start"}
          as={"b"}
          bg={"linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)"}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontSize={"32px"}
        >
          TYPICAL FI APPLICANTS ("PRE-SEED STAGE")
        </Text>

        <Flex alignItems={"center"}>
          <Flex
            flexDirection={"column"}
            w={"342px"}
            h={"181px"}
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
                Idea Stage
              </Text>
            </Flex>
            <Flex marginTop={"20px"}>
              <Image
                src={check}
                marginRight={"10px"}
                alignSelf={"flex-start"}
              />
              <Text color={"#667085"}>Just have an idea</Text>
            </Flex>
            <Flex marginTop={"20px"}>
              <Image
                src={check}
                marginRight={"10px"}
                alignSelf={"flex-start"}
              />
              <Text color={"#667085"}>May still be FT employed</Text>
            </Flex>
          </Flex>
          <Image
            src={Arrow}
            alt="arrow"
            w={"47px"}
            h={"47px"}
            marginBottom={"10px"}
          />
          <Flex
            flexDirection={"column"}
            w={"342px"}
            h={"181px"}
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
                Team / MVP
              </Text>
            </Flex>
            <Flex marginTop={"20px"}>
              <Image
                src={check}
                marginRight={"10px"}
                alignSelf={"flex-start"}
              />
              <Text color={"#667085"}>FT Team</Text>
            </Flex>
            <Flex marginTop={"20px"}>
              <Image
                src={check}
                marginRight={"10px"}
                alignSelf={"flex-start"}
              />
              <Text color={"#667085"}>Testing a prototype/ MVP</Text>
            </Flex>
          </Flex>
          <Image src={Arrow} alt="arrow" w={"47px"} h={"47px"} />
          <Flex
            flexDirection={"column"}
            w={"342px"}
            h={"181px"}
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
                Company
              </Text>
            </Flex>
            <Flex marginTop={"20px"}>
              <Image
                src={check}
                marginRight={"10px"}
                alignSelf={"flex-start"}
              />
              <Text color={"#667085"}>
                Live product with customers, some revenue
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TailoredToNeed;
