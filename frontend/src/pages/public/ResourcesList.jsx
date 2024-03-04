import { Flex, Image, Text, Link as Download } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import dots from "../../assets/images/dots.png";
import arrow from "../../assets/images/arrow-up-right.png";

function ResourcesList() {
  return (
    <DefaultLayout>
      <Flex
        flexDirection={"column"}
        bg="#ECECEC"
        padding={"120px"}
        position={"relative"}
        gap={"3"}
      >
        <Text fontSize="4xl" fontWeight={"600"} alignSelf={"self-start"}>
          Startup Resource Lists
        </Text>
        <Text color={"#667085"} w={"80%"}>
          Startup ecosystems can be fragmented, and startup resources can seem
          hidden to many newcomers.  
        </Text>

        <Text color={"#667085"} w={"80%"}>
          The Startup Ecosystem Canvas from the Prime Elevate provides
          entrepreneurs in over 100 cities with a sequential list of the best
          local tools, people, investors, and companies that help startups
          through every stage of their journey.  
        </Text>
        <Text color={"#667085"} w={"80%"}>
          You can find the All startups eco systems documents here (all
          documents are open for comments and contributions). 
        </Text>
        <Text color={"#667085"} w={"80%"}>
          Or, browse the most recently updated resources below. 
        </Text>
        <Image
          src={dots}
          h={"90%"}
          top={"5"}
          alt="course image"
          position={"absolute"}
          insetEnd={"0"}
          zIndex={"0"}
        />
      </Flex>
      <br />
      <Flex flexDirection={"column"} paddingLeft={"120px"}>
        <Text fontSize="4xl" fontWeight={"600"} alignSelf={"self-start"}>
          Resource Lists
        </Text>
        <br />
        <Flex flexWrap={"wrap"}>
          {resources.map((resource, index) => (
            <>
              <Link
                key={index}
                to={{
                  pathname: "/resource",
                  search: `?id=${index}`,
                }}
              >
                <ResourceCard
                  name={resource.name}
                  date={resource.date}
                  title={resource.title}
                  description={resource.description}
                />
              </Link>
            </>
          ))}
        </Flex>
        <br />

        <Text fontSize="4xl" fontWeight={"600"} alignSelf={"self-start"}>
          Main Components
        </Text>
        <Text color={"#667085"} w={"80%"}>
          The Startup Resource Lists are created from the Startup Ecosystem
          Canvas, which represents a somewhat sequential view of a startup
          ecosystem. It was inspired by Startup Communities, and refined using
          the Founder Institute's experience launching companies in over 200
          cities worldwide. To read the long story behind its creation, see this
          blog post.
        </Text>
        <br />
        <Download fontWeight={"600"} color={"#5A7729"}>
          Download the Startup Ecosystem Canvas Template here.
        </Download>
        <br />
      </Flex>
    </DefaultLayout>
  );
}

export function ResourceCard({ name, date, title, description }) {
  return (
    <Flex
      marginTop={"20px"}
      w={"566px"}
      bg={"white"}
      flexDirection={"column"}
      className="floating-card"
      margin={"20px"}
      borderRadius={"5px"}
      boxShadow={"0px 0px 20px 0px #0000004D"}
      _hover={{ boxShadow: "0px 0px 20px 0px #000000AF" }}
    >
      <Flex bg="#4BB543" h={"12px"} w="100%" borderTopRadius={"5px"} />
      <Flex padding={"20px"}>
        <Flex flexDirection={"column"} alignSelf={"flex-start"}>
          <Text fontSize={"20px"} color={"#4BB543"}>
            {name} • {date}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"30px"}>{title}</Text>
            <Image src={arrow} w={"30px"} h={"30px"} />
          </Flex>
          <Text color={"#667085"}>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const resources = [
  {
    name: "Alec Whitten1",
    date: "17 Jan 2022",
    title: "Leadership lessons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id sed eget erat molestie accumsan ut et congue netus.",
  },
  {
    name: "Alec Whitten",
    date: "17 Jan 2022",
    title: "Leadership lessons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id sed eget erat molestie accumsan ut et congue netus.",
  },
  {
    name: "Alec Whitten",
    date: "17 Jan 2022",
    title: "Leadership lessons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id sed eget erat molestie accumsan ut et congue netus.",
  },
  {
    name: "Alec Whitten",
    date: "17 Jan 2022",
    title: "Leadership lessons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id sed eget erat molestie accumsan ut et congue netus.",
  },
  {
    name: "Alec Whitten",
    date: "17 Jan 2022",
    title: "Leadership lessons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id sed eget erat molestie accumsan ut et congue netus.",
  },
  {
    name: "Alec Whitten",
    date: "17 Jan 2022",
    title: "Leadership lessons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id sed eget erat molestie accumsan ut et congue netus.",
  },
];

export default ResourcesList;
