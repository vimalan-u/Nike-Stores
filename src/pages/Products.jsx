import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../utils/extraFunctions";
import { LeftSideFilter } from "../components/products/LeftSideFilter";
import { SortFilters } from "../components/products/SortFilters";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductDisplayBox } from "../components/products/ProductDisplayBox";
import { Loading } from "../components/loading/Loading";
import { Error } from "../components/loading/Error";
import { getProductsData } from "../redux/Reducers/productsReducer";

function Products() {
  const { colorMode } = useColorMode();
  const [isFilter, setIsFilter] = useState(true);
  const { products, loading, error } = useSelector((state) => state.product);
  const url = window.location.href.split("/")[3];

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (url === "men") {
      setToast(toast, "Welcome to the Mens Section", "success");
      dispatch(getProductsData("men"));
    } else if (url === "women") {
      setToast(toast, "Welcome to the Womens Section", "success");
      dispatch(getProductsData("women"));
    } else if (url === "kids") {
      setToast(toast, "Welcome to the Kids Section", "success");
      dispatch(getProductsData("kids"));
    } else {
      setToast(toast, "SALE IS LIVE", "success");
      dispatch(getProductsData("sale"));
    }
  }, [url]);

  const resetFilter = () => {
    setIsFilter(!isFilter);
    if (url === "men") {
      dispatch(getProductsData("men"));
      setToast(toast, "Filter Reset Successfully", "success");
    } else if (url === "women") {
      dispatch(getProductsData("women"));
      setToast(toast, "Filter Reset Successfully", "success");
    } else if (url === "kids") {
      dispatch(getProductsData("kids"));
      setToast(toast, "Filter Reset Successfully", "success");
    } else {
      dispatch(getProductsData("sale"));
      setToast(toast, "Filter Reset Successfully", "success");
    }
  };

  const handleSingleProduct = (data) => {
    navigate(`/description/${data.id}`);
  };

  return (
    <>
      <Flex
        direction={["column", "column", "row", "row", "row"]}
        h={["100px", "100px", "60px", "60px", "60px"]}
        position={"sticky"}
        top={"0px"}
        bg={colorMode === "light" ? "white" : "#1a202c"}
        zIndex={1}
      >
        <Center textAlign={"start"}>
          <Text
            w={"100%"}
            ml={["20px", "20px", "30px", "40px", "50px"]}
            fontSize={["20px", "25px"]}
            fontWeight={500}
          >
            {location.pathname === "/men"
              ? "Mens Products"
              : location.pathname === "/women"
              ? "Womens Products"
              : location.pathname === "/kids"
              ? "Kids Products"
              : "Total Products"}{" "}
            [{products.length}]
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Flex
            gap={["4px"]}
            w={"100%"}
            my={["10px", "10px", "0px", "0px", "0px"]}
            px={["8px", "8px", "20px", "20px", "20px"]}
            align={"center"}
          >
            <Button
              color={"white"}
              bgColor={"rgb(0,0,0)"}
              _hover={{
                color: "white",
                bgColor: "rgb(0,0,0)",
              }}
              size="sm"
              fontSize={["12px", "15px"]}
              onClick={() => {
                setIsFilter(!isFilter);
              }}
              rightIcon={
                <IoOptionsOutline enableBackground={"false"} color="white" />
              }
            >
              {isFilter ? "Hide Filter" : "Show Filter"}
            </Button>
            <Spacer />
            <Button
              color={"white"}
              bgColor={"rgb(0,0,0)"}
              _hover={{
                color: "white",
                bgColor: "rgb(0,0,0)",
              }}
              size="sm"
              fontSize={["12px", "15px"]}
              onClick={resetFilter}
            >
              Reset Filter
            </Button>
            <Spacer />
            <SortFilters />
          </Flex>
        </Center>
      </Flex>

      <Grid
        gap={["20px", "20px", "2%", "2%", "2%"]}
        templateColumns={[
          "100%",
          "100%",
          isFilter ? "32% 66%" : "100%",
          isFilter ? "28% 70%" : "100%",
          isFilter ? "20% 78%" : "100%",
        ]}
        justifyContent={"center"}
      >
        {isFilter && (
          <Box
            minH={["120px", "120px", "600px", "600px", "600px"]}
            maxH={["900px", "600px"]}
            position={["none", "none", "sticky", "sticky", "sticky"]}
            top={["0px", "70px"]}
            overflowY={"scroll"}
            className="scroll"
            zIndex={0}
            mt={["10px", "10px", "20px", "20px", "20px"]}
          >
            <LeftSideFilter />
          </Box>
        )}

        <Box minH={"400px"}>
          {loading ? (
            <Loading />
          ) : error === "Rejected" ? (
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1pxx solid red"}
              marginTop={"20%"}
            >
              <Text fontSize={"20px"} fontWeight={500} textAlign={"center"}>
                Products not found! Change the filter or click on the reset
                button to see products.
              </Text>
            </Box>
          ) : error ? (
            <Error />
          ) : (
            <Grid
              gap={[2, 4]}
              p={["10px", "10px", "20px", "20px", "20px"]}
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {products?.map((product, index) => (
                <ProductDisplayBox
                  {...product}
                  key={index}
                  onClick={() => {
                    handleSingleProduct(product);
                  }}
                />
              ))}
            </Grid>
          )}
        </Box>
      </Grid>
    </>
  );
}
export default Products;
