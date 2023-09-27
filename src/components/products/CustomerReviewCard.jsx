import React from "react";
import {
    Avatar,
    Box,
    Flex,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import StarRating from "./StarRating";

export default function CustomerReviewCard(props) {
    const { name, reviewdescription, numReviews, ...rest } = props;
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    return (
        <Box background={useColorModeValue("white", "navy.700")} p='14px' w="full">
            <Flex align={"flex-start"} direction={"row"}>
                <Avatar h='60px' w='60px' borderRadius='8px' me='20px' />
                <Flex align={"flex-start"} direction={"column"} gap={3} w="full">
                    <Stack w="full" direction={"column"} gap={0}>
                        <Box mt={{ base: "10px", md: "0" }}>
                            <Text
                                color={textColorPrimary}
                                fontWeight='500'
                                fontSize='md'
                                mb='4px'
                            >
                                {name}
                            </Text>
                        </Box>
                        <StarRating  numReviews={numReviews} />
                    </Stack>
                    <Box
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        p={"3"}
                        pt={"2"}
                        w="full"
                    >
                        <Text
                            color={textColorPrimary}
                            fontWeight='500'
                            fontSize='md'
                        >
                            {reviewdescription}
                        </Text>
                    </Box>

                </Flex>
            </Flex>
        </Box>
    );
}
