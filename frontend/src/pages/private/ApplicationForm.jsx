import GreenButton from "../../components/buttons/GreenButton";
import GreenOutlinedButton from "../../components/buttons/GreenOutlinedButton";
import SideBar from "../../components/sidebar/SideBar";
import { Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ApplicationForm() {
  const navigate = useNavigate();
  return (
    <SideBar>
      <Stack
        spacing={4}
        alignItems={"flex-start"}
        p={8}
        h={{
          base: "100vh",
        }}
      >
        <Text fontSize={"sm"}>
          Start a new accelera program 2024 application
        </Text>
        <GreenButton
          label={"Start New Application"}
          onClick={() => {
            navigate("/user/application-form1");
          }}
        />

        <Text fontSize={"sm"}>Start from where you left off</Text>
        <GreenOutlinedButton
          label={"Continue Application"}
          onClick={() => {
            navigate("/user/application-form1");
          }}
        />
      </Stack>
    </SideBar>
  );
}

export default ApplicationForm;
