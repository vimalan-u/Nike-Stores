import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginSuccess } from "../redux/Reducers/authReducer";

export default function LoginCard() {
    const [signUpcreds, setsignUpcreds] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();

    const hanldeChange = (e) => {
        const { name, value } = e.target;
        setsignUpcreds({
            ...signUpcreds,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        dispatch(getLoginSuccess(signUpcreds, toast, navigate));
    };


    let color = useColorModeValue("white", "gray.700")

    return (
        <>
            <Box marginTop={["-10px", "-20px", "-30px", "-40px", "-40px"]}></Box>
            <Flex
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
                width={"100%"}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"}>Login to your account</Heading>
                        <Text fontSize={"lg"} color={'gray.600'}>
                            to buy all of our cool <Link color={"blue.400"}>Products</Link>{" "}
                            ✌️
                        </Text>
                    </Stack>
                    <Box rounded={"lg"} bg={color} boxShadow={"lg"} p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input name="email" type="email" onChange={hanldeChange} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    onChange={hanldeChange}
                                    type="password"
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Text
                                        cursor={"pointer"}
                                        color={"blue.400"}
                                    >
                                        Forgot password?
                                    </Text>
                                </Stack>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    bgColor={"rgb(0,0,0)"}
                                    _hover={{
                                        boxShadow: "xl",
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Login
                                </Button>
                            </Stack>
                            <Stack>
                                <Box
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    display={"flex"}
                                >
                                    {"Don't have a account?"}
                                    <Link to={"/signup"}>
                                        <Text
                                            ml={1}
                                            textDecorationLine={"underline"}
                                            color={"blue.400"}
                                        >
                                            Sign Up
                                        </Text>
                                    </Link>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>


    );
}
