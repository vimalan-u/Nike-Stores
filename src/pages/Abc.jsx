import { useReducer } from "react";
import cartReducer, { initialState } from "./useReducer.cart";
import { Button } from "@chakra-ui/react";

export function Abc() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleAddToCart = (productData) => {
    // const data = ["add", { ...productData, size: "abc", quantity: 1 }, "token"];
    dispatch({
      type: "addToCart",
      payload: {
        operation: "add",
        data: { ...productData, size: "abc", quantity: 1 },
        token: "token",
      },
    });
    console.log("bye");
  };

  return <Button onClick={() => handleAddToCart("abc")}></Button>;
}
