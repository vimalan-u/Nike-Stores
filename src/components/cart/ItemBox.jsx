import { Box, Divider, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas, setToast } from "../../utils/extraFunctions";
import { BagItemBtn, QuantityBtn } from "./BagItemBtn";
import { useNavigate } from "react-router-dom";
import {
  addToCartRequest,
  getCartProducts,
  removeFromCartRequest,
} from "../../redux/Reducers/cartReducer";
import { addFavourite } from "../../redux/Reducers/favouriteReducer";

export const ItemBox = ({
  title,
  description,
  img,
  price,
  quantity,
  index,
  data,
  cartProductId,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleRemoveItem = () => {
    const payload = [index, cartProductId, token, toast];
    dispatch(removeFromCartRequest(payload));
  };

  const handleAddToFavourite = async () => {
    if (!token) {
      setToast(toast, "Please login first", "error");
      navigate("/auth");
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
        console.log("error item box of favorite", rejectedValueOrSerializedError)
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
          setToast(toast, "Something went wrong", "error");
        }
      }
    }
  };

  const handleQuantityChange = (id, operation) => {
    if (quantity === 1 && operation === "reduce") {
      const payload = [id, cartProductId, token, toast];
      dispatch(removeFromCartRequest(payload));
      return dispatch(getCartProducts(payload1));
    }
    const payload = [operation, data, token, toast];

    dispatch(addToCartRequest(payload));
    let payload1 = [token, toast];
    dispatch(getCartProducts(payload1));
    return;
  };

  const handleQuantityChange1 = ({ target: { name } }) => {
    if (quantity === 1 && name === "reduce") {
      const payload = [index, cartProductId, toast];
      return dispatch(removeFromCartRequest(payload));
    }
    const payload = [data, toast, name];
    return dispatch(addToCartRequest(payload));
  };

  return (
    <>
      <Box
        my={"15px"}
        minH={"150px"}
        display={"flex"}
        gap={["5px", "5px", "20px", "20px", "20px"]}
      >
        <Box
          w={["80px", "80px", "150px", "150px", "150px"]}
          h={["80px", "80px", "150px", "150px", "150px"]}
        >
          <Image h={"100%"} src={img[0]} />
        </Box>

        <Box
          w={"100%"}
          display={"grid"}
          gap={"2%"}
          gridTemplateColumns={[
            "67% 30%",
            "67% 30%",
            "80% 18%",
            "80% 18%",
            "80% 18%",
          ]}
        >
          <Box minH={"150px"}>
            <Text fontWeight={500}>{title}</Text>
            <Text color={"gray"}>{description}</Text>

            <Flex alignItems={"center"} gap={"10px"} my={"8px"}>
              <Text>Quantity:</Text>

              <QuantityBtn
                text={"-"}
                name={"reduce"}
                onClick={() => handleQuantityChange(index, "reduce")}
              />
              <Text fontWeight={600}>{quantity}</Text>

              <QuantityBtn
                text={"+"}
                name={"add"}
                onClick={() => handleQuantityChange(index, "add")}
              />
            </Flex>

            <Box display={"flex"} gap={"10px"}>
              <BagItemBtn title={"Favourites"} onClick={handleAddToFavourite} />

              <BagItemBtn title={"Remove"} onClick={handleRemoveItem} />
            </Box>
          </Box>

          <Box minH={"150px"}>
            <Text fontSize={"18px"} textAlign={"end"}>
              ₹{numberWithCommas(price)}
            </Text>
          </Box>
        </Box>
      </Box>

      <Divider />
    </>
  );
};
