import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
} from "@chakra-ui/react";
import {
  RiHeartLine,
  RiLuggageCartLine,
  RiShoppingBagLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { nikeLogo } from "../constants/images";
import {
  Category,
  NavIcon,
  SearchBox,
} from "../components/navbar/CategoryAndIcon";
import { SideDrawer } from "../components/navbar/SideDrawer";
import { FiLogOut } from "react-icons/fi";
import Coupon from "./Coupon";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { useMediaQuery } from "@chakra-ui/react";
import { removeItem } from "../utils/cookiestorage";
import { logoutApi } from "../redux/Reducers/authReducer";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const { orderSummary } = useSelector((state) => state.cart) || 0;
  const user = useSelector((state) => state.auth.user) || "Test";
  const dispatch = useDispatch();

  const [isLargerThan800] = useMediaQuery("(min-width: 420px)");
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  useEffect(() => { }, []);

  const handleLogoutBtn = () => {
    removeItem("token");
    removeItem("user");
    dispatch(logoutApi());
    navigate("/");
  };
  return (
    <>
      <Flex h={"60px"} py="1" flexDirection={"row"} px={"20px"}>
        <Box w={"80px"}>
          <Link to={"/"}>
            <Image src={nikeLogo} />
          </Link>
        </Box>

        <Spacer />

        <Box display={["none", "none", "flex", "flex", "flex"]} fontWeight={"bold"} textColor={location.pathname === "/" && "white"}>
          <Category name={"sale"} text={"SALE"} link={"/sale"} />
          <Category name={"men"} text={"MEN"} link={"/men"} />
          <Category name={"women"} text={"WOMEN"} link={"/women"} />
          <Category name={"kids"} text={"KIDS"} link={"/kids"} />
        </Box>

        <Spacer />

        {/*

        //Add this search box using debouncing
        
        <Center position={"relative"} mr={"10px"}>
          <SearchBox />
        </Center> 
        
        */}

        <Center position={"relative"} mt={isLargerThan780 ? 2 : 0} mr={"10px"}>
          <Link to={"/favourite"}>
            <NavIcon iconName={RiHeartLine} />
          </Link>
        </Center>

        <Center position={"relative"} mt={isLargerThan780 ? 2 : 0} mr={"22px"}>
          <Link to={"/cart"}>
            <NavIcon iconName={RiShoppingBagLine} />
            <Box
              position={"absolute"}
              top={0}
              right={-0.4}
              borderRadius={"50%"}
              width={"25px"}
              height={"25px"}
              textAlign={"center"}
              zIndex={-1}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              display={"flex"}
              flexDirection="column"
              alignContent={"center"}
              justifyContent={"center"}
              color={"white"}
              opacity={0.89}
            >
              <Text>
                {orderSummary?.quantity ? orderSummary.quantity : "0"}
              </Text>
            </Box>
          </Link>
        </Center>
        {!isLargerThan780 && (
          <Box display={["flex", "flex", "none", "none", "none"]}>
            <Center mr={"10px"}>
              <SideDrawer />
            </Center>
          </Box>
        )}

        {isLargerThan780 && (
          <Flex
            _hover={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              transition: "color 0.5s ease-out",
              fontWeight: "bold",
            }}
            backgroundColor={"rgba(255, 255, 255, 0.07)"}
            border={"1px solid #ccc"}
            borderRadius={"10px"}
            alignItems={"center"}
            mt={isLargerThan780 ? 1 : 0}
          >
            <Menu>
              {token ? (
                <MenuButton
                  as={Button}
                  transition="all 0.7s"
                  _hover={{
                    bg: "transparent",
                    textColor: "rgba(0, 0, 0, 1.1)",
                    transition: "textColor 0.7s ease-out",
                    fontWeight: "bold",
                  }}
                  _focus={{ boxShadow: "none" }}
                  size="sm"
                  bg={"transparent"}
                  rightIcon={<BsFillCaretDownFill />}
                  fontWeight={"bold"}
                  textColor={location.pathname === "/" && "white"}
                  _active={{ background: "transparent" }}
                >
                  <Text
                    _hover={{
                      textColor: "rgba(0, 0, 0, 1.1)",
                      transition: "textColor 0.5s ease-out",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    {user.firstName}
                  </Text>
                </MenuButton>
              ) : (
                <Button
                  size="sm"
                  bg={"transparent"}
                  _hover={{
                    bg: "transparent",
                  }}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                  borderRadius={10}
                >
                  <Flex gap={"5px"}>
                    <Text
                      _hover={{
                        color: "rgba(0, 0, 0, 1.1)",
                        transition: "color 0.5s ease-out",
                      }}
                      fontWeight="bold"
                      flexDirection={"row"}
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Text>
                    |
                    <Text
                      _hover={{
                        color: "rgba(0, 0, 0, 1.1)",
                        transition: "color 0.5s ease-out",
                      }}
                      fontWeight="bold"
                      flexDirection={"row"}
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </Text>
                  </Flex>
                </Button>
              )}
              {
                <MenuList zIndex={2}>
                  <Flex flexDirection={"column"} gap={"5px"} fontSize={"17px"}>
                    <MenuItem
                      onClick={() => {
                        navigate("/favourite");
                      }}
                      icon={<FaRegHeart />}
                    >
                      Wishlist
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/orders");
                      }}
                      icon={<RiLuggageCartLine />}
                    >
                      Orders
                    </MenuItem>

                    <Coupon />

                    <MenuItem
                      onClick={() => {
                        navigate("/cart");
                      }}
                      icon={<BsCart2 />}
                    >
                      Cart
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/userprofile");
                      }}
                      icon={<AiOutlineUserAdd />}
                    >
                      User Profile
                    </MenuItem>
                    <Divider />
                    {token ? (
                      <MenuItem onClick={handleLogoutBtn} icon={<FiLogOut />}>
                        Logout
                      </MenuItem>
                    ) : (
                      <>
                        <MenuItem onClick={() => navigate("/login")}>
                          Login
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/signup")}>
                          Sign Up
                        </MenuItem>
                      </>
                    )}
                  </Flex>
                </MenuList>
              }
            </Menu>
          </Flex>
        )}
      </Flex>
      <Box h={["10px", "20px", "30px", "40px", "40px"]}></Box>
    </>
  );
};

export default Navbar;
