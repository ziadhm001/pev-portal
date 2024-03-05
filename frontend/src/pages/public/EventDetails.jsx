import DefaultLayout from "../../layouts/DefaultLayout";
import InfoSession from "../../components/sections/InfoSession";
import WhoShouldAttend from "../../components/sections/WhoShouldAttend";
import ApplyBanner from "../../components/sections/ApplyBanner";
import { Text, Flex } from "@chakra-ui/react";

export default function EventDetails() {
  return (
    <DefaultLayout>
      <InfoSession />
      <Flex direction={"column"} w={"60%"} mx={"auto"} my={10}>
        <WhoShouldAttend />
        <ApplyBanner />
      </Flex>
    </DefaultLayout>
  );
}
