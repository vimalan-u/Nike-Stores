import axios from "axios";
import { setToast } from "../../utils/extraFunctions";
import { removeItemLocal } from "../../utils/localstorage";
import { updateCartDetails } from "../../redux/Reducers/cartReducer";

export const sendOrderRequest = async (
  shippingDetails,
  orderId,
  response,
  orderSummary,
  cartProducts,
  token,
  toast,
  dispatch,
  navigate
) => {
  const payload = {
    orderSummary,
    cartProducts,
    shippingDetails,
    paymentDetails: {
      orderId,
      razorpayOrderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
    },
  };

  try {
    await axios.post("/order/createorder", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setToast(toast, "Order placed successfully", "success");

    //Empty the cart
    removeItemLocal("cartProducts");
    removeItemLocal("orderSummary");
    dispatch(updateCartDetails());
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
