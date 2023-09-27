import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
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
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} data={[]} />
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} data={[]} />
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} data={[]} />
                    <CustomerReviewCard name={"Venketesh Rushi"} reviewdescription={"Currently Working On Review Functionality"} data={[]} />
                </Flex>
            </Box>
        </Flex>
    )
}

export default ReviewBox;
