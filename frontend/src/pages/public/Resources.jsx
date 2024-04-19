import { Flex, Image, Text } from "@chakra-ui/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import GreenButton from "../../components/buttons/GreenButton";
import QuoteCard from "../../components/sections/QuoteCard";
import userImage from "../../assets/images/user.png";
import BG from "../../assets/images/BG.png";
import dots from "../../assets/images/dots.png";

function Resources() {
  return (
    <DefaultLayout>
      <Flex
        bg={"#FAF0E7"}
        w={"100%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={"0px 0px 20px 0px #0000004D"}
        padding={"120px"}
      >
        <Text fontSize="5xl" fontWeight={"600"}>
          Prime Elevate Ventures Startups Academy
        </Text>
        <Text>
          Explore our catalog and find business courses specially curated for
          startup founders and mentors, by VC4A and partners.
        </Text>
      </Flex>

      <Flex justifyContent={"space-around"} flexWrap={"wrap"} margin={"20px"}>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.courseName}
            courseBy={course.courseBy}
            duration={course.duration}
            students={course.students}
          />
        ))}
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
          Testimonials
        </Text>
        <Text color={"#667085"} w={"40%"}>
          The startup academy has helped over 40,000 people over the years, here
          is what some participants say.
        </Text>
        <br />
        <Flex zIndex={"1"} flexWrap={"wrap"}>
          {quoteData.map(
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
    </DefaultLayout>
  );
}

function CourseCard({ courseName, courseBy, duration, students }) {
  return (
    <Flex
      w={"339px"}
      justifyContent={"center"}
      border={"3px solid #4BB543"}
      boxShadow={"0px 0px 20px 0px #0000004D"}
      borderRadius={"15px"}
      flexDirection={"column"}
      margin={"20px"}
      padding={"15px"}
    >
      <Image src={BG} alt="course image" marginBottom={"20px"} />

      <Text fontWeight={"600"} alignSelf={"self-start"}>
        {courseName}
      </Text>
      <Text color={"#667085"}>By {courseBy}</Text>
      <Text color={"#667085"}>{duration} hours</Text>
      <Text color={"#667085"}>{students}+ started this course</Text>
      <br />
      <GreenButton
        label={"Course Overview →"}
        boxShadow={"0px 0px 30px 0px #0000004D"}
      />
    </Flex>
  );
}

const courses = [
  {
    courseName: "Course 1",
    courseBy: "Instructor 1",
    duration: "2",
    students: "100",
  },
  {
    courseName: "Course 2",
    courseBy: "Instructor 2",
    duration: "3",
    students: "200",
  },
  {
    courseName: "Course 3",
    courseBy: "Instructor 3",
    duration: "4",
    students: "300",
  },
  {
    courseName: "Course 4",
    courseBy: "Instructor 4",
    duration: "5",
    students: "400",
  },
  {
    courseName: "Course 5",
    courseBy: "Instructor 5",
    duration: "6",
    students: "500",
  },
  {
    courseName: "Course 6",
    courseBy: "Instructor 6",
    duration: "7",
    students: "600",
  },
];

const quoteData = [
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

export default Resources;
