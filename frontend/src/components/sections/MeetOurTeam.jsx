import { Flex, Text, Stack, Grid, Avatar } from "@chakra-ui/react";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
function MeetOurTeam() {
  return (
    <Flex>
      <Stack spacing={4} p={8} w={"100%"} px={"100px"} align={"center"}>
        <Text fontSize="32px" fontWeight={"600"}>
          Meet Our Team
        </Text>
        <Text fontSize="18px" color={"gray.500"}>
          Our central operations are run from our Palo Alto Headquarters with a
          small team of incredibly passionate people.
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
          p={8}
          w={"100%"}
        >
          <Flex
            direction={"column"}
            p={8}
            borderRadius={8}
            w={"100%"}
            align={"center"}
            bg={"#F9FAFB"}
          >
            <Avatar
              size={"2xl"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize="24px" color={"black"}>
              Dan Abrahmov
            </Text>
            <Text fontSize="18px" color={"#4BB543"}>
              CEO & Founder
            </Text>
            <Text fontSize="18px" color={"gray.500"}>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </Text>
            <Stack direction={"row"} spacing={4} color={"gray.500"} pt={4}>
              <FiLinkedin size={24} />
              <FiFacebook size={24} />
              <FiTwitter size={24} />
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            p={8}
            borderRadius={8}
            w={"100%"}
            align={"center"}
            bg={"#F9FAFB"}
          >
            <Avatar
              size={"2xl"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize="24px" color={"black"}>
              Dan Abrahmov
            </Text>
            <Text fontSize="18px" color={"#4BB543"}>
              CEO & Founder
            </Text>
            <Text fontSize="18px" color={"gray.500"}>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </Text>
            <Stack direction={"row"} spacing={4} color={"gray.500"} pt={4}>
              <FiLinkedin size={24} />
              <FiFacebook size={24} />
              <FiTwitter size={24} />
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            p={8}
            borderRadius={8}
            w={"100%"}
            align={"center"}
            bg={"#F9FAFB"}
          >
            <Avatar
              size={"2xl"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize="24px" color={"black"}>
              Dan Abrahmov
            </Text>
            <Text fontSize="18px" color={"#4BB543"}>
              CEO & Founder
            </Text>
            <Text fontSize="18px" color={"gray.500"}>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </Text>
            <Stack direction={"row"} spacing={4} color={"gray.500"} pt={4}>
              <FiLinkedin size={24} />
              <FiFacebook size={24} />
              <FiTwitter size={24} />
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            p={8}
            borderRadius={8}
            w={"100%"}
            align={"center"}
            bg={"#F9FAFB"}
          >
            <Avatar
              size={"2xl"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize="24px" color={"black"}>
              Dan Abrahmov
            </Text>
            <Text fontSize="18px" color={"#4BB543"}>
              CEO & Founder
            </Text>
            <Text fontSize="18px" color={"gray.500"}>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </Text>
            <Stack direction={"row"} spacing={4} color={"gray.500"} pt={4}>
              <FiLinkedin size={24} />
              <FiFacebook size={24} />
              <FiTwitter size={24} />
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            p={8}
            borderRadius={8}
            w={"100%"}
            align={"center"}
            bg={"#F9FAFB"}
          >
            <Avatar
              size={"2xl"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text fontSize="24px" color={"black"}>
              Dan Abrahmov
            </Text>
            <Text fontSize="18px" color={"#4BB543"}>
              CEO & Founder
            </Text>
            <Text fontSize="18px" color={"gray.500"}>
              Former co-founder of Opendoor. Early staff at Spotify and
              Clearbit.
            </Text>
            <Stack direction={"row"} spacing={4} color={"gray.500"} pt={4}>
              <FiLinkedin size={24} />
              <FiFacebook size={24} />
              <FiTwitter size={24} />
            </Stack>
          </Flex>
        </Grid>
      </Stack>
    </Flex>
  );
}

export default MeetOurTeam;
