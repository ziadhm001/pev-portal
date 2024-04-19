import {
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import girlImage from "../../assets/images/BG.png";
import GreenButton from "../buttons/GreenButton";
import { useState } from "react";
import FormTextField from "../fields/FormTextField";

export default function RegisterEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex
        rounded={"xl"}
        border={"3px solid #4BB543"}
        p={"30px"}
        justifyContent={"space-between"}
        boxShadow={"0px 0px 20px rgba(0, 0, 0, 0.3)"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "45%",
          }}
        >
          <Text fontWeight={"600"} fontSize={"48px"}>
            PR Hacks for Startup Founders
          </Text>
          <div
            style={{
              fontSize: "16px",
              color: "#667085",
            }}
          >
            <Text>Online Event</Text>
            <Text my={2}>Feb 21, 2024</Text>
            <Text>08:00 pm - 10:00 pm</Text>
          </div>
          <Button
            fontWeight={"400"}
            bg={"#4BB543"}
            color={"white"}
            boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.3)"}
            h={"25%"}
            mt={"20px"}
            borderRadius={"15"}
            fontSize={24}
            onClick={() => setIsModalOpen(true)}
          >
            Register For An Event
          </Button>
        </div>
        <img src={girlImage}></img>
      </Flex>
      <Grid
        templateColumns={"repeat(3, 1fr)"}
        mt={"50px"}
        justifyContent={"space-between"}
        gap={"30px"}
      >
        <GridItem>
          <NormalEventCard onRegister={() => setIsModalOpen(true)} />
        </GridItem>
        <GridItem>
          <NormalEventCard onRegister={() => setIsModalOpen(true)} />
        </GridItem>
        <GridItem>
          <NormalEventCard onRegister={() => setIsModalOpen(true)} />
        </GridItem>
      </Grid>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent rounded={"xl"} p="30px">
          <ModalBody>
            <Text fontSize={"48px"} fontWeight={"600"} mt={4}>
              Register for the Event
            </Text>
            <Text mb={4} fontSize={"20px"} color={"#667085"}>
              Please enter your credentials carefully.
            </Text>
            <FormTextField label={"Name"} />
            <FormTextField label={"Email"} />
            <FormTextField label={"Phonenumber"} />
            <FormTextField label={"Date"} />
            <GreenButton label={"Send Message"} w="100%" mt="20px" mb="30px" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

function NormalEventCard({ onRegister }) {
  return (
    <Flex
      boxShadow={"0px 0px 20px 0px #0000004D"}
      direction={"column"}
      padding={"20px"}
      borderRadius={"15px"}
      border={"3px solid #4BB543"}
    >
      <img
        src={girlImage}
        style={{
          maxWidth: "300px",
          margin: "0 auto",
        }}
      />
      <Text fontWeight={"600"} fontSize={"24px"} my={2}>
        PR Hacks for Startup Founders
      </Text>
      <div
        style={{
          fontSize: "16px",
          color: "#667085",
        }}
      >
        <Text>Online Event</Text>
        <Text my={2}>Feb 21, 2024</Text>
        <Text>08:00 pm - 10:00 pm</Text>
      </div>
      <Button
        fontWeight={"400"}
        bg={"#4BB543"}
        color={"white"}
        boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.3)"}
        h={"60px"}
        mt={"20px"}
        borderRadius={"15"}
        fontSize={24}
        onClick={onRegister}
      >
        Register For An Event
      </Button>
    </Flex>
  );
}
