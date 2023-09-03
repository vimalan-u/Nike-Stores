import { Box, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { couponValidator } from "../../utils/couponValidator";
import { setToast } from "../../utils/extraFunctions";
import { CheckoutBtn } from "./CheckoutBtn";
import { useNavigate } from "react-router-dom";
import { OrderSummaryDataSection } from "./OrderSummaryDataSection";
import {
  applyCouponRequest,
  removeCouponRequest,
} from "../../redux/Reducers/cartReducer";

export const OrderSummary = () => {
  const orderSummary = useSelector((state) => state.cart.orderSummary);
  const token = useSelector((state) => state.auth.token);

  const [coupon, setCoupon] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCouponCode = ({ target: { textContent } }) => {
    setToast(toast, "Currently This Functionality Under Development", "info");
    // switch (textContent) {
    //     case 'Apply Coupon':
    //         return applyCouponCode();
    //     case 'Remove Coupon':
    //         return removeCouponCode();
    // };
  };

  const applyCouponCode = () => {
    if (!token) {
      setToast(toast, "Please login first", "error");
      return navigate("/auth");
    }
    if (orderSummary.total === 0) {
      return setToast(toast, "Please add some products in the cart", "error");
    }
    if (!coupon) {
      return setToast(toast, "Please enter coupon code", "error");
    }
    const discountPercent = couponValidator(coupon);
    if (!discountPercent) {
      return setToast(toast, "Invalid Coupon Code", "error");
    }
    dispatch(applyCouponRequest(discountPercent, toast));
  };

  const removeCouponCode = () => {
    dispatch(removeCouponRequest(toast));
    setCoupon("");
  };

  const handleMemberCheckout = () => {
    if (!token) {
      setToast(toast, "Please login first", "error");
      return navigate("/login");
    }
    if (orderSummary.total === 0) {
      return setToast(toast, "Please add some products in the cart", "error");
    }
    navigate("/checkout");
  };

  return (
    <>
      <Box>
        <OrderSummaryDataSection {...orderSummary} />

        <Input
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
          placeholder={"Coupon"}
          disabled={orderSummary.discount > 0}
          value={coupon}
          type={"text"}
          mb={"20px"}
        />

        <CheckoutBtn
          onClick={handleCouponCode}
          name={orderSummary.discount > 0 ? "Remove Coupon" : "Apply Coupon"}
          bgColor={"white"}
          color={"black"}
          hoverBorder={"black"}
          borderColor={"#cecdce"}
        />

        <CheckoutBtn
          onClick={handleMemberCheckout}
          name={"Member Checkout"}
          bgColor={"black"}
          color={"white"}
          hoverBg={"#1e1e1e"}
          borderColor={"transparent"}
        />
      </Box>
    </>
  );
};
