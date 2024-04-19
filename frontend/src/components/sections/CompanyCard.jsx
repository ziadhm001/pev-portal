import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import GreenButton from "../buttons/GreenButton";

function CompanyCard({ image, companyName, location, description, founder }) {
  return (
    <Flex
      flexDirection={"column"}
      w={"342px"}
      boxShadow={"0px 4px 5px 1px #00000026"}
      border={"1px solid #4BB543"}
      borderRadius={"20px"}
      margin={"15px"}
      padding={"15px"}
    >
      <Image src={image} alt="companyImage" w={"125px"} />

      <br />
      <Text>{companyName}</Text>
      <Text color={"#4BB543"}>{location}</Text>
      <Text>{description}</Text>
      <br />
      <Divider />
      <br />
      <Text color={"#4BB543"}>Founder(s)</Text>
      <Text>{founder}</Text>
      <br />
      <Divider />
      <br />
      <GreenButton label={"Website"} width={"110px"} />
    </Flex>
  );
}

export default CompanyCard;
