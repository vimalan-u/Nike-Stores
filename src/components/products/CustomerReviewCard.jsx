import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import StarRating from "./StarRating";
import { shortStringReview } from "../../utils/extraFunctions";

export default function CustomerReviewCard(props) {
  const { name, reviewdescription, numReviews, ...rest } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Box background={bg} p="14px" w="full">
      <Flex align={"flex-start"} direction={"row"}>
        {   (Math.random() * 10) % 2 > 1 ? (
          <Avatar name={name} h="60px" w="60px" borderRadius="8px" me="20px" />
        ) : (
          <Avatar h="60px" w="60px" borderRadius="8px" me="20px" />
        )}

        <Flex align={"flex-start"} direction={"column"} gap={1} w="full">
          <Stack w="full" direction={"column"} gap={0}>
            <Box mt={{ base: "10px", md: "0" }}>
              <Text
                color={textColorPrimary}
                fontWeight="500"
                fontSize="md"
                mb="4px"
              >
                {name}
              </Text>
            </Box>
            <StarRating numReviews={numReviews} />
          </Stack>
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            p={"2"}
            pt={"2"}
            w="full"
            maxW={"sm"}
            ml={"-10px"}
            maxH={"150px"}
          >
            <Text color={textColorPrimary} fontWeight="500" fontSize="md">
              {shortStringReview(reviewdescription)}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
