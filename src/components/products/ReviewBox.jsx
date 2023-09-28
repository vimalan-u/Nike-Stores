import {
    Flex,
    Box,
    useColorModeValue,
} from '@chakra-ui/react'

import CustomerReviewCard from './CustomerReviewCard'


function ReviewBox() {
    const bg = useColorModeValue('white', 'gray.800')
    return (
        <Flex w="full" alignItems="center" justifyContent="center">
            <Box
                bg={bg}
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
