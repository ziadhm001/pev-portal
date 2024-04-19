import { Box, Flex, Text } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import company from "../../assets/images/company.png";
import PartnerCard from "../../components/cards/PartnerCard";

function Partner() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  backToTop()
  return (
    <DefaultLayout>
      <Flex flexDirection={"column"} alignItems={"center"} padding={"50px"}>
        <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
          Our Partners
        </Text>
        <Text
          fontSize="20px"
          maxW={"768px"}
          color={"#667085"}
          textAlign={"center"}
        >
          Prime Elevate Venture proudly partners with organizations that support
          global startup ecosystem growth and provide our Founders with millions
          in discounted and free services.
        </Text>
        <br />
        <Flex
          display={{
            base: "block",
            lg: "flex",
          }}
        >
          {dummyPartners.map(({ image, description1, description2 }, index) => (
            <PartnerCard
              key={index}
              image={image}
              description1={description1}
              description2={description2}
            />
          ))}
        </Flex>
        <br />
        <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
          Product/Infrastructure
        </Text>
        <br />
        <br />
        <Flex
          display={{
            base: "block",
            lg: "flex",
          }}
        >
          {dummyProduct.map((partner, index) => (
            <PartnerCard
              key={index}
              image={partner.image}
              description1={partner.description1}
              description2={partner.description2}
            />
          ))}
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

const dummyPartners = [
  {
    image: company,
    description1:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    description2:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
  },
  {
    image: company,
    description1:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    description2:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
  },
  {
    image: company,
    description1:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    description2:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
  },
];

const dummyProduct = [
  {
    image: company,
    description1:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    description2:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
  },
  {
    image: company,
    description1:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    description2:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
  },
  {
    image: company,
    description1:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    description2:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
  },
];

export default Partner;
