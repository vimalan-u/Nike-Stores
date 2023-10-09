import React, { useState, useEffect } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Error } from "../../components/loading/Error";
import { Loading } from "../../components/loading/Loading";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductCard from "../components/AllProducts/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      console.log("users", response);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Box mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="10px"
        textAlign={"left"}
      >
        All Products
      </Text>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : products.length > 0 ? (
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            width={["100%","80%","70%","60%","60%"]}
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                boxShadow={cardShadow}
                mb="20px"
                product={product}
              />
            ))}
          </Box>
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
