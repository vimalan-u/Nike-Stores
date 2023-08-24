import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { DrawerCategory } from "./CategoryAndIcon";
import { FiLogOut } from "react-icons/fi";
import { removeItem } from "../../utils/cookiestorage";
import { logoutApi } from "../../redux/Reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { RiLuggageCartLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import Coupon from "../../pages/Coupon";

export const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.auth.user) || "Admin";
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    removeItem("token");
    removeItem("user");
    dispatch(logoutApi());
    onClose();
    navigate("/");
  };
  const handleLoginBtn = () => {
    onClose();
    navigate("/login");
  };

  const handleSignupBtn = () => {
    onClose();
    navigate("signup");
  };

  return (
    <>
      <Icon w={"28px"} h={"28px"} mr={"10px"} onClick={onOpen} as={BiMenu} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hi {user?.firstName}</DrawerHeader>
          <Divider />
          <DrawerBody>
            <VStack justify={"space-between"} height={"100%"}>
              <VStack
                gap={"18px"}
                mt={"40px"}
                onClick={onClose}
                align={"flex-start"}
              >
                <DrawerCategory
                  name={"/"}
                  text={"SALE"}
                  link={"/sale"}
                />
                <Divider />
                <DrawerCategory
                  name={"newin"}
                  text={"NEW IN"}
                  link={"/newin"}
                />
                <Divider />
                <DrawerCategory
                  name={"newin"}
                  text={"SUMMER SHOP"}
                  link={"/newin"}
                />
                <Divider />
                <DrawerCategory
                  name={"summershop"}
                  text={"SUMMER SHOP"}
                  link={"/summershop"}
                />
                <Divider />
                <DrawerCategory
                  name={"goingout"}
                  text={"GOING OUT"}
                  link={"/goingout"}
                />
                <Divider />
              </VStack>
              {!token ? (
                <VStack width={"100%"}>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    bgColor={"rgb(0,0,0)"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    width={"100%"}
                    onClick={handleLoginBtn}
                    leftIcon={<AiOutlineLogin />}

                  >
                    Login
                  </Button>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    bgColor={"rgb(0,0,0)"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    width={"100%"}
                    mb={5}
                    onClick={handleSignupBtn}
                    leftIcon={<VscSignIn />}
                  >
                    Sign Up
                  </Button>
                </VStack>
              ) : (
                <VStack width={"100%"}>
                  <Flex width={"100%"} flexDirection={"column"} gap={"5px"} fontSize={"17px"} mb={3}>
                    <Divider />
                    <Button
                      onClick={() => {
                        navigate("/favourite");
                      }}
                      leftIcon={<FaRegHeart />}
                    >
                      Wishlist
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("/orders");
                      }}
                      leftIcon={<RiLuggageCartLine />}
                    >
                      Orders
                    </Button>

                    <Coupon />

                    <Button
                      onClick={() => {
                        navigate("/cart");
                      }}
                      leftIcon={<BsCart2 />}
                    >
                      Cart
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("/userprofile");
                      }}
                      leftIcon={<AiOutlineUserAdd />}
                    >
                      User Profile
                    </Button>
                    <Divider />
                  </Flex>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    bgColor={"rgb(0,0,0)"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    width={"100%"}
                    mb={5}
                    onClick={handleLogoutBtn}
                    leftIcon={<FiLogOut />}
                  >
                    Logout
                  </Button>
                  <Divider />
                </VStack>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
