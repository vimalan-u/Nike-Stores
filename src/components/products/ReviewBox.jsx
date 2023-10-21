import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import CustomerReviewCard from "./CustomerReviewCard";

function ReviewBox({ data }) {
  const bg = useColorModeValue("white", "gray.800");
  const scrollbarColor = useColorModeValue("gray.800", "white");
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box bg={bg} w="full" borderWidth="1px" rounded="lg" shadow="lg" p="6">
        <Flex
          direction={"column"}
          justifyContent="space-between"
          alignContent="center"
          maxH={"360px"}
          overflow={"auto"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {data?.ratings?.map((ele) => (
            <CustomerReviewCard
              key={ele.reviewdes}
              name={
                ele?.userName?.split(" ").length > 1
                  ? ele.userName.split(" null")[0].charAt(0).toUpperCase() +
                    ele.userName.split(" null")[0].slice(1)
                  : "Venketesh Rushi"
              }
              reviewdescription={ele.reviewdes}
              numReviews={ele.rating}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default ReviewBox;
