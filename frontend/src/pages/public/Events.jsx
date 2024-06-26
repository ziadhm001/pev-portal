import { Text, Flex } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import RegisterEvents from "../../components/sections/RegisterEvents";

export default function Events() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <Flex direction={"column"} w={"60%"} mx={"auto"} mb={2}>
        <Flex
          h="50vh"
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Text
            mt={"10vh"}
            fontWeight={"600"}
            fontSize={"48px"}
            textAlign={"center"}
          >
            Prime Elevate Ventures Events
          </Text>
          <Text w={"50%"} textAlign={"center"} textColor={"#667085"}>
            We exist to help founders, so we run nearly 1000 free startup events
            per year where you can meet local entrepreneurs, network with
            investors, learn from advisors, and connect with co-founders.
          </Text>
        </Flex>
        <RegisterEvents />
      </Flex>
    </DefaultLayout>
  );
}
