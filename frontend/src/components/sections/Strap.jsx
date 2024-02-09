import { Flex, Stack, Button, Text, Container } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
function Strap() {
  return (
    <Flex
      bg={"brand.400"}
      boxShadow={"-1px -1px 15px 15px rgba(0, 0, 0, 0.2)"}
      color={"white"}
      height={"auto"}
      alignItems={"center"}
    >
      <Container maxW={"xlg"}>
        <Stack
          direction={"row"}
          spacing={6}
          p={8}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-around"}
        >
          <Text
            fontSize={{
              base: "14px",
              md: "32px",
              lg: "32px",
              xl: "32px",
            }}
            textAlign={"center"}
            fontWeight={"700"}
          >
            See how we helped Startups to grow 11x faster
          </Text>
          <Button
            bg={"#4BB543"}
            color={"white"}
            boxShadow={" 0px 4px 4px rgba(0, 0, 0, 0.25)"}
            fontSize={{
              base: "12px",
              md: "16px",
              lg: "16px",
              xl: "16px",
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Container>
    </Flex>
  );
}

export default Strap;
