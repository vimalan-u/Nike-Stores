import {
  Center,
  Icon,
  Text,
  useColorMode,
  Box,
  Input,
  useMediaQuery,
  List,
  ListItem,
  useColorModeValue,
  CloseButton,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchedProductList from "./SearchedProductList";
import { setToast } from "../../utils/extraFunctions";

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
  const [isLargerThan780] = useMediaQuery("(min-width: 995px)");
  const [isLargerThan426] = useMediaQuery("(min-width: 426px)");
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    let timeout;
    if (searchInput.trim() !== "") {
      timeout = setTimeout(() => {
        getSearchData();
      }, 1000);
    } else {
      handleClose();
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  async function getSearchData() {
    try {
      let searchedProducts = await axios.get(
        `/product/getsearchedproduct?query=${searchInput.trim()}`
      );
      setProducts(searchedProducts?.data);
      if (searchedProducts.data.length > 0) {
        setIsOpen(true);
      } else {
        setToast(toast, "Products Not Found!", "error");
        setSearchInput("");
        setProducts([]);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleClose = () => {
    setIsOpen(false);
    setSearchInput("");
    setProducts([]);
  };

  return (
    <Center>
      <Box
        borderRadius={50}
        w={isLargerThan780 ? "250px" : isLargerThan426 ? "full" : "full"}
        color={colorMode === "light" ? "#ced2d6" : "white"}
        bg={colorMode === "light" ? "#ced2d6" : "transparent"}
        textAlign={"left"}
        p={isLargerThan426 && "0px 8px"}
        cursor={"text"}
        border={`2px solid ${
          colorMode === "light" ? "transparent" : "#ced2d6"
        }`}
        position={"relative"}
      >
        <Center justifyContent={"left"} padding={isLargerThan426 && "0 10px"}>
          {isLargerThan426 && (
            <Icon
              color={colorMode === "light" ? "black" : "white"}
              w={"25px"}
              h={"25px"}
              mr={["0px", "5px", "10px", "10px"]}
              as={AiOutlineSearch}
            />
          )}
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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </Center>
      </Box>
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          bottom="0"
          left="0"
          right="0"
          backgroundColor="rgba(0, 0, 0, 0.4)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="2"
          onClick={handleClose}
        >
          <Box
            zIndex={4}
            marginTop={10}
            bg={bg}
            borderRadius={"25px"}
            p={5}
            pb={4}
          >
            <HStack align={"center"} justify={"space-between"} p={4}>
              <Text fontSize={["sm", "sm", "md", "lg", "xl"]}>Products</Text>
              <CloseButton border={"1px solid white"} onClick={handleClose} />
            </HStack>
            <Box>
              <List
                maxHeight="400px"
                overflowY="auto"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "2px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "0px",
                  },
                  "&::-webkit-scrollbar-thumb:vertical": {
                    background: "white",
                    borderRadius: "24px",
                  },
                }}
              >
                {products.map((ele) => (
                  <ListItem
                    key={ele.id}
                    onClick={() => {
                      handleClose();
                      navigate(`/description/${ele.id}`);
                    }}
                    _hover={{
                      cursor: "pointer",
                    }}
                  >
                    <SearchedProductList
                      image={ele.img[0]}
                      title={ele.title}
                      gender={ele.gender}
                      rating={ele.ratings[0].rating}
                      price={ele.price}
                      size={ele.size}
                      category={ele.category}
                      color={ele.color}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      )}
    </Center>
  );
};
