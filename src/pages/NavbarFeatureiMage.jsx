import {
  Box,
  Button,
  Flex,
  useMediaQuery,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
  Center,
  Image,
  Spacer,
} from "@chakra-ui/react";
import {
  Category,
  NavIcon,
  SearchBox,
} from "../components/navbar/CategoryAndIcon";
import { Link, useNavigate } from "react-router-dom";
import {
  RiHeartLine,
  RiLuggageCartLine,
  RiShoppingBagLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import Coupon from "./Coupon";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { removeItem } from "../utils/cookiestorage";
import { logoutApi } from "../redux/Reducers/authReducer";
import { AiOutlineUserAdd } from "react-icons/ai";
import Navbar from "./Navbar";
import { SideDrawer } from "../components/navbar/SideDrawer";
import { nikeLogo } from "../constants/images";

const NavbarFetureimages = () => {
  const [isLargerThan420] = useMediaQuery("(min-width: 450px)");
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const { token } = useSelector((state) => state.auth);
  const { orderSummary } = useSelector((state) => state.cart) || 0;
  const user = useSelector((state) => state.auth.user) || "Test";
  const dispatch = useDispatch();

  const handleLogoutBtn = () => {
    removeItem("token");
    removeItem("user");
    dispatch(logoutApi());
    navigate("/");
  };
  return (
    <>
      {!!isLargerThan420 ? (
        <Box
          width="100%"
          m="auto"
          position="relative"
          //   height="100%"
          height={isLargerThan580 ? "400px" : "100%"}
          paddingTop={`${(232 / 642) * 100}%`}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            background={`url('https://media.boohoo.com/i/boohooamplience/2209_TRANSV2_ROTATE_REFRESH_DESKTOP_EN?$homesplash_desktop_full$&_1x$&fmt=webp')`}
            backgroundSize="100% 100%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Navbar />
          </Box>
        </Box>
      ) : (
        <Flex h={"60px"} py="1" flexDirection={"row"} px={"20px"}>
          <Box w={"80px"}>
            <Link to={"/"}>
              <Image src={nikeLogo} />
            </Link>
          </Box>

          <Spacer />

          <Center
            position={"relative"}
            mt={isLargerThan780 ? 2 : 3}
            mr={"10px"}
          >
            <Link to={"/favourite"}>
              <NavIcon iconName={RiHeartLine} />
            </Link>
          </Center>

          <Center
            position={"relative"}
            mt={isLargerThan780 ? 2 : 3}
            mr={"10px"}
          >
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
            <Box
              mt={isLargerThan780 ? 2 : 3}
              display={["flex", "flex", "none", "none", "none"]}
            >
              <Center mr={"5px"}>
                <SideDrawer />
              </Center>
            </Box>
          )}
        </Flex>
      )}
    </>
  );
};

export default NavbarFetureimages;
