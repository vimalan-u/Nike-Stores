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
    <Box bg={bg} p="14px">
      <Flex align="flex-start" direction={{ base: "column", md: "row" }}>
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
          mt={"-5px"}
          me="16px"
          ms="auto"
          p="0px !important"
          cursor={"pointer"}
        >
          <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
        </Button>
      </Flex>
    </Box>
  );
}
