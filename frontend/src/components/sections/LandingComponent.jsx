import { Flex, Text, Stack, Button, IconButton } from "@chakra-ui/react";
import backgroundImage from "../../assets/images/background.jpg";
import { FiArrowDown, FiInfo, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function LandingComponent({ onClick }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <Flex
      h={"103vh"}
      backgroundImage={`url(${backgroundImage})`}
      position={"relative"}
    >
      <Flex
        w={"100%"}
        h={"100%"}
        bg={"rgba(0,0,0,0.5)"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"white"}
          position={"relative"}
        >
          <Stack spacing={10} align={"center"} textAlign={"center"}>
            <Text
              fontSize="102px"
              fontWeight="500"
              fontFamily={"catchye"}
              color={"brand.300"}
            >
              TURN IDEAS INTO REALITY
            </Text>
            <Text fontSize="38px" fontWeight="700">
              ACHIEVE TOGETHER
            </Text>
            <Stack direction={"row"} spacing={4}>
              <Button
                leftIcon={<FiUser />}
                bg={"brand.300"}
                size="lg"
                onClick={() => {
                  if(user)
                    navigate("/user/application-form");
                  else
                    navigate("/login")
                }}
              >
                Apply
              </Button>
              <Button
                leftIcon={<FiInfo />}
                bg={"transparent"}
                variant={"outline"}
                color={"white"}
                size="lg"
              >
                Learn More
              </Button>
            </Stack>
            <IconButton
              color={"white"}
              mt={10}
              borderRadius={"full"}
              bg={"brand.300"}
              size={"lg"}
              w={"60px"}
              h={"60px"}
              onClick={onClick}
              zIndex={1}
            >
              <FiArrowDown size={"md"} />
            </IconButton>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LandingComponent;
