import { Flex, Image, Text } from "@chakra-ui/react";
import apply from "../../assets/images/apply.png";
import GreenOutlinedButton from "../buttons/GreenOutlinedButton";

function ApplyBanner() {
  return (
    <Flex
      w={"1216px"}
      h={"373px"}
      bg={" linear-gradient(99.57deg, #4BB543 39.61%, #A8BE38 99.12%)"}
      margin={"100px auto"}
      borderRadius={"15px"}
    >
      <Image src={apply} alt="apply" w={"45%"} h={"100%"} />

      <Flex
        flexDirection={"column"}
        h={"100%"}
        justifyContent={"center"}
        margin={" 0 40px"}
      >
        <Text color={"white"} as={"b"}>
          {" "}
          Apply to PEV Accelera Program
        </Text>
        <br />
        <Text fontSize={"40px"} as={"b"} lineHeight={"39px"}>
          Join the world's largest pre-seed startup accelerator
        </Text>
        <br />
        <Text color={"white"}>
          Make years of progress in just a few months through our proven,
          business-building Growth Sprints. No theoretical 'homework' here.
        </Text>
        <GreenOutlinedButton
          label={"Apply Now →"}
          margin={"20px 0"}
          w={"185px"}
          bg={"rgba(255, 255, 255, 0.5);"}
          color={"white"}
          border=" 1.69px solid #FFFFFF"
        />
      </Flex>
    </Flex>
  );
}

export default ApplyBanner;
