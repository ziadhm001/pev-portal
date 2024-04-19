import { Flex, Text } from "@chakra-ui/react";
import CompanyCard from "./CompanyCard";
import company from "../../assets/images/company.png";

function CompaniesContainer() {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Text as="b" fontWeight="600" fontSize="48px" marginTop="50px">
        Featured portfoilio Companies
      </Text>
      <Text fontSize="20px" color={"#667085"}>
        PEV Alumni have raised over $1.75BN in funding and have an estimated
        value over $30BN+.
      </Text>

      <Flex
        w={"100%"}
        overflowX={"auto"}
        scrollSnapAlign={"center"}
        scrollSnapType={"x mandatory"}
        alignItems={"center"}
        style={{ scrollbarWidth: "none" }}
        margin={"70px 0"}
      >
        <Flex minW={"min-content"}>
          {dummyData.map(
            ({ image, companyName, location, description, founder }, index) => (
              <CompanyCard
                key={index}
                companyName={companyName}
                image={image}
                location={location}
                description={description}
                founder={founder}
              />
            )
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

const dummyData = [
  {
    image: company,
    companyName: "Udemy",
    location: "Silicon Valley, US",
    description:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    founder: "Gagan Biyani, Eren Bali",
  },
  {
    image: company,
    companyName: "Udemy",
    location: "Silicon Valley, US",
    description:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    founder: "Gagan Biyani, Eren Bali",
  },
  {
    image: company,
    companyName: "Udemy",
    location: "Silicon Valley, US",
    description:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    founder: "Gagan Biyani, Eren Bali",
  },
  {
    image: company,
    companyName: "Udemy",
    location: "Silicon Valley, US",
    description:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    founder: "Gagan Biyani, Eren Bali",
  },
  {
    image: company,
    companyName: "Udemy",
    location: "Silicon Valley, US",
    description:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    founder: "Gagan Biyani, Eren Bali",
  },
  {
    image: company,
    companyName: "Udemy",
    location: "Silicon Valley, US",
    description:
      "Udemy is the global leader in online learning, with nearly 200,000 courses. The company went public on the NASDAQ in October 2021 (UDMY), raising $421 million.",
    founder: "Gagan Biyani, Eren Bali",
  },
];

export default CompaniesContainer;
