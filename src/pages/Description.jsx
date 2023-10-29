import {
  Badge,
  Box,
  Divider,
  Grid,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  useMediaQuery,
  useToast,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  Textarea,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas, setToast } from "../utils/extraFunctions";
import { ImageModal } from "../components/description/ImageModal";
import { SelectSize } from "../components/description/SelectSize";
import { NewButton } from "../components/description/NewButton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/loading/Loading";
import { Error } from "../components/loading/Error";
import { addFavourite } from "../redux/Reducers/favouriteReducer";
import { addToCartRequest } from "../redux/Reducers/cartReducer";
import ReviewBox from "../components/products/ReviewBox";
import { MdAdd } from "react-icons/md";
import CollectStarsFromUser from "../components/products/CollectStarsFromUser";
import StarRating from "../components/products/StarRating";

function Description() {
  const [isLargerThan995] = useMediaQuery("(min-width: 995px)");
  const [isLargerThan1024] = useMediaQuery("(min-width: 1025px)");
  const [mySize, setMySize] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let [reviewValue, setReviewValue] = useState({
    rating: 5,
    reviewdes: "",
  });

  const param = useParams();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleProduct();
  }, [param]);

  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const color = useColorModeValue("gray.800", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleInputChange = (e) => {
    setReviewValue({
      ...reviewValue,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmitReview = async () => {
    if (token.length > 0) {
      if (reviewValue.reviewdes === "") {
        setToast(toast, "Please add description.", "error");
        return;
      }
      try {
        let response = await axios.post("/product/addreview", {
          id: +param.id,
          rating: reviewValue.rating,
          reviewdes: reviewValue.reviewdes,
          userid: user.id,
        });

        // console.log("review added", response);

        setReviewValue({ rating: 5, reviewdes: "" });
        onClose();
        setToast(toast, "Review added successfuly.", "success");
        getSingleProduct();
      } catch (error) {
        console.log(error);
      }
    } else {
      setToast(toast, "Please Login First", "error");
    }
  };

  const handleAddToCart = (productData) => {
    if (mySize === false) {
      setToast(toast, "Please select a Size", "error");
    } else {
      if (token.length > 0) {
        let payload = [
          "add",
          { ...productData, size: mySize, quantity: 1 },
          token,
          toast,
        ];
        dispatch(addToCartRequest(payload));
        navigate("/cart");
      } else {
        setToast(toast, "Please Login First", "error");
      }
    }
  };

  const handleAddToFavourite = async () => {
    if (!token) {
      setToast(toast, "Please login first", "error");
      navigate("/login");
    } else {
      try {
        let payload = [data, token, toast];
        let res = await dispatch(addFavourite(payload)).unwrap();
        setToast(
          toast,
          res.message ? res.message : "Item added to the favourites",
          "success"
        );
      } catch (rejectedValueOrSerializedError) {
        if (
          rejectedValueOrSerializedError.response.data.message ===
          "Already present in the Favourite"
        ) {
          setToast(
            toast,
            rejectedValueOrSerializedError.response.data.message,
            "info"
          );
        } else {
          setToast(toast, "Something went wrong!", "error");
        }
      }
    }
  };

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`/product/getsingleproduct/${param.id}`);
      console.log("product data", res.data.ratings);
      let reviewedUserDetails = res?.data?.ratings;
      
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setToast(toast, "Product Not Found", "error");
      navigate(-1, { replace: true });
    }
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <Grid
      p={"10px"}
      gap={["40px", "40px", "4%", "4%", "4%"]}
      templateColumns={["100%", "100%", "55% 41%", "62% 34%", "62% 34%"]}
      w={["100%", "100%", "100%", "100%", "90%"]}
      m={[
        "40px auto 100px",
        "40px auto 100px",
        "40px auto 60px",
        "40px auto 60px",
        "40px auto 60px",
      ]}
    >
      <ImageModal img={data?.img} />

      <Box px={["20px", "40px"]}>
        <Text fontSize={"29px"}>{data?.title}</Text>
        <Text>{data?.description}</Text>
        <Text fontSize={"22px"} mt="20px">
          ₹ {numberWithCommas(+data?.price)}
        </Text>
        <Text color={"gray"}>incl. of taxes and duties</Text>
        <Text fontSize={"18px"} mt={"30px"} mb={"10px"}>
          Select Size
        </Text>
        <Box mb={"30px"}>
          <SelectSize size={data?.size} setMySize={setMySize} />
        </Box>

        <NewButton
          click={() => handleAddToCart(data)}
          name={"Add to Bag"}
          bgColor={"black"}
          color={"white"}
          hoverBg={"#1e1e1e"}
          borderColor={"transparent"}
        />
        <NewButton
          click={handleAddToFavourite}
          name={"Favourite"}
          bgColor={"white"}
          color={"black"}
          hoverBorder={"black"}
          borderColor={"#cecdce"}
        />

        <Divider my={"30px"} />

        <Text fontSize={"18px"} mb={"10px"} textDecoration={"underline"}>
          Product Deatils
        </Text>
        <UnorderedList fontSize={"18px"}>
          <ListItem>Gender: {data?.gender}</ListItem>
          <ListItem>Category: {data?.category}</ListItem>
          <ListItem>Colour: {data?.color}</ListItem>
          <ListItem>
            <HStack direction={["column", "row"]} spacing="5px">
              <Text>Rating:</Text>
              {Object.keys(data).length > 0 ? (
                <StarRating numReviews={data.ratings.length} />
              ) : (
                <StarRating numReviews={0} />
              )}
            </HStack>
          </ListItem>
        </UnorderedList>
        {isLargerThan1024 && (
          <>
            <Divider my={"18px"} />

            <Box
              display="flex"
              alignItems="baseline"
              justifyContent={"space-between"}
              mb={[5, 5, 5, 3, 3]}
            >
              <Badge rounded="full" px="2" fontSize="0.8em" color="#303030">
                <Text fontSize={"16px"} color={color}>
                  Customer Reviews
                </Text>
              </Badge>
              <IconButton icon={<MdAdd />} variant="outline" onClick={onOpen} />
              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add Review</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box
                      rounded={"lg"}
                      bg={useColorModeValue("white", "gray.700")}
                      p={8}
                      shadow={shadow}
                    >
                      <Stack spacing={4}>
                        <FormControl id="ratingnum">
                          <FormLabel>
                            Please share your thoughts about this {data.title}{" "}
                            Product. How would you rate your experience using
                            it?
                          </FormLabel>
                          <Select
                            name="ratingnum"
                            value={reviewValue.rating}
                            onChange={handleInputChange}
                            placeholder="Select option"
                          >
                            <option defaultValue value={5}>
                              5
                            </option>
                            <option value={4}>4</option>
                            <option value={3}>3</option>
                            <option value={2}>2</option>
                            <option value={1}>1</option>
                          </Select>
                          {/* <CollectStarsFromUser
                            reviewValue={reviewValue}
                            setRating={setReviewValue}
                          /> */}
                        </FormControl>
                        <FormControl id="reviewdes">
                          <FormLabel>
                            Feel free to share your thoughts about this product
                            right here. How has your experience been so far?
                          </FormLabel>
                          <Textarea
                            maxLength={"100"}
                            value={reviewValue.reviewdes}
                            onChange={handleInputChange}
                            placeholder="Enter your review description here..."
                            size="sm"
                            name="reviewdes"
                          />
                        </FormControl>
                        <Stack spacing={10}></Stack>
                      </Stack>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color={"white"}
                      bgColor={"rgb(0,0,0)"}
                      _hover={{
                        boxShadow: "xl",
                      }}
                      pt={5}
                      pb={5}
                      mr={3}
                      textAlign={"center"}
                      onClick={handleSubmitReview}
                    >
                      ADD
                    </Button>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
            <ReviewBox data={data} />
          </>
        )}
      </Box>
    </Grid>
  );
}
export default Description;
