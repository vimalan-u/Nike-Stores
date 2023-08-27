import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ItemBox } from "./ItemBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { EmptyCart } from "./EmptyCart";
import cartReducer, { initialState } from "../../pages/useReducer.cart";
import { useEffect, useReducer } from "react";

export const BagItems = ({ cartProducts, orderSummary }) => {
  // const cartProducts = useSelector((state) => state.cart.cartProducts);
  // const { orderSummary } = useSelector((state) => state.cart) || 0;

  return (
    <>
      <Box>
        <Button
          mb={"20px"}
          fontSize={"20px"}
          fontWeight={600}
          color={"white"}
          bgColor={"rgb(0,0,0)"}
          _hover={{
            color: "white",
            bgColor: "rgb(0,0,0)",
          }}
          size="sm"
          leftIcon={<AiOutlineShoppingCart />}
        >
          Bag
        </Button>
        {orderSummary.quantity === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cartProducts?.map((item, index) => (
              <ItemBox key={index} {...item} index={index} data={item} />
            ))}
          </>
        )}
      </Box>
    </>
  );
};
