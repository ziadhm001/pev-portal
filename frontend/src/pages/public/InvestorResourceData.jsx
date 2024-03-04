import { Flex, Text, Link } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";

function InvestorResourceData() {
  return (
    <DefaultLayout>
      <Flex
        bg={"#FAF0E7"}
        flexDirection={"column"}
        padding={"120px"}
        gap={"2"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
      >
        <Text fontSize="4xl" fontWeight={"600"} alignSelf={"self-start"}>
          Resources for Investors
        </Text>
        <Text color={"#667085"} w={"80%"}>
          Since 2023, Prime Elevate has funded over X companies and worked with
          over Y founders. Every X months over Y companies apply to participate
          in our accelerator and we typically have a X% - Y% acceptance rate.
        </Text>
        <Text color={"#667085"} w={"80%"}>
          We now have more than X companies valued over $YM and more than X
          companies valued over $YB.
        </Text>
        <Text color={"#667085"} w={"80%"}>
          To see a complete directory of YC companies please visit the{" "}
          <Link>PEV Startup Directory.</Link>
        </Text>
      </Flex>

      <Flex flexDirection={"column"} padding={"90px"} gap={"2"}>
        <Text fontSize="4xl" fontWeight={"600"} alignSelf={"self-start"}>
          Demo Day
        </Text>
        <Text color={"#667085"} w={"80%"}>
          Every year in April and September PEV hosts an Online Demo Day where
          each batch of companies present to investors around the world. The
          event is invitation only, if you are interested in learning more,
          click here.
        </Text>
        <Text color={"#667085"} w={"80%"}>
          We now have more than X companies valued over $YM and more than X
          companies valued over $YB.
        </Text>
        <Text color={"#667085"} w={"80%"}>
          If you are interested in using PEV's standard fundraising documents
          (the SAFE), you can
          <Link> download templates</Link>.
        </Text>
      </Flex>
    </DefaultLayout>
  );
}

export default InvestorResourceData;
