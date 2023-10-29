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
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGoolgeLoginSuccess,
  getLoginSuccess,
  resetpassword,
} from "../redux/Reducers/authReducer";
import { setToast } from "../utils/extraFunctions";
import GoogleButton from "../components/googleButton/GoogleButton";
import axios from "axios";

export default function LoginCard() {
  const [signUpcreds, setsignUpcreds] = useState({ email: "", password: "" });
  const [reset, setreset] = useState(false);
  const [resetemail, setresetemail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { loading, isLogin } = useSelector((state) => state.auth);
  let color = useColorModeValue("white", "gray.700");

  const location = useLocation();

  useEffect(() => {
    if (isLogin) {
      if (location.state && location.state.from) {
        console.log(location);
        navigate(location.state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isLogin]);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds({
      ...signUpcreds,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (signUpcreds.email === "" || signUpcreds.password === "") {
      return setToast(toast, "Please Fill All The Fields", "error");
    }
    try {
      const response = await dispatch(getLoginSuccess(signUpcreds)).unwrap();
      setToast(toast, "Login successfully", "success");
      getLocation();
      navigate("/");
    } catch (rejectedValueOrSerializedError) {
      console.log("error", rejectedValueOrSerializedError);
      setToast(
        toast,
        rejectedValueOrSerializedError.message
          ? rejectedValueOrSerializedError.message
          : "Invalid Credentials",
        "error"
      );
    }
  };

  const handleSubmitReset = async () => {
    if (resetemail === "") {
      setToast(toast, "Please Enter Your Email", "error");
    }
    try {
      const res = await dispatch(resetpassword(resetemail)).unwrap();
      setToast(toast, "Reset OTP Sent To Your Email", "success");
      navigate("/resetpassword");
    } catch (rejectedValueOrSerializedError) {
      setToast(
        toast,
        rejectedValueOrSerializedError.message
          ? rejectedValueOrSerializedError.message
          : "User Not Found",
        "error"
      );
      console.error(rejectedValueOrSerializedError);
    }
  };

  // const handleGoogleLogin = async () => {
  //    window.open(
  //     `https://nike-clone-tcmw.onrender.com/auth/google/callback`,
  //     "_self"
  //   );
  // };


  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  async function success(pos) {
    let crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    try {
      let response = await axios.post(
        "/auth/addlocation",
        {
          latitude: crd.latitude,
          longitude: crd.longitude,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            console.log("denied", result);
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      console.log("Geolocation is not available on this device.");
    }
  }

  return (
    <>
      <Box marginTop={["-5px", "-10px", "-20px", "-30px", "-40px"]}></Box>
      <Flex
        minH={"75vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        width={"100%"}
      >
        {reset ? (
          <Stack spacing={5} mx={"auto"} maxW={"2xl"} py={10} px={10}>
            <Stack align={"center"} spacing={2}>
              <Heading fontSize={"4xl"}>Enter Your Email</Heading>
              <Text color={"gray.600"} fontSize={"lg"}>
                This OTP will be sent to your email.
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={color} boxShadow={"lg"} p={8}>
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
                    onClick={handleSubmitReset}
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
                      {loading ? (
                        <HStack>
                          <Spinner /> <Text>"Please wait..."</Text>
                        </HStack>
                      ) : (
                        "Login"
                      )}
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        ) : (
          <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={10} px={10}>
            <Stack align={"center"}>
              <Heading fontSize={"3xl"}>Login to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to buy all of our cool <Link color={"blue.400"}>Products</Link>{" "}
                ✌️
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={color} boxShadow={"lg"} p={9}>
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
                    isLoading={loading}
                    loadingText="Validating..."
                    bg={"blue.400"}
                    color={"white"}
                    bgColor={"rgb(0,0,0)"}
                    _hover={{
                      boxShadow: "xl",
                    }}
                    onClick={handleSubmit}
                    mb={-2}
                  >
                    Login
                  </Button>
                  {/* <GoogleButton
                    name={"Login"}
                    handleGoogleLogin={handleGoogleLogin}
                  /> */}
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
