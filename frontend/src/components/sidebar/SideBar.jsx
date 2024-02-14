import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
} from "react-icons/fi";
import logo1 from "../../assets/images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "/" },
  { name: "User Profile", icon: FiUser, link: "/user/profile" },
  { name: "Application", icon: FiTrendingUp, link: "/user/application-form" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={"brand.400"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          src={logo1}
          alt={"logo"}
          h={"60px"}
          objectFit={"cover"}
          transform={"scale(2)"}
          pos={"relative"}
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, link, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      color={"white"}
    >
      <Link to={link}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  if(!user)
    navigate('/')
  const username = user.user.firstName + " " +user.user.lastName
  return (
    <Flex
      zIndex={20}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
      bg={"brand.400"}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex alignItems="center" display={{ base: "flex", md: "none" }} h="20">
        <Image
          src={logo1}
          alt={"logo"}
          h={"60px"}
          objectFit={"cover"}
          transform={"scale(2)"}
          pos={"relative"}
        />
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"} zIndex={20}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="white">{username}</Text>
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
              <MenuItem onClick={() => {navigate('/user/profile')}}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => {authService.logout(); navigate('/')}}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SideBar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={"#FAF0E7"}
      minH={{
        base: "100%",
        md: "100vh",
      }}
      zIndex={20}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        zIndex={20}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
        zIndex={20}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} zIndex={20} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
};

export default SideBar;
