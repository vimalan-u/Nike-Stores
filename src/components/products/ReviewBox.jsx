import {
    Flex,
    Box,
    useColorModeValue,
} from '@chakra-ui/react'

import CustomerReviewCard from './CustomerReviewCard'


function ReviewBox() {
    return (
        <Flex w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                w="full"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                p="6"
            >
                <Flex direction={"column"} justifyContent="space-between" alignContent="center">
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} numReviews={"35"} />
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} numReviews={"25"} />
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} numReviews={"12"} />
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} numReviews={"150"} />
                </Flex>
            </Box>
        </Flex>
    )
}

export default ReviewBox;
