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
  Select,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginSuccess, resetpassword } from "../redux/Reducers/authReducer";
import { setToast } from "../utils/extraFunctions";

export default function LoginCard() {
  const [signUpcreds, setsignUpcreds] = useState({});
  const [reset, setreset] = useState(false);
  const [resetemail, setresetemail] = useState("");
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
    dispatch(getLoginSuccess(signUpcreds));
    setToast(toast, "Signup successfully", "success");
    navigate(-1);
  };

  let color = useColorModeValue("white", "gray.700");

  const handleSubmitreset = () => {
    dispatch(resetpassword(resetemail, toast, navigate));
  };

  return (
    <>
      <Box marginTop={["-5px", "-10px", "-20px", "-30px", "-40px"]}></Box>
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        width={"100%"}
      >
        {reset ? (
          <Stack
            spacing={5}
            mx={"auto"}
            maxW={"2xl"}
            py={8}
            px={8}
            boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
          >
            <Stack align={"center"} spacing={2}>
              <Heading fontSize={"4xl"}>Enter Your Email</Heading>
              {/* <Text color={'gray.600'} fontSize={"lg"}>Please provide your email address to receive a one-time password (OTP) for the purpose of resetting your password.</Text> */}
              <Text color={"gray.600"} fontSize={"lg"}>
                This OTP will be sent to your email.
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={color} boxShadow={"lg"} px={4}>
              <Stack spacing={4}>
                <Text color={"gray.600"} fontSize={"md"} fontWeight="bold">
                  Email Address
                </Text>
                <Input
                  type="email"
                  value={resetemail}
                  onChange={(e) => setresetemail(e.target.value)}
                  variant={"filled"}
                  placeholder="Enter your email address"
                  required={true}
                />
                <Stack spacing={3}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    bgColor={"rgb(0,0,0)"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    onClick={handleSubmitreset}
                  >
                    Submit
                  </Button>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                  >
                    Return To{" "}
                    <Text
                      ml={1}
                      textDecorationLine={"underline"}
                      color={"blue.400"}
                      cursor={"pointer"}
                      onClick={() => setreset(false)}
                    >
                      Login
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        ) : (
          <Stack
            spacing={8}
            mx={"auto"}
            maxW={"2xl"}
            py={8}
            px={10}
            // boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
          >
            <Stack align={"center"}>
              <Heading fontSize={"3xl"}>Login to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to buy all of our cool <Link color={"blue.400"}>Products</Link>{" "}
                ✌️
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={color} boxShadow={"lg"} p={6}>
              <Stack spacing={3}>
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
                <Stack spacing={5}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text
                      cursor={"pointer"}
                      color={"blue.400"}
                      onClick={() => setreset(true)}
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
        )}
      </Flex>
      <Box marginTop={["-10px", "-20px", "-30px", "-40px", "-40px"]}></Box>
    </>
  );
}
