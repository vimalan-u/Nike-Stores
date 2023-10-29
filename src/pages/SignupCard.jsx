import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setToast } from "../utils/extraFunctions";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpcreds, setsignUpcreds] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds({
      ...signUpcreds,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      signUpcreds.name === "" ||
      signUpcreds.email === "" ||
      signUpcreds.password === ""
    ) {
      setToast(toast, "Please Fill All The Fields", "error");
    }
    try {
      setLoading(true);
      let response = await axios.post("/auth/register", signUpcreds);
      setToast(toast, "Signup Successfull", "success");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setToast(
        toast,
        error.response.data.message
          ? error.response.data.message
          : "Invalid Credentials",
        "error"
      );
      console.log(error);
    }
  };
  return (
    <>
      <Box marginTop={["-10px", "-20px", "-30px", "-40px", "-40px"]}></Box>
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={5} mx={"auto"} maxW={"lg"} py={10} px={10}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to see all trending Products ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={7}
          >
            <Stack spacing={4}>
              <FormControl id="Name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input name="name" onChange={hanldeChange} type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input name="email" type="email" onChange={hanldeChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    onChange={hanldeChange}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? (
                        <Icon as={AiFillEye} boxSize={6} />
                      ) : (
                        <Icon as={AiFillEyeInvisible} boxSize={6} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={loading}
                  loadingText="Singing..."
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  bgColor={"rgb(0,0,0)"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack>
                <Box
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  Already a user?{" "}
                  <Link to={"/login"}>
                    <Text
                      ml={1}
                      textDecorationLine={"underline"}
                      color={"blue.400"}
                    >
                      Login
                    </Text>
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Box marginTop={["-10px", "-20px", "-30px", "-40px", "-40px"]}></Box>
    </>
  );
}
