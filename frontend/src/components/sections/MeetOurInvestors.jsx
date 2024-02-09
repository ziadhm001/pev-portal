import { Flex, Text, Stack, Box } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import a4 from "../../assets/images/a4.png";
import a5 from "../../assets/images/a5.png";

import "@fontsource/open-sans/700.css";

function MeetOurInvestors() {
  return (
    <>
      <Box
        w={"100%"}
        height={"20px"}
        bg={
          " linear-gradient(90deg, #FAF0E7 -0.55%, #5A7729 14.44%, #39807F 31.42%, #5A7729 48.4%, #4BB543 64.38%, #A8BE38 81.86%, #4BB543 99.34%)"
        }
        position={"relative"}
        filter={"blur(10px)"}
        transform={"scale(1.1) translateY(3px)"}
        zIndex={-1}
      />
      <Flex justifyContent="center" alignItems="center" pt={8} pb={8}>
        <Stack spacing={4} align={"center"} p={8}>
          <Text fontSize="48px" fontWeight="700" color="black">
            {" "}
            Meet Out Investors
          </Text>
          <Text>
            {" "}
            PEV gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={1}
            p={8}
            zIndex={-1}
            mt={"100px"}
          >
            <Avatar
              size="2xl"
              w={"200px"}
              height={"200px"}
              src={a1}
              bg={"beige"}
            />
            <Avatar
              size="2xl"
              src={a2}
              w={"200px"}
              height={"200px"}
              bg={"beige"}
            />
            <Avatar
              size="3xl"
              w={"200px"}
              height={"200px"}
              src={a5}
              bg={"beige"}
            />
            <Avatar
              size="2xl"
              src={a3}
              bg={"beige"}
              w={"200px"}
              height={"200px"}
            />
            <Avatar
              size="2xl"
              src={a4}
              bg={"beige"}
              w={"200px"}
              height={"200px"}
            />
          </Stack>
        </Stack>
      </Flex>
      <Box
        w={"100%"}
        height={"20px"}
        bg={
          " linear-gradient(90deg, #FAF0E7 -0.55%, #5A7729 14.44%, #39807F 31.42%, #5A7729 48.4%, #4BB543 64.38%, #A8BE38 81.86%, #4BB543 99.34%)"
        }
        position={"relative"}
        filter={"blur(10px)"}
        transform={"scale(1.1) translateY(3px)"}
        zIndex={-1}
      />
    </>
  );
}

export default MeetOurInvestors;
