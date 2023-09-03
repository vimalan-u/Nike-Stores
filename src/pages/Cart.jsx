import { Box, useToast } from "@chakra-ui/react";
import { BagItems } from "../components/cart/BagItems";
import { OrderSummary } from "../components/cart/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartProducts } from "../redux/Reducers/cartReducer";

function Cart() {
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    let payload = [token, toast];
    dispatch(getCartProducts(payload));
  }, []);

  return (
    <>
      <Box
        display={"grid"}
        gap={["40px", "40px", "40px", "5%", "5%"]}
        my={"30px"}
        maxW={"1200px"}
        mx={"auto"}
        p={"20px"}
        gridTemplateColumns={["100%", "100%", "100%", "65% 30%", "65% 30%"]}
      >
        <BagItems />

        <OrderSummary />
      </Box>
    </>
  );
}
export default Cart;
