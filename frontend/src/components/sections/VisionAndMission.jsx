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
              “is that there are talented people everywhere whose potential can
              be unlocked to make an impact on the world through
              entrepreneurship.”
            </Text>
          </Flex>
        </Stack>
        <Stack spacing={4} color={"white"} p={8} w={"100%"} px={"100px"}>
          <Text fontSize="24px" color={"white"}>
            Mission
          </Text>
          <Flex bg={"white"} p={4} borderRadius={8} w={"100%"}>
            <Text fontSize="18px" color={"black"}>
              “is to empower talented and motivated people to build technology
              businesses that positively impact the world, no matter their
              location, race, gender, or sexual orientation.”
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default VisionAndMission;
