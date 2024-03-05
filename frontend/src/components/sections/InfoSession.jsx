import { Flex, Text, Button } from "@chakra-ui/react";
export default function InfoSession() {
  return (
    <div
      style={{
        backgroundColor: "#ECECEC",
      }}
    >
      <Flex w={"60%"} justifyContent={"space-between"} mx={"auto"} py={"11vh"}>
        <div
          style={{
            width: "60%",
          }}
        >
          <Text color={"#4BB543"} fontSize={80} lineHeight={1}>
            Online Information Sessions
          </Text>
          <Text my={5} fontWeight={400} size={24}>
            If you are interested in building a business that matters with the
            Founder Institute's structured process, expert feedback, and global
            network, then join an upcoming 'Online Information Session + Q&A'
            Webinar.
          </Text>
          <Text fontWeight={400} size={24}>
            These events are run 5 times per week and are attended by FI staff
            who are ready to answer your questions in the chat.
          </Text>
        </div>
        <div
          style={{
            width: "420px",
            border: "3px solid #4BB543",
            padding: "20px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "fit-content",
          }}
        >
          <Text fontSize={40} fontWeight={"bold"}>
            Attend an Infosession
          </Text>
          <Text textColor={"#667085"}>
            Choose from our list of upcoming sessions.
          </Text>
          <Button
            fontWeight={"400"}
            bg={"#4BB543"}
            color={"white"}
            boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.3)"}
            h={"60px"}
            mt={"5vh"}
            borderRadius={"15"}
            fontSize={24}
            w={"100%"}
          >
            Register for an Infosession
          </Button>
        </div>
      </Flex>
    </div>
  );
}
