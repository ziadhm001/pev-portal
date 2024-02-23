import { Flex, Image, Text } from "@chakra-ui/react";
import quoteIcon from "../../assets/images/quote.svg";

function QuoteCard({ quote, image, userName, description, date }) {
  return (
    <Flex
      flexDirection={"column"}
      bg={"white"}
      borderRadius={"20px"}
      margin={"15px"}
      padding={"15px"}
      w={"572px"}
      h={"314px"}
      boxShadow={"0px 4px 5px 1px #00000026"}
      border={"1px solid #4BB543"}
    >
      <Flex>
        <Image
          src={quoteIcon}
          alt="quoteIcon"
          alignSelf={"self-start"}
          margin={"15px"}
        />
        <Text fontSize="14px">{quote}</Text>
      </Flex>
      <Flex marginTop="10px" marginRight="5px" justifyContent={"space-between"}>
        <Flex>
          <Image
            src={image}
            alt="userImage"
            borderRadius={"50%"}
            margin={"15px"}
          />
          <Flex flexDirection={"column"}>
            <Text as="b">{userName}</Text>
            <Text fontSize="12px" color="#4BB543" w="171px">
              {description}
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="12px" color="#4BB543" insetEnd={0}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}

export default QuoteCard;
