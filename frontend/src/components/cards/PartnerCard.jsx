import { Flex, Text, Image, Divider } from "@chakra-ui/react";
import GreenButton from "../buttons/GreenButton";

function PartnerCard({ image, description1, description2 }) {
  return (
    <Flex
      flexDirection={"column"}
      maxW={"342"}
      h={"379"}
      boxShadow={"0px 4px 5px 1px #00000026"}
      border={"1px solid #4BB543"}
      borderRadius={"20px"}
      margin={"15px"}
      padding={"20px"}
    >
      <Image
        src={image}
        alt="companyImage"
        w={"192px"}
        h={"69px"}
        alignSelf={"center"}
      />
      <Text fontSize={"14px"}>{description1}</Text>
      <br />
      <Text fontSize={"14px"}>{description2}</Text>
      <br />
      <Divider />
      <br />
      <GreenButton label={"Read More"} width={"110px"} />
    </Flex>
  );
}

export default PartnerCard;
