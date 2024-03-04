import { Flex, Image, Text, Link } from "@chakra-ui/react";
import { ResourceCard, resources } from "./ResourcesList";
import DefaultLayout from "../../layouts/DefaultLayout";
import arrow from "../../assets/images/multi-arrows.png";
import manImage from "../../assets/images/man.png";
import dots from "../../assets/images/dots.png";

function ResourcePage() {
  return (
    <DefaultLayout>
      <Flex
        bg="#ECECEC"
        padding={"120px"}
        position={"relative"}
        justifyContent={"space-between"}
      >
        <Flex flexDirection={"column"}>
          <Text fontSize={"3xl"} fontWeight={"600"} color={"#4BB543"}>
            {resource.date}
          </Text>
          <Text fontSize="5xl" fontWeight={"600"}>
            {resource.title}
          </Text>
        </Flex>
        <Image src={arrow} alignSelf={"self-end"} />
      </Flex>

      <Flex flexDirection={"column"} padding={"80px"}>
        <Image src={resource.image} alt="course image" />
        <br />
        <Text>{resource.description}</Text>
      </Flex>

      <Flex
        flexDirection={"column"}
        bg="#ECECEC"
        padding={"50px"}
        position={"relative"}
      >
        <Image
          src={dots}
          h={"100%"}
          top={"5"}
          alt="course image"
          position={"absolute"}
          insetEnd={"0"}
          zIndex={"0"}
        />
        <Text fontSize="4xl" fontWeight={"600"} alignSelf={"self-start"}>
          Related Insights
        </Text>

        <br />
        <Flex zIndex={"1"} flexWrap={"wrap"}>
          {resources.map((resource, index) => {
            if (index > 3) return;

            return (
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
            );
          })}
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}

const resource = {
  date: "JAN 31, 2024",
  title: "Leader Ship Lessons",
  image: manImage,
  description:
    "The Startup Resource Lists are created from the Startup Ecosystem Canvas, which represents a somewhat sequential view of a startup ecosystem. It was inspired by Startup Communities, and refined using the Founder Institute's experience launching companies in over 200 cities worldwide. To read the long story behind its creation, see this blog post.",
};

export default ResourcePage;
