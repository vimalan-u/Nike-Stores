import { Box, useToast } from "@chakra-ui/react";
import { BagItems } from "../components/cart/BagItems";
import { OrderSummary } from "../components/cart/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartProducts } from "../redux/Reducers/cartReducer";
import { setToast } from "../utils/extraFunctions";
import { logoutApi } from "../redux/Reducers/authReducer";
import { removeItem } from "../utils/cookiestorage";
import { useNavigate } from "react-router-dom";
import { removeItemLocal } from "../utils/localstorage";

function Cart() {
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getCartDetails();
  }, []);

  async function getCartDetails() {
    try {
      let payload = [token, toast];
      let response = await dispatch(getCartProducts(payload)).unwrap();
    } catch (rejectedValueOrSerializedError) {
      console.log(
        "rejectedValueOrSerializedError",
        rejectedValueOrSerializedError
      );
      if (rejectedValueOrSerializedError.response.data.status === "Failed") {
        removeItem("token");
        removeItem("user");
        dispatch(logoutApi());
        removeItem("persist:root");
        setToast(toast, "Session expired. Please login again.", "success");
        navigate("/login");
      }
    }
  }
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
