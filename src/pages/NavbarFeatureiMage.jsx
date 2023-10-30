import {
  Box,
  Flex,
  useMediaQuery,
  Text,
  Center,
  Image,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { NavIcon, SearchBox } from "../components/navbar/CategoryAndIcon";
import { Link } from "react-router-dom";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import Navbar from "./Navbar";
import { SideDrawer } from "../components/navbar/SideDrawer";
import { homeImage, nikeLogo } from "../constants/images";
import { useSelector } from "react-redux";

const NavbarFetureimages = () => {
  const [isLargerThan420] = useMediaQuery("(min-width: 450px)");
  const [isLargerThan580] = useMediaQuery("(min-width: 580px)");
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isLargerThan768] = useMediaQuery("(max-width: 995px)");
  const { orderSummary } = useSelector((state) => state.cart) || 0;
  return (
    <>
      {isLargerThan420 ? (
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
            backgroundImage={`url(${homeImage})`}
            backgroundSize="100% 100%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Navbar />
          </Box>
        </Box>
      ) : (
        <Flex h={"80px"} py="1" flexDirection={"row"} px={"20px"}>
          {!isLargerThan768 && (
            <Box w={"80px"}>
              <Link to={"/"}>
                {/* <Image src={nikeLogo} loading="lazy"/> */}
                <picture>
                  <source srcSet={nikeLogo} type="image/webp" />
                  <img src={nikeLogo} alt="Nike Logo" loading="lazy" />
                </picture>
              </Link>
            </Box>
          )}

          <Spacer />

          <Center position={"relative"} mr={"30px"} mt={1}>
            <SearchBox />
          </Center>

          <Center
            position={"relative"}
            mt={isLargerThan780 ? 2 : 3}
            mr={"10px"}
          >
            <Link to={"/favourite"}>
              <Icon
                w={"28px"}
                h={"28px"}
                color={location.pathname === "/" && "white"}
                mr={"10px"}
                as={RiHeartLine}
              />
            </Link>
          </Center>

          <Center
            position={"relative"}
            mt={isLargerThan780 ? 2 : 3}
            mr={"10px"}
          >
            <Link to={"/cart"}>
              <Icon
                w={"28px"}
                h={"28px"}
                color={location.pathname === "/" && "white"}
                mr={"10px"}
                as={RiShoppingBagLine}
              />
              <Box
                position={"absolute"}
                top={1}
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
