import {
  Center,
  Icon,
  Text,
  useColorMode,
  Box,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export const Category = ({ text, link, name }) => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  return (
    <Center
      h={"60px"}
      cursor={"pointer"}
      paddingX={"15px"}
      _hover={{
        borderBottom:
          location.pathname === "/"
            ? "2px solid white"
            : `2px solid ${colorMode === "light" ? "black" : "white"}`,
      }}
      fontSize={"17px"}
    >
      <Link to={link} name={name}>
        {text}
      </Link>
    </Center>
  );
};

export const DrawerCategory = ({ text, link, name }) => {
  return (
    <Text fontSize={"20px"} fontWeight={500}>
      <Link to={link} name={name}>
        {text}
      </Link>
    </Text>
  );
};

export const NavIcon = ({ iconName }) => {
  const location = useLocation();
  return (
    <Icon
      as={iconName}
      w={"28px"}
      h={"28px"}
      color={location.pathname === "/" && "white"}
      mr={"10px"}
    />
  );
};

export const SearchBox = () => {
  const { colorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery("(max-width: 995px)");
  return (
    <Center
      mr={isLargerThan768 ? 2 : 5}
      ml={isLargerThan768 ? 2 : 0}
      mt={isLargerThan768 ? 3 : 0}
    >
      <Box
        borderRadius={50}
        w={isLargerThan768 ? "full" : "220px"}
        color={colorMode === "light" ? "#ced2d6" : "white"}
        bg={colorMode === "light" ? "#ced2d6" : "transpernt"}
        textAlign={"left"}
        p={"0px 8px"}
        cursor={"text"}
        border={`2px solid ${colorMode === "light" ? "transpernt" : "#ced2d6"}`}
      >
        <Center justifyContent={"left"}>
          <Icon
            color={colorMode === "light" ? "black" : "white"}
            w={"25px"}
            h={"25px"}
            // mr={'0px'}
            as={AiOutlineSearch}
          />
          <Input
            fontSize="16px"
            _focus={{ borderColor: "none", boxShadow: "none" }}
            _hover={{ borderColor: "none", boxShadow: "none" }}
            border="none"
            boxShadow="none"
            placeholder="Search Products..."
            color={colorMode === "light" ? "black" : "white"}
            _placeholder={{
              color: colorMode === "light" ? "black" : "white",
            }}
          />
        </Center>
      </Box>
    </Center>
  );
};
