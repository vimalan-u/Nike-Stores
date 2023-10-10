import React from "react";
import {
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { numberWithCommas } from "../../utils/extraFunctions";

export default function SearchedProductList({
  image,
  title,
  gender,
  rating,
  price,
  size,
  category,
  color,
}) {
  const textColor = useColorModeValue("brands.900", "white");
  const bgItem = useColorModeValue(
    { bg: "white", boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)" },
    { bg: "navy.700", boxShadow: "unset" }
  );
  const textColorDate = useColorModeValue("secondaryGray.600", "white");
  const bg = useColorModeValue("gray.800");
  return (
    <Box
      _hover={bgItem}
      bg="transparent"
      boxShadow="unset"
      px="24px"
      py="21px"
      transition="0.2s linear"
      width={["full", "full", "full", "xl", "xxl"]}
    >
      <Flex direction={{ base: "column" }} justify="center" bg={bg}>
        <Flex position="relative" align="center">
          <Image src={image} w="70px" h="70px" borderRadius="15px" me="16px" />
          <Flex
            direction="column"
            w={{ base: "70%", md: "100%" }}
            me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
          >
            <Text
              color={textColor}
              fontSize={{
                base: "sm",
              }}
              mb="5px"
              fontWeight="bold"
              me="14px"
            >
              {title}
            </Text>
            <Text
              color="secondaryGray.600"
              fontSize={{
                base: "sm",
              }}
              fontWeight="400"
              me="14px"
            >
              ₹ {numberWithCommas(price)}
            </Text>
            <Text
              color="secondaryGray.600"
              fontSize={{
                base: "sm",
              }}
              fontWeight="400"
              me="14px"
            >
              {color}
            </Text>
          </Flex>
          <Text ms="auto" fontWeight="700" fontSize="sm" color={textColorDate}>
            {gender}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
