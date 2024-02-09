import { Flex, Text, Stack, Button } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";

function StillHavQuestions() {
  return (
    <Flex
      bg={"beige"}
      justifyContent="center"
      alignItems="center"
      p={4}
      borderRadius={8}
      boxShadow={"0px 2px 20px 1px #00000045"}
    >
      <Stack spacing={4} align={"center"} p={8}>
        <AvatarGroup size="lg" max={3}>
          <Avatar src={a1} bg={"purple"} />
          <Avatar src={a2} bg={"blue"} />
          <Avatar src={a3} bg={"pink"} />
        </AvatarGroup>
        <Stack spacing={4} align={"center"} p={8}>
          <Text fontWeight="700" color="black">
            {" "}
            Still Have Questions?
          </Text>
          <Text>
            {" "}
            Our team is here to help you. Contact us at the number below or
            email us at
          </Text>
          <Button bg={"#4BB543"} color={"white"} _hover={{ bg: "#4BB543" }}>
            {" "}
            Get in touch
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default StillHavQuestions;
