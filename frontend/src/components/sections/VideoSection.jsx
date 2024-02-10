import { Flex, Text, Stack, Container } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/400.css";

function VideoSection({ myRef }) {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      height={"100%"}
      bg={"#FAF0E7"}
      ref={myRef}
      p={20}
    >
      <Container maxW={"container.lg"}>
        <Stack
          spacing={4}
          zIndex={1}
          align={"center"}
          textAlign={"center"}
          width={"100%"}
          padding={12}
          height={{
            base: "auto",
            md: "700px",
            lg: "700px",
            xl: "700px",
          }}
        >
          <Text fontSize="48px" textAlign={"center"} fontWeight={"700"}>
            We turn Startups into{" "}
            <Text as={"span"} color={"brand.300"}>
              Superheros
            </Text>
          </Text>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url="https://www.youtube.com/watch?v=lNdOtlpmH5U&ab_channel=AliAbdaal"
            controls={true}
            style={{
              borderRadius: "20px",
            }}
          />

          <Text fontSize="24px" textAlign={"center"} fontWeight={"400"}>
            PEV is the leading platform supporting entrepreneurs, mentors,
            investors and business professionals, strengthening the startup
            community in Africa, Latin America and beyond.
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}

export default VideoSection;
