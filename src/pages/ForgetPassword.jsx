import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  PinInput,
  PinInputField,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToast } from "../utils/extraFunctions";
import { removepassword } from "../redux/Reducers/authReducer";
import { getItem } from "../utils/cookiestorage";

export default function Forgetpassword() {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resetepass, setresetepass] = useState("");
  const [code, setCode] = useState(null);

  const resetemail = useSelector((state) => state.auth.resetemail);

  const handleChange = (e) => {
    setCode(e);
  };

  const handlesubmit = async () => {
    let otp = getItem("otp");
    if (otp === code) {
      try {
        let res = await axios.post("/auth/resetpassword", {
          data: { email: resetemail, password: resetepass },
        });
        dispatch(removepassword());
        setToast(toast, res.data, "success");
        Cookies.remove("otp");
        navigate("/login");
      } catch (error) {
        setToast(
          toast,
          error.response.data.message
            ? error.response.data.message
            : "Something Went Wrong",
          "error"
        );
      }
    } else {
      if (resetepass === "") {
        setToast(toast, "Enter New Password", "error");
      } else {
        setToast(toast, "OTP Is Incorrect", "error");
      }
    }
  };
  return (
    <>
      <Box marginTop={["-10px", "-20px", "-30px", "-40px", "-40px"]}></Box>
      <Flex
        minH={"92.5vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Enter New Password</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Please enter the OTP that was sent to your email.
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="password" isRequired>
                <FormLabel>Enter New Password</FormLabel>
                <Input
                  value={resetepass}
                  onChange={(e) => setresetepass(e.target.value)}
                  type="text"
                />
              </FormControl>
              <Stack direction={"row"} spacing={10}>
                <PinInput otp onChange={(e) => handleChange(e)}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  bgColor={"rgb(0,0,0)"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                  onClick={handlesubmit}
                >
                  Submit
                </Button>
              </Stack>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                mt={2}
              >
                Return to{" "}
                <Link to={"/login"}>
                  <Text
                    ml={1}
                    textDecorationLine={"underline"}
                    color={"blue.400"}
                  >
                    login
                  </Text>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Box marginTop={["-10px", "-20px", "-30px", "-40px", "-40px"]}></Box>
    </>
  );
}
