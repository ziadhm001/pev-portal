import { Flex, Stack, Text } from "@chakra-ui/react";

function VisionAndMission() {
  return (
    <Flex bg={"brand.400"} w={"100%"}>
      <Stack spacing={4} color={"white"} w={"100%"}>
        <Stack spacing={4} color={"white"} p={8} w={"100%"} px={"100px"}>
          <Text fontSize="24px" color={"white"}>
            Vision
          </Text>
          <Flex bg={"white"} p={4} borderRadius={8} w={"100%"}>
            <Text fontSize="18px" color={"black"}>
            To be the leading catalyst for transformative entrepreneurship, driving sustainable development and shaping the future of the global startup landscape
            </Text>
          </Flex>
        </Stack>
        <Stack spacing={4} color={"white"} p={8} w={"100%"} px={"100px"}>
          <Text fontSize="24px" color={"white"}>
            Mission
          </Text>
          <Flex bg={"white"} p={4} borderRadius={8} w={"100%"}>
            <Text fontSize="18px" color={"black"}>
            At PEV, our mission is to empower visionary entrepreneurs across the MENA region and beyond, providing them with the essential tools, mentorship, and resources needed to transform innovative ideas into high-impact businesses. We are committed to fostering a vibrant ecosystem that nurtures genuine development, bridging the gap between entrepreneurs and the elements crucial for success. Our focus extends beyond mere investment, as we strive to cultivate a community where entrepreneurship thrives, driving societal transformation and economic progress on a global scale.
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default VisionAndMission;
