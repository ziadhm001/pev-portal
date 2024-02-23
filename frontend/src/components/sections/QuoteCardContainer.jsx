import { Flex } from "@chakra-ui/react";
import userImage from "../../assets/images/user.png";
import QuoteCard from "./QuoteCard";

function QuoteCardContainer() {
  return (
    <Flex
      bg="#ECECEC"
      h={"456px"}
      w={"100%"}
      overflowX={"auto"}
      scrollSnapAlign={"center"}
      scrollSnapType={"x mandatory"}
      alignItems={"center"}
      style={{ scrollbarWidth: "none" }}
    >
      <Flex minW={"min-content"}>
        {dummyData.map(
          ({ quote, image, userName, description, date }, index) => (
            <QuoteCard
              key={index}
              quote={quote}
              image={image}
              userName={userName}
              description={description}
              date={date}
            />
          )
        )}
      </Flex>
    </Flex>
  );
}

const dummyData = [
  {
    quote:
      "Yourname's ongoing assistance has certainly been of significant and direct benefit to us in terms of User Experience as well as website functionality and integration with our internal systems. More than the efficient delivery of tasks/projects and rapid response to any issues encountered, we have found Rowan's consultative approach invaluable. His up-to-date knowledge and experience combined with a focus on understanding exactly what we are wanting to achieve (and why), has frequently lead to outcomes that we hadn't realised were possible and that exceed our expectations. Yourname would be a valuable asset to any business.",
    image: userImage,
    userName: "Firstname Lastname",
    description: `Top 10 in Open Startups ranking
        Udemy (IPQ, 2023)`,
    date: "January 29, 2024",
  },
  {
    quote:
      "Yourname's ongoing assistance has certainly been of significant and direct benefit to us in terms of User Experience as well as website functionality and integration with our internal systems. More than the efficient delivery of tasks/projects and rapid response to any issues encountered, we have found Rowan's consultative approach invaluable. His up-to-date knowledge and experience combined with a focus on understanding exactly what we are wanting to achieve (and why), has frequently lead to outcomes that we hadn't realised were possible and that exceed our expectations. Yourname would be a valuable asset to any business.",
    image: userImage,
    userName: "Firstname Lastname",
    description: `Top 10 in Open Startups ranking
        Udemy (IPQ, 2023)`,
    date: "January 29, 2024",
  },
  {
    quote:
      "Yourname's ongoing assistance has certainly been of significant and direct benefit to us in terms of User Experience as well as website functionality and integration with our internal systems. More than the efficient delivery of tasks/projects and rapid response to any issues encountered, we have found Rowan's consultative approach invaluable. His up-to-date knowledge and experience combined with a focus on understanding exactly what we are wanting to achieve (and why), has frequently lead to outcomes that we hadn't realised were possible and that exceed our expectations. Yourname would be a valuable asset to any business.",
    image: userImage,
    userName: "Firstname Lastname",
    description: `Top 10 in Open Startups ranking
        Udemy (IPQ, 2023)`,
    date: "January 29, 2024",
  },
  {
    quote:
      "Yourname's ongoing assistance has certainly been of significant and direct benefit to us in terms of User Experience as well as website functionality and integration with our internal systems. More than the efficient delivery of tasks/projects and rapid response to any issues encountered, we have found Rowan's consultative approach invaluable. His up-to-date knowledge and experience combined with a focus on understanding exactly what we are wanting to achieve (and why), has frequently lead to outcomes that we hadn't realised were possible and that exceed our expectations. Yourname would be a valuable asset to any business.",
    image: userImage,
    userName: "Firstname Lastname",
    description: `Top 10 in Open Startups ranking
        Udemy (IPQ, 2023)`,
    date: "January 29, 2024",
  },
];

export default QuoteCardContainer;
