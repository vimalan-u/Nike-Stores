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
  HStack,
  Icon,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { DrawerCategory } from "./CategoryAndIcon";
import { FiLogOut } from "react-icons/fi";
import { removeItem } from "../../utils/cookiestorage";
import { logoutApi } from "../../redux/Reducers/authReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { RiLuggageCartLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import Coupon from "../../pages/Coupon";

export const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.auth.user) || "Admin";
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  let location = useLocation();

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    removeItem("token");
    removeItem("user");
    dispatch(logoutApi());
    removeItem("persist:root");
    onClose();
    navigate("/");
  };
  const handleLoginBtn = () => {
    onClose();
    navigate("/login");
  };

  const handleSignupBtn = () => {
    onClose();
    navigate("/signup");
  };

  return (
    <>
      <Icon w={"28px"} h={"28px"} mr={"10px"} onClick={onOpen} as={BiMenu} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome {/* {user.firstName} */}</DrawerHeader>
          <Divider />
          <DrawerBody>
            <VStack justify={"space-between"} height={"100%"}>
              <VStack
                gap={"18px"}
                mt={"40px"}
                onClick={onClose}
                align={"flex-start"}
                mb={5}
              >
                <DrawerCategory name={"/"} text={"Home"} link={"/"} />
                <Divider
                  sx={{
                    background: "rgba(255, 255, 255, 0)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                  }}
                />
                <DrawerCategory name={"sale"} text={"SALE"} link={"/sale"} />
                <Divider
                  sx={{
                    background: "rgba(255, 255, 255, 0)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                  }}
                />
                <DrawerCategory name={"men"} text={"MEN"} link={"/men"} />
                <Divider
                  sx={{
                    background: "rgba(255, 255, 255, 0)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                  }}
                />
                <DrawerCategory name={"women"} text={"WOMEN"} link={"/women"} />
                <Divider
                  sx={{
                    background: "rgba(255, 255, 255, 0)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 250px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(50px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                  }}
                />
                <DrawerCategory name={"kids"} text={"KIDS"} link={"/kids"} />
              </VStack>
              {!token ? (
                <VStack width={"100%"}>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    sx={{
                      background: "rgba(0, 0, 0, 0.78)",
                      borderRadius: "16px",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.71)",
                      backdropFilter: "blur(4.4px)",
                      WebkitBackdropFilter: "blur(4.4px)",
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
                    _hover={{
                      boxShadow: "xl",
                    }}
                    sx={{
                      background: "rgba(0, 0, 0, 0.78)",
                      borderRadius: "16px",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.71)",
                      backdropFilter: "blur(4.4px)",
                      WebkitBackdropFilter: "blur(4.4px)",
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
                  <Flex
                    width={"100%"}
                    flexDirection={"column"}
                    gap={"5px"}
                    fontSize={"16px"}
                    mb={3}
                  >
                    <Divider />
                    {[
                      {
                        route: "/favourite",
                        icon: FaRegHeart,
                        text: "Wishlist",
                      },
                      {
                        route: "/orders",
                        icon: RiLuggageCartLine,
                        text: "Orders",
                      },
                      { route: "/cart", icon: BsCart2, text: "Cart" },
                      {
                        route: "/userprofile",
                        icon: AiOutlineUserAdd,
                        text: "User Profile",
                      },
                    ].map(({ route, icon: IconComponent, text }, index) => (
                      <HStack
                        key={index}
                        width="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        pr={3}
                        pl={3}
                        sx={{
                          background: "rgba(255, 255, 255, 0)",
                          borderRadius: "16px",
                          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 1)",
                        }}
                        cursor={"pointer"}
                        onClick={() => {
                          onClose();
                          return navigate(route);
                        }}
                      >
                        <Icon as={IconComponent} boxSize={4} />
                        <Button background={"transparent"}>{text}</Button>
                      </HStack>
                    ))}

                    <Divider />
                  </Flex>

                  <Button
                    // size="lg"
                    // bg={"blue.400"}
                    // color={"white"}
                    // bgColor={"rgb(0,0,0)"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    width={"100%"}
                    mb={1}
                    onClick={handleLogoutBtn}
                    leftIcon={<FiLogOut />}
                    sx={{
                      background: "rgba(30, 19, 19, 1)",
                      borderRadius: "16px",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(30, 19, 19, 1)",
                    }}
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
