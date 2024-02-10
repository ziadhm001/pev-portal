import { Flex, Text, Stack, Container } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "@fontsource/open-sans/500.css";
function QuoteSection() {
  return (
    <Flex p={"100px"} boxShadow={"-2px -2px 15px 15px rgba(0, 0, 0, 0.25)"}>
      <svg
        width="110"
        height="89"
        viewBox="0 0 110 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M109.706 89H67.5673C63.4503 75.6803 61.3918 61.8762 61.3918 47.5878C61.3918 33.0571 65.1456 21.5537 72.6531 13.0775C80.4027 4.35918 91.785 0 106.8 0V20.3429C94.6912 20.3429 88.6367 27.7293 88.6367 42.502V49.4041H109.706V89ZM48.3143 89H6.17551C2.0585 75.6803 0 61.8762 0 47.5878C0 33.0571 3.75374 21.5537 11.2612 13.0775C19.0109 4.35918 30.3932 0 45.4082 0V20.3429C33.2993 20.3429 27.2449 27.7293 27.2449 42.502V49.4041H48.3143V89Z"
          fill="#4BB543"
        />
      </svg>

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
