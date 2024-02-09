import { Flex, Text, Stack, Container } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "@fontsource/open-sans/500.css";
function QuoteSection() {
  return (
    <Flex p={"100px"} boxShadow={"-2px -2px 15px 15px rgba(0, 0, 0, 0.25)"}>
      <Container maxW={"container.lg"}>
        <Stack spacing={6} p={8} alignItems={"start"} fontWeight={"500"}>
          <Text fontSize="32px" textAlign={"center"}>
            “People now recognise that having a good performance conversation
            means that something happens as a result.”
          </Text>
          <Text fontSize="20px" textAlign={"center"} mt={4} color={"#4BB543"}>
            Read Success Story
            <ArrowForwardIcon w={6} h={6} ml={2} />
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}

export default QuoteSection;
