import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser, FaLock, FaPlay } from "react-icons/fa";
import OverviewBg from "../../assets/images/overview-bg.png";
import GreenButton from "../buttons/GreenButton";
import { CgPlayButtonR } from "react-icons/cg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProgramHero({ setInView }) {
  const { inView, ref } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [inView]);
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      px={"10%"}
      mx={"auto"}
      flexDirection={"column"}
      gap={"40px"}
      backgroundImage={`url(${OverviewBg})`}
      ref={ref}
    >
      <Text
        mt={36}
        fontSize={"48px"}
        fontWeight={"700"}
        sx={{
          background:
            "linear-gradient(90deg, #39807F 0%, #4BB543 50.5%, #A8BE38 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        A Proven Methodology
      </Text>
      <Text w={"50%"} fontSize={"20px"} textColor={"white"}>
      A New Era of Business Eco-systems 
PEV spearheads an energetic business environment, providing startups with more than mere financial support. By means of personalized guidance, connections to regional and international industry professionals, and calculated investment, PEV enables startups to traverse markets with assurance. This atmosphere cultivates authentic growth, restructuring sectors and propelling societal change.
      </Text>
      <Box
        display={"flex"}
        gap={"30px"}
        alignItems={"center"}
        textColor={"white"}
        mt={"40px"}
        fontSize={"20px"}
      >
        <Flex alignItems={"center"} gap={"10px"}>
          <FaUser /> Register
        </Flex>
        <IoIosArrowForward />{" "}
        <Flex alignItems={"center"} gap={"10px"}>
          <FaLock /> Login
        </Flex>
        <IoIosArrowForward />
        <Flex alignItems={"center"} gap={"10px"}>
          <FaPlay /> Apply
        </Flex>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        rounded={"lg"}
        backgroundColor={"#39807F"}
        textColor={"white"}
        padding={"30px"}
        gap={"30px"}
        mt={"40px"}
      >
        <CgPlayButtonR size={"56px"} />
        <Text fontWeight={"600"} fontSize={"18px"}>
          Structured programs designed to provide <br /> targeted support across
          your startup journey.
        </Text>
        <GreenButton
          label={"Get Started"}
          sx={{
            padding: "20px 40px",
            ml: "auto",
          }}
        />
      </Box>
    </Box>
  );
}
