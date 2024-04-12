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
        Established in 2024, PEV has embarked on a mission to cultivate and elevate Egypt and the MENA region's burgeoning startup community. Over the years, we have experienced organic growth, evolving into the foremost community dedicated to fostering high-growth, high-impact companies on a global scale. Our unwavering ambition is to drive societal transformation through innovative entrepreneurship.
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
        Within the philosophy of PEV, we assert that entrepreneurship plays a pivotal role in driving development. In particular, ventures characterized by high growth and significant potential, focused on pioneering innovations and disruptive business models, possess a distinctive capacity to foster sustainable economic progress.
        </Text>
        <Text>
        These ventures contribute to the establishment of robust communities, serving as substantial sources of employment and reliable income streams for future generations. The entrepreneurs supported by PEV make substantial contributions, accounting for up to two-thirds of the national GDP and laying the groundwork for a stable middle class.
        </Text>
      </Stack>
      <GradientLine zIndex={10} />
    </Stack>
  );
}

export default BackgroundAndThesis;
