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
import { Link, useNavigate } from "react-router-dom";
import { nikeLogo } from "../constants/images";
import { Category, NavIcon } from "../components/navbar/CategoryAndIcon";
import { SideDrawer } from "../components/navbar/SideDrawer";
import { FiLogOut } from "react-icons/fi";
import Coupon from "./Coupon";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { useMediaQuery } from '@chakra-ui/react'
import { removeItem } from "../utils/cookiestorage";
import { logoutApi } from "../redux/Reducers/authReducer";


export const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { orderSummary } = useSelector((state) => state.cartReducer) || 0;
  const user = useSelector((state) => state.auth.user) || "test";
  const dispatch = useDispatch()

  const [isLargerThan800] = useMediaQuery('(min-width: 720px)')

  const handleLogoutBtn = () => {
    removeItem("token")
    removeItem("user")
    dispatch(logoutApi())
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

        <Box display={["none", "none", "flex", "flex", "flex"]}>
          <Category name={"sale"} text={"SALE"} link={"/sale"} />
          <Category name={"newin"} text={"NEW IN"} link={"/newin"} />
          <Category
            name={"summershop"}
            text={"SUMMER SHOP"}
            link={"/summershop"}
          />
          <Category name={"goingout"} text={"GOING OUT"} link={"/goingout"} />
        </Box>

        <Spacer />

        <Center position={"relative"} mr={"10px"}>
          <Link to={"/favourite"}>
            <NavIcon iconName={RiHeartLine} />
          </Link>
        </Center>

        <Center position={"relative"} mr={"10px"}>
          <Link to={"/cart"}>
            <NavIcon iconName={RiShoppingBagLine} />
            <Box
              position={"absolute"}
              top={0.5}
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
        {!isLargerThan800 && <Box display={["flex", "flex", "none", "none", "none"]}>
          <Center mr={"10px"}>
            {token? (
              <SideDrawer handlePath={"handlePath"} />
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
                <Flex flexDirection={"row"} gap={"5px"}>
                  <Text onClick={() => navigate("/login")}>Login</Text>|
                  <Text onClick={() => navigate("/signup")}>Sign Up</Text>
                </Flex>
              </Button>
            )}
          </Center>
        </Box>}


        {/* <Box display={["flex", "flex", "none", "none", "none"]}>
          <Center mr={"10px"}>
            {token ? (
              <SideDrawer handlePath={"handlePath"} />
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
                <Flex flexDirection={"row"} gap={"5px"}>
                  <Text onClick={() => navigate("/login")}>Login</Text>|
                  <Text onClick={() => navigate("/signup")}>Sign Up</Text>
                </Flex>
              </Button>
            )}
          </Center>
        </Box> */}

        {isLargerThan800 && <Flex alignItems={"center"} marginTop={"-10px"}>
          <Menu>
            {token ? (
              <MenuButton
                as={Button}
                transition="all 0.3s"
                _hover={{
                  bg: "transparent",
                }}
                _focus={{ boxShadow: "none" }}
                size="sm"
                bg={"transparent"}
                rightIcon={<BsFillCaretDownFill />}
              >
                {user.firstName}
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
                <Flex flexDirection={"row"} gap={"5px"}>
                  <Text onClick={() => navigate("/login")}>Login</Text>|
                  <Text onClick={() => navigate("/signup")}>Sign Up</Text>
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
                  <Divider />
                  <MenuItem onClick={handleLogoutBtn} icon={<FiLogOut />}>
                    Logout
                  </MenuItem>
                </Flex>
              </MenuList>
            }
          </Menu>
        </Flex>}
      </Flex>
      <Box h={["10px", "20px", "30px", "40px", "40px"]}></Box>
    </>
  );
};

export default Navbar;
