import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import backgroundImage from "../assets/images/background.jpg";
import logo1 from "../assets/images/logo1.png";

function ContactUsLayout({ children }) {
  return (
    <Stack
      minH={"100svh"}
      direction={{ base: "column", md: "row" }}
      spacing={0}
      paddingTop={{ base: "50px", md: "0" }}
    >
      <Flex display={{ base: "none", md: "flex" }} w={{ base: "0", md: "50%" }}>
        <Flex
          position={"absolute"}
          w={{
            base: "100%",
            md: "520px",
            lg: "620px",
            xl: "900px",
          }}
          h={{
            base: "100%",
            md: "80vh",
            lg: "80vh",
            xl: "80vh",
          }}
          top={"150px"}
          left={"70px"}
          zIndex={0}
          backgroundColor={"rgba(0,0,0,0.5)"}
        ></Flex>
        <Flex
          direction={"column"}
          h={"100%"}
          zIndex={1}
          justifyContent={"space-between"}
          paddingTop={"100px"}
          paddingBottom={"100px"}
          paddingLeft={"100px"}
          pos={"relative"}
          top={"-64px"}
        >
          <Image
            src={logo1}
            alt={"logo"}
            h={"280px"}
            w={"400px"}
            position={"relative"}
            top={"50px"}
            left={"-80px"}
            margin={"30px"}
          />
          <Stack spacing={4} zIndex={1} position={"relative"} top={"-80px"}>
            <Text
              fontSize="48px"
              fontWeight="bold"
              color={"brand.300"}
              zIndex={1}
              fontFamily={"catchye"}
            >
              {"GET IN TOUCH"}
            </Text>
            <Text fontSize="20px" color={"white"} zIndex={1}>
              PEV is the leading platform supporting entrepreneurs, mentors,
              investors and business professionals, strengthening the startup
              community in Africa, Latin America and beyond.
            </Text>
            <Stack spacing={"200px"} align="center" direction={"row"}>
              <Stack spacing={4}>
                <Text color={"brand.300"}>Cairo Office hours</Text>
                <Text color={"white"}> Sunday - Thursday</Text>
                <Text color={"white"}>8:00 AM - 5:00 PM</Text>
              </Stack>
              <Stack spacing={4} textAlign={"left"}>
                <Text color={"brand.300"}>Our Addresses</Text>
                <Text color={"white"}> Fifth settlement, Cairo, Egypt</Text>
              </Stack>
            </Stack>
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
          top={"-40px"}
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
        position={"relative"}
        top={"80px"}
      >
        {children}
      </Flex>
    </Stack>
  );
}

export default ContactUsLayout;
