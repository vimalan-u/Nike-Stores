import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ClothSection } from "../components/home/ClothSection";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClothData } from "../redux/Reducers/homeReducer";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getHomeClothData()
  }, []);

  async function getHomeClothData() {
    try {
      const response = await dispatch(getClothData()).unwrap();
      // console.log(response)
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError)
    }
  }

  return (
    <Box width={"100%"}>
      <Box
        width={"89%"}
        m={"auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={["left", "left", "left", "center"]}
        justifyContent={"center"}
        mt={7}
        mb={["25px", "30px", "33px", "43px", "56px"]}
        textAlign={["left", "left", "left", "center"]}
      >
        <Box>
          <Heading
            fontSize={["40px", "45px", "50px", "60px", "65px"]}
            fontFamily={"heading"}
          >
            FEEL IT TO GET IT
          </Heading>
          <Text>UP TO 70% OFF EVERYTHING!</Text>
        </Box>
        <HStack
          width={["100%", "100%", "80%", "80%", "70%"]}
          align={"center"}
          justifyContent={[
            "flex-start",
            "flex-start",
            "flex-start",
            "space-around",
            "space-around",
          ]}
          mt={[3, 3, 5, 10, 10]}
          gap={10}
        >
          <Button
            width={["100%", "50%", "35%"]}
            sx={{
              background: "rgba(0, 0, 0, 0.78)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.71)",
              backdropFilter: "blur(4.4px)",
              WebkitBackdropFilter: "blur(4.4px)",
            }}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            _hover={{
              bgColor: "black",
            }}
            fontWeight={"bolder"}
            onClick={() => navigate("/sale")}
          >
            SHOP NOW
          </Button>
          <Button
            width={["100%", "50%", "35%"]}
            sx={{
              background: "rgba(0, 0, 0, 0.78)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.71)",
              backdropFilter: "blur(4.4px)",
              WebkitBackdropFilter: "blur(4.4px)",
            }}
            color={"white"}
            p={"6px 20px"}
            borderRadius={30}
            alignItems={"center"}
            fontWeight={"bolder"}
            _hover={{
              bgColor: "black",
            }}
            onClick={() => navigate("/contactus")}
          >
            CONTACT US!
          </Button>
        </HStack>
      </Box>
      <Text
        width={"89%"}
        fontSize={"25px"}
        textAlign={"left"}
        fontWeight={"bolder"}
        m={"auto"}
        marginBottom={3}
      >
        Featuerd
      </Text>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "row", "row"]}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        width={"90%"}
        m={"auto"}
        maxHeight={"max-content"}
      >
        <Box
          background={
            "url(https://i1.adis.ws/i/boohooamplience/bmm40185_bright%20pink_xl/bright-pink-oversized-cord-shirt?$product_image_main_tablet$) center/cover no-repeat"
          }
          width={["100%", "100%", "50%", "50%"]}
          height={["280px", "380px", "400px", "650px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
          onClick={() => navigate("/sale")}
        >
          <Box
            color={"white"}
            // wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text
              _hover={{
                color: "rgba(0, 0, 0, 1.1)",
                transition: "color 0.5s ease-out",
              }}
              fontWeight="bold"
            >
              {"Valentine's Day Looks"}
            </Text>

            <Text
              _hover={{
                color: "rgba(0, 0, 0, 1.1)",
                transition: "color 0.5s ease-out",
              }}
              fontWeight="bold"
              fontSize={"24px"}
            >
              Partner Up and Reach those Goals
            </Text>
            <HStack mt={5}>
              <Button
                fontWeight={"bold"}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={() => navigate("/sale")}
              >
                Explore
              </Button>
              <Button
                fontWeight={"bold"}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={() => navigate("/men")}
              >
                Top 10 Gifts
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box
          background={
            "url(https://media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom$&fmt=webp%201x,%20//media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom_2x$&fmt=webp%202x) center/cover no-repeat"
          }
          width={["100%", "100%", "50%", "50%"]}
          height={["280px", "380px", "400px", "650px"]}
          minHeight={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
          onClick={() => navigate("/sale")}
        >
          <Box
            color={"white"}
            // wordWrap={"break-word"}
            width={["100%", "80%", "90%", "90%"]}
            height={["80%", "70%", "50%", "64%", "85%"]}
            textAlign="left"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <Text
              _hover={{
                color: "rgba(0, 0, 0, 1.1)",
                transition: "color 0.5s ease-out",
              }}
              fontWeight="bold"
              onClick={() => navigate("/sale")}
            >
              Early Access
            </Text>
            <Text
              _hover={{
                color: "rgba(0, 0, 0, 1.1)",
                transition: "color 0.5s ease-out",
              }}
              fontWeight="bold"
              fontSize={"24px"}
              onClick={() => navigate("/men")}
            >
              Top Selling
            </Text>
            <HStack mt={5}>
              <Button
                fontWeight={"bold"}
                bgColor={"white"}
                p={"6px 20px"}
                borderRadius={20}
                color={"black"}
                alignItems={"center"}
                onClick={() => navigate("/sale")}
              >
                Get It First
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box>
        <ClothSection />
      </Box>
    </Box>
  );
}
export default Home;
