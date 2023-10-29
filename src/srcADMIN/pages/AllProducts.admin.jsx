import React, { useState, useEffect } from "react";
import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import { Error } from "../../components/loading/Error";
import { Loading } from "../../components/loading/Loading";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductCard from "../components/AllProducts/ProductCard";
import { ProductDisplayBox } from "../../components/products/ProductDisplayBox";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      let response = await axios("/admin/getproducts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  const handleSingleProduct = (data) => {
    navigate(`/adminaupdateproduct/${data.id}`);
  };

  return (
    <Box mb={{ base: "0px", "2xl": "20px" }}>
      {/* <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="10px"
        textAlign={"left"}
      >
        All Products
      </Text> */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={5}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : products.length > 0 ? (
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
        ) : (
          <Box my={"140px"}>
            <Text fontSize={"20px"} fontWeight={500} textAlign={"center"}>
              Users Not Found!
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
