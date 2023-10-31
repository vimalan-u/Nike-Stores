import React from "react";
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
  Divider,
  Heading,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";
import { BiCategoryAlt, BiAddToQueue } from "react-icons/bi";
import { FaRegAddressBook } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import { nikeLogo } from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../utils/cookiestorage";
import { logoutApi } from "../../redux/Reducers/authReducer";
import Footer from "../../pages/Footer";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, to: "/admindashboard" },
  { name: "Products", icon: BiCategoryAlt, to: "/adminallproducts" },
  { name: "Customers", icon: FaRegAddressBook, to: "/adminallusers" },
  { name: "View Users On Map", icon: BiAddToQueue, to: "/adminviewmap" },
  { name: "User Dashboard", icon: HiOutlineLogin, to: "/" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.900", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box w={"80px"} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Link to={"/admindashboard"}>
            <Image src={nikeLogo} />
          </Link>
        </Box>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link key={link.name} to={link.to} onClick={() => onClose()}>
          <NavItem icon={link.icon} name={link.to}>
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, name, children, ...rest }) => {
  let url = window.location.pathname.split("/")[2];
  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.700",
          color: "white",
        }}
        bg={`/${url}` === name && "gray.800"}
        color={
          `/${url}` === name ? "white" : useColorModeValue("gray.900", "white")
        }
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
    </Box>
  );
};

const MobileNav = ({ onOpen, user, handleLogoutBtn, navigate, ...rest }) => {
  const [isLargerThan420] = useMediaQuery("(min-width: 750px)");
  return (
    <Flex>
      {isLargerThan420 && (
        <Heading
          as="h4"
          size="md"
          pl={5}
          pt={8}
          borderBottom={"1px solid"}
          borderBottomColor={useColorModeValue("gray.900", "gray.700")}
        >
          {window.location.href
            .split("//")[1]
            .split("/")[1]
            .split("admin")[1]
            .toUpperCase()}
        </Heading>
      )}
      <Flex
        ml={{ base: 0, lg: 0 }}
        px={{ base: 4, lg: 4 }}
        width={"100%"}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.900", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        {isLargerThan420 && (
          <Box
            w={"80px"}
            display={{ base: "flex", md: "none" }}
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
          >
            <Link to={"/"}>
              <Image src={nikeLogo} />
            </Link>
          </Box>
        )}

        <HStack spacing={{ base: "4", md: "6" }}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <IconButton
                size="lg"
                variant="ghost"
                aria-label="open menu"
                icon={<FiBell />}
              />
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem
                bgColor={"transparent"}
                _hover={{
                  bgColor: "gray.700",
                  transition: "background 0.5s ease-out",
                }}
              >
                New Orders : 29
              </MenuItem>
              <MenuItem
                bgColor={"transparent"}
                _hover={{
                  bgColor: "gray.700",
                  transition: "background 0.5s ease-out",
                }}
              >
                Logged In Customers : 130
              </MenuItem>
            </MenuList>
          </Menu>
          <Flex alignItems={"center"}>
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
                    <Text fontSize="sm">
                      {user.firstName.charAt(0).toUpperCase() +
                        user.firstName.slice(1)}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
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
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "gray.700",
                    transition: "background 0.5s ease-out",
                  }}
                  onClick={() => {
                    navigate("/admindashboard");
                  }}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "gray.700",
                    transition: "background 0.5s ease-out",
                  }}
                  onClick={() => {
                    navigate("/adminallproducts");
                  }}
                >
                  Products
                </MenuItem>
                <MenuItem
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "gray.700",
                    transition: "background 0.5s ease-out",
                  }}
                  onClick={() => {
                    navigate("/adminallusers");
                  }}
                >
                  Customers
                </MenuItem>
                <MenuItem
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "gray.700",
                    transition: "background 0.5s ease-out",
                  }}
                  onClick={() => {
                    navigate("/adminviewmap");
                  }}
                >
                  View Users On Map
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "gray.700",
                    transition: "background 0.5s ease-out",
                  }}
                  onClick={() => {
                    navigate("/");
                  }}
                  icon={<HiOutlineLogin />}
                >
                  User Dashboard
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogoutBtn} icon={<FiLogOut />}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

const AdminSidebarLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user) || "Admin";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    removeItem("token");
    removeItem("user");
    dispatch(logoutApi());
    removeItem("persist:root");
    navigate("/");
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", lg: "block" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        onOpen={onOpen}
        user={user}
        handleLogoutBtn={handleLogoutBtn}
        navigate={navigate}
      />
      <Box ml={{ base: 0, lg: 60 }} p="4" minH={"100%"} borderRadius={"13px"}>
        <Box minH={"70vh"}>{children}</Box>
        <Box minH={"100%"}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSidebarLayout;
