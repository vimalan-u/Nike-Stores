import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClothSection } from "../components/home/ClothSection";
import { Error } from "../components/loading/Error.jsx";
import { Loading } from "../components/loading/Loading.jsx";
import { getClothData } from "../redux/Reducers/homeReducer";

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, clothData } = useSelector(
        (state) => state.home
    );

    useEffect(() => {
        dispatch(getClothData());
    }, []);

    return loading ? (
        <Loading />
    ) : error ? (
        <Error />
    ) : (
        <Box width={"100%"}>
            <Box width={"89%"} m="auto" objectFit={"contain"}>
                <Image src="https://media.boohoo.com/i/boohooamplience/080823-LUCIO-AMMEND-DESK?$homesplash_desktop_full$&_1x$&fmt=webp" alt="banner" />
            </Box>
            <Box
                width={"89%"}
                m={"auto"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={["left", "left", "left", "center"]}
                justifyContent={"center"}
                mt={6}
                mb={9}
                textAlign={["left", "left", "left", "center"]}
            >
                <Box>
                    <Text mb={-3}>boohooMAN</Text>
                    <Heading
                        letterSpacing={"-3px"}
                        fontSize={"72px"}
                        fontFamily={"heading"}
                    >
                        FEEL IT TO GET IT
                    </Heading>
                    <Text>
                        UP TO 70% OFF EVERYTHING!
                    </Text>
                </Box>
                <HStack mt={5}>
                    <Button
                        bgColor={"black"}
                        color={"white"}
                        p={"6px 20px"}
                        borderRadius={30}
                        alignItems={"center"}
                        fontWeight={0}
                        _hover={{
                            bgColor: "black",
                        }}
                    // onClick={handlePath}
                    >
                        Shop
                    </Button>
                    <Button
                        bgColor={"black"}
                        color={"white"}
                        p={"6px 20px"}
                        borderRadius={30}
                        alignItems={"center"}
                        fontWeight={0}
                        _hover={{
                            bgColor: "black",
                        }}
                    >
                        Watch
                    </Button>
                </HStack>
            </Box>
            <Text
                m={"auto"}
                width={"89%"}
                fontSize={"24px"}
                textAlign={"left"}
                fontWeight={"500"}
                marginBottom={2}
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
                >
                    <Box
                        color={"white"}
                        wordWrap={"break-word"}
                        width={["100%", "80%", "90%", "90%"]}
                        height={["80%", "70%", "50%", "64%", "85%"]}
                        textAlign="left"
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-end"}
                    >
                        <Text>{"Valentine's Day Looks"}</Text>
                        <Text fontSize={"24px"}>Partner Up and Reach those Goals</Text>
                        <HStack mt={5}>
                            <Button
                                fontWeight={0}
                                bgColor={"white"}
                                p={"6px 20px"}
                                borderRadius={20}
                                color={"black"}
                                alignItems={"center"}
                            // onClick={handlePath}
                            >
                                Explore
                            </Button>
                            <Button
                                fontWeight={0}
                                bgColor={"white"}
                                p={"6px 20px"}
                                borderRadius={20}
                                color={"black"}
                                alignItems={"center"}
                            // onClick={handlePath}
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
                >
                    <Box
                        color={"white"}
                        wordWrap={"break-word"}
                        width={["100%", "80%", "90%", "90%"]}
                        height={["80%", "70%", "50%", "64%", "85%"]}
                        textAlign="left"
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-end"}
                    >
                        <Text>Early Access</Text>
                        <Text fontSize={"24px"}>Top Selling</Text>
                        <HStack mt={5}>
                            <Button
                                fontWeight={0}
                                bgColor={"white"}
                                p={"6px 20px"}
                                borderRadius={20}
                                color={"black"}
                                alignItems={"center"}
                            // onClick={handlePath}
                            >
                                Get It First
                            </Button>
                        </HStack>
                    </Box>
                </Box>
            </Box>
            <Box>
                {clothData.map((data, index) => (
                    <ClothSection handleSection={"handleSection"} key={index} {...data} />
                ))}
            </Box>
        </Box>
    );
}
export default Home;
