import { Box, Flex, Text } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function TermsAndConditions() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <Box
        textAlign={"center"}
        pt={"15vh"}
        pb={"5vh"}
        bg={"#FAF0E7"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
      >
        <Text fontSize={"48px"} fontWeight={"600"}>
          General Terms & Conditions
        </Text>
        <Text fontSize={"20px"} color={"#667085"}>
          The following General Terms & Conditions apply to your use of PEV and
          all <br /> related properties.
        </Text>
      </Box>
      <Flex direction={"column"} w={"60%"} mx={"auto"} my={10} gap={5}>
        <Box
          w={"100%"}
          h={"400px"}
          bg={"gray.300"}
          borderRadius={"10px"}
          my={4}
        ></Box>
        <Flex direction={"column"} gap={"35px"} fontSize={"30px"}>
          <p>
            The following General Terms & Conditions apply to your use of VC4A
            and all related properties. You are solely responsible for your
            conduct, and your content on VC4A, and compliance with these terms.
            By registering with us, or using or browsing VC4A, you acknowledge
            that you have read, understood, and agree to be bound by these
            terms. This includes the General Terms & Conditions explained on
            this page, and the VC4A Terms of Commerce, Disclaimer and Privacy
            Policy.
          </p>
          <p>
            The only people who are authorized to create accounts on this site
            are professionals who understand risk and are willing to bear the
            consequences. If you are not an Entrepreneur looking for advice and
            introductions to potential investors, or you don’t think that you
            are both an Accredited Investor and sophisticated enough to protect
            your own interests, then you should not try to create an account on
            this site.
          </p>
          <p>
            By using VC4A (including by simply viewing content on VC4A.com (the
            “Site”), you are agreeing that you, and each person you allow to
            access VC4A through your account, will abide by the terms of the
            following agreement, which is summarized here, and set forth in its
            entirety below. This agreement is between you and VC4A BV (“We,”
            “VC4A” or the “Company”), and it governs your access to and use of
            the services, websites, and applications offered by VC4A (the
            “Service”). Your access to and use of the Service is conditioned on
            your acceptance of and compliance with this agreement.
          </p>
          <p>
            You agree not to authorize or encourage any third party to use VC4A
            to facilitate any of the foregoing prohibited conduct. You also
            agree that these General Terms & Conditions include our service
            providers and that they may take action (including the removal of
            your content and disabling of your account) in order to maintain
            compliance with these General Terms & Conditions.
          </p>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
