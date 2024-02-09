import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import backgroundImage from "../assets/images/background.jpg";
import logo1 from "../assets/images/logo1.png";

function RegisterationLayout({ children }) {
  return (
    <Stack
      minH={"100svh"}
      direction={{ base: "column", md: "row" }}
      spacing={0}
    >
      <Flex display={{ base: "none", md: "flex" }} w={{ base: "0", md: "50%" }}>
        <Flex
          direction={"column"}
          h={"100%"}
          zIndex={1}
          justifyContent={"space-between"}
          backgroundColor={"rgba(0,0,0,0.5)"}
          paddingTop={"100px"}
          paddingBottom={"100px"}
          paddingLeft={"100px"}
        >
          <Image src={logo1} alt={"logo"} h={"280px"} w={"400px"} />
          <Stack spacing={4} zIndex={1}>
            <Text
              fontSize="48px"
              fontWeight="bold"
              color={"brand.300"}
              zIndex={1}
            >
              {"Let's Get Started"}
            </Text>
            <Text fontSize="20px" color={"white"} zIndex={1}>
              PEV is the leading platform supporting entrepreneurs, mentors,
              investors and business professionals, strengthening the startup
              community in Africa, Latin America and beyond.
            </Text>
          </Stack>
        </Flex>
        <Image
          alt={"background image"}
          objectFit={"cover"}
          src={backgroundImage}
          width={"100%"}
          filter={"blur(8px)"}
          transform={"scale(1.1)"}
          position={"fixed"}
          height={"100svh"}
          zIndex={-1}
        />
      </Flex>
      <Flex
        p={10}
        flex={1}
        align={"center"}
        justify={"center"}
        direction={"column"}
        zIndex={1}
        bg={"rgba(255,255,255,1)"}
        justifyContent={"space-between"}
        m={0}
      >
        {children}
      </Flex>
    </Stack>
  );
}

export default RegisterationLayout;
