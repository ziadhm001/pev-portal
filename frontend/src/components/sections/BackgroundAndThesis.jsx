import { Stack, Text } from "@chakra-ui/react";
import GradientLine from "../gradient/GradientLine";

function BackgroundAndThesis() {
  return (
    <Stack bg={"gray.100"}>
      <Stack
        spacing={4}
        align={"center"}
        alignContent={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        px={"100px"}
        py={"50px"}
      >
        <Text fontSize="48px" fontWeight="600" color="#4BB543">
          Background
        </Text>
        <Text>
          PEV was founded in 2024 with the mission to build up Africa’s start-up
          community. We have grown organically over the years into what is now
          the leading community working towards building high-growth,
          high-impact companies globally with the ambition to transform society.
        </Text>
      </Stack>
      <Stack
        spacing={4}
        align={"center"}
        p={8}
        alignContent={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        px={"100px"}
        py={"50px"}
      >
        <Text fontSize="48px" fontWeight="600" color="#4BB543">
          Our Thesis
        </Text>
        <Text>
          At PEV, we believe entrepreneurship is a key driver for development.
          Specifically, high-growth, high-potential ventures working to develop
          important innovations and disruptive new business models are uniquely
          able to capture sustainable economic growth.
        </Text>
        <Text>
          These ventures builds strong communities, representing a significant
          source of employment and a reliable income stream for future
          generations. The entrepreneurs PEV exists to support contribute up to
          two-thirds of national GDP and provide the foundation for a stable
          middle class.
        </Text>
      </Stack>
      <GradientLine zIndex={10} />
    </Stack>
  );
}

export default BackgroundAndThesis;
