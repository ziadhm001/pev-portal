import {
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import logo1 from "../../assets/images/logo1.png";
import FormTextField from "../fields/FormTextField";
import { useFormik } from "formik";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
const Logo = () => {
  return (
    <Image
      src={logo1}
      alt={"logo"}
      margin={0}
      left={"-60px"}
      top={"-80px"}
      position={"relative"}
    />
  );
};
function Footer() {
  const emailForm = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Flex
      bg={"brand.400"}
      color={"white"}
      height={{
        base: "auto",
      }}
      zIndex={4}
      pos={"relative"}
    >
      <Stack spacing={6} p={8}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={2}
        >
          <GridItem>
            <Stack spacing={6} p={8} alignItems={"start"}>
              <Logo />

              <Text
                fontSize={"sm"}
                color={"white"}
                top={"-120px"}
                position={"relative"}
              >
                Prime Elevate gives you the blocks and components you need to
                create a truly professional website.
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack align={"flex-start"} p={8}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={"#"}>
                About us
              </Box>
              <Box as="a" href={"#"}>
                Blog
              </Box>
              <Box as="a" href={"#"}>
                Contact us
              </Box>
              <Box as="a" href={"#"}>
                Pricing
              </Box>
              <Box as="a" href={"#"}>
                Testimonials
              </Box>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack align={"flex-start"} p={8}>
              <ListHeader>Help</ListHeader>
              <Box as="a" href={"#"}>
                Help Center
              </Box>
              <Box as="a" href={"#"}>
                Terms of Service
              </Box>
              <Box as="a" href={"#"}>
                Legal
              </Box>
              <Box as="a" href={"#"}>
                Privacy Policy
              </Box>
              <Box as="a" href={"#"}>
                Satus
              </Box>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack align={"flex-start"} p={8}>
              <ListHeader>Stay up to date</ListHeader>

              <Stack w={"100%"} spacing={4}>
                <FormTextField
                  label={"Your email address"}
                  name={"email"}
                  type={"email"}
                  placeholder={"Your email address"}
                  value={emailForm.values.email}
                  onChange={emailForm.handleChange}
                  error={emailForm.errors.email}
                  touched={emailForm.touched.email}
                  bg={"white"}
                />
                <Button bg="#4BB543" color={"white"} size="lg" type="submit">
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
        <hr />
        <Stack direction={"row"} align={"center"} justify={"center"} p={8}>
          <Text fontSize={"sm"}>
            © {new Date().getFullYear() + " "}All rights reserved , Prime
            Elevate
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Footer;
