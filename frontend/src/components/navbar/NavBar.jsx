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
  HStack,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { FiChevronDown } from "react-icons/fi";
import authService from "../../services/auth.service";

export default function NavBar({transparency}) {
export default function NavBar({transparency}) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const username = user ? user.user.firstName + " " + user.user.lastName : null;
  return (
    <Box
      position={"fixed"}
      w={"100%"}
      zIndex={4}
      boxShadow={"1px 1px 10px 1px"}
      m={0}
    >
      <Flex
        bg={transparency ? "transparent" : "brand.400"}
        bg={transparency ? "transparent" : "brand.400"}
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
        <Stack justify={"flex-end"} direction={"row"} spacing={6}></Stack>
        {user ? (
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{username}</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem
                onClick={() => {
                  navigate("/user/profile");
                }}
                style={{ color: "black" }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/user/profile");
                }}
                style={{ color: "black" }}
              >
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  authService.logout();
                  navigate("/");
                }}
                style={{ color: "black" }}
              >
                Sign out
              </MenuItem>
              <MenuItem
                onClick={() => {
                  authService.logout();
                  navigate("/");
                }}
                style={{ color: "black" }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Stack justify={"flex-end"} direction={"row"} spacing={6}>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              color={"white"}
              onClick={() => navigate("/login")}
        ) : (
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
        )}
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
        <>
          <Link to={navItem.href}>
            <Box
              key={navItem.label}
              p={5}
              color={linkColor}
              _hover={{ color: linkHoverColor }}
            >
              {navItem.label}
            </Box>
          </Link>
        </>
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
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link to={href} key={label}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Link>
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
              <Link to={child.href} key={child.label}>
                <Box as="a" key={child.label} py={2}>
                  {child.label}
                </Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Support",
    href: "/support",
  },

  {
    label: "About Us",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
];
