import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  numberWithCommas,
  setToast,
  shortString,
} from "../../utils/extraFunctions";
import { setItemSession } from "../../utils/sessionStorage";
import {
  deleteFavorite,
  getFavourite,
} from "../../redux/Reducers/favouriteReducer";

export const FavouriteItemBox = ({
  favoriteId,
  id,
  title,
  description,
  price,
  img,
  data,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleDeleteRequest = async () => {
    try {
      let payload = [favoriteId, token];
      await dispatch(deleteFavorite(payload)).unwrap();
      await dispatch(getFavourite(token)).unwrap();
      setToast(toast, "Product removed from favourites", "success");
    } catch (rejectedValueOrSerializedError) {
      setToast(toast, "Something went wrong", "error");
    }
  };

  const handleDisplayProduct = () => {
    setItemSession("singleProduct", data);
    navigate(`/description/${id}`);
  };

  return (
    <>
      <Flex flexDirection={"column"} mb={"30px"}>
        <Box overflow={"hidden"}>
          <Image
            onClick={handleDisplayProduct}
            className="imgAnimation"
            cursor={"pointer"}
            src={img[0]}
          />
        </Box>
        <Box mt={"15px"}>
          <Flex
            fontSize={["14px", "14px", "16px", "16px", "18px"]}
            justifyContent={"space-between"}
          >
            <Text>{shortString(title)}</Text>
            <Text>₹{numberWithCommas(price)}</Text>
          </Flex>
          <Text
            fontSize={["12px", "12px", "15px", "15px", "17px"]}
            color={"gray"}
            my={"2px"}
          >
            {shortString(description, 20)}
          </Text>
          <Button
            variant={"ghost"}
            borderRadius={"20px"}
            border={"1px solid #cecdce"}
            mt={"20px"}
            onClick={handleDeleteRequest}
          >
            Remove
          </Button>
        </Box>
      </Flex>
    </>
  );
};
