import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box
      position={"fixed"}
      w={"100%"}
      zIndex={4}
      boxShadow={"1px 1px 10px 1px"}
      m={0}
    >
      <Flex
        bg={"brand.400"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        align={"center"}
        px={{
          base: 4,
          md: 12,
        }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={2}
          justifyContent={"space-evenly"}
          align={"center"}
          direction={"row"}
        >
          <Image
            src={logo1}
            alt={"logo"}
            h={"60px"}
            objectFit={"cover"}
            transform={"scale(2)"}
            left={{ base: "-30", md: "0" }}
            pos={"relative"}
            onClick={() => navigate("/")}
          />

          <Flex
            display={{ base: "none", md: "flex" }}
            direction={"row"}
            spacing={6}
            flex={2}
            justifyContent={"space-around"}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack justify={"flex-end"} direction={"row"} spacing={6}>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            color={"white"}
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.300"}
            href={"#"}
            _hover={{
              bg: "brand.400",
            }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "brand.300";

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          p={5}
          color={linkColor}
          _hover={{ color: linkHoverColor }}
        >
          {navItem.label}
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inspiration",
    href: "#",
  },
  {
    label: "Find Work",
    href: "#",
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
