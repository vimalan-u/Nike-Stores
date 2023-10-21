import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { product, ...rest } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  const navigate = useNavigate();
  const handleProduct = (id) => {
    navigate(`/adminaupdateproduct/${id}`);
  };
  return (
    <Box
      bg={brandColor}
      p="15px"
      mb={10}
      sx={{
        background: " rgba(26,32,44, 1)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        border: "1px solid rgba(255, 255, 255, 0.22)",
        color: "#fff !important",
      }}
    >
      <Flex
        justify="space-around"
        align="flex-start"
        rowGap={10}
        direction={{ base:"column-reverse",  lg: "row" }}
        minW={"lg"}
      >
        <Image
          h="100px"
          w="100px"
          src={product.img[0]}
          borderRadius="8px"
          me="20px"
        />
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {product.title}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            {product.price}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            {product.gender}
          </Text>
        </Box>
        <Button
          onClick={() => handleProduct(product.id)}
          variant="no-hover"
          rounded={"lg"}
          p="0px !important"
          cursor={"pointer"}
          border={"1px solid black"}
          ml={[180,480,200,0,0]}
          mt={-7}
          sx={{
            background: "#1A202C",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(0px)",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            color: "#fff !important",

          }}
        >
          <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
        </Button>
      </Flex>
    </Box>
  );
}
