import { Box } from "@chakra-ui/react";
import { BagItems } from "../components/cart/BagItems";
import { OrderSummary } from "../components/cart/OrderSummary";
import { useSelector } from "react-redux";
import cartReducer, { initialState } from "./useReducer.cart";
import { useEffect, useReducer } from "react";

function Cart() {
  const token = useSelector((state) => state.auth.token);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: "getFromCart", payload: { token: token } });
  }, []);

  const orderSummary = 0;
  const cartProducts = state.data;

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
        <BagItems cartProducts={cartProducts} orderSummary={orderSummary} />

        <OrderSummary />
      </Box>
    </>
  );
}
export default Cart;
