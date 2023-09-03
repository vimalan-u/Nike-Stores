import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ItemBox } from "./ItemBox";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { EmptyCart } from "./EmptyCart";
import { Loading } from "../loading/Loading";
import { Error } from "../loading/Error";

export const BagItems = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const { error, loading } = useSelector((state) => state.cart);
  const { orderSummary } = useSelector((state) => state.cart) || 0;

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
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
        {cartProducts.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cartProducts?.map((item, index) => (
              <ItemBox
                key={index}
                {...item}
                cartProductId={item.cartProductId}
                index={item.id}
                data={item}
              />
            ))}
          </>
        )}
      </Box>
    </>
  );
};
