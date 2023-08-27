import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCartDuplicate } from "../../utils/handleCartDuplicate";
import {
  getItemSession,
  removeItemSession,
  setItemSession,
} from "../../utils/sessionStorage";
import { getCartTotal } from "../../utils/getCartTotal";
import { setToast } from "../../utils/extraFunctions";
import { getItemLocal, setItemLocal } from "../../utils/localstorage";
import axios from "axios";

export const addToCartRequest = createAsyncThunk(
  "cart/addToCart",
  async (data1, { dispatch }) => {
    let data = data1[0];
    let toast = data1[1];
    let operation = data1[2];
    let token = data1[3];
    // try {
    //   let cartData = getItemLocal("cartProducts") || [];

    //   cartData = handleCartDuplicate(cartData, data, operation);
    //   setItemLocal("cartProducts", cartData);
    //   const discountPercent = getItemSession("discountPercent");
    //   const orderSummary = getCartTotal(cartData, discountPercent);
    //   setItemLocal("orderSummary", orderSummary);
    //   dispatch(cartSlice.actions.addToCartSuccess({ cartData, orderSummary }));

    //   if (operation === "add") {
    //     setToast(toast, "Item added to the cart", "success");
    //   } else if (operation === "reduce") {
    //     setToast(toast, "Item quantity reduced", "success");
    //   }
    //   return;
    // } catch (error) {
    //   console.log("error", error);
    // }

    
  }
);

// Async thunk for removing an item from the cart
export const removeFromCartRequest = createAsyncThunk(
  "cart/removeFromCart",
  async (data1, { getState, dispatch }) => {
    let index = data1[0];
    let toast = data1[1];
    const state = getState().cart;
    const cartData = [...state.cartProducts];
    cartData.splice(index, 1);
    setItemLocal("cartProducts", cartData);
    const discountPercent = getItemSession("discountPercent");
    const orderSummary = getCartTotal(cartData, discountPercent);
    if (orderSummary.subTotal === 0) {
      removeItemSession("discountPercent");
    }
    setItemLocal("orderSummary", orderSummary);
    dispatch(cartSlice.actions.removeFromCartSuccess({ index, orderSummary }));
  }
);

// Async thunk for applying a coupon
export const applyCouponRequest = createAsyncThunk(
  "cart/applyCoupon",
  async ({ discountPercent, toast }, { getState, dispatch }) => {
    const state = getState().cart;
    const cartData = [...state.cartProducts];
    setItemSession("discountPercent", discountPercent);
    const orderSummary = getCartTotal(cartData, discountPercent);
    setItemLocal("orderSummary", orderSummary);

    dispatch(cartSlice.actions.applyCouponSuccess(orderSummary));

    setToast(
      toast,
      "Coupon Applied Successfully",
      "success",
      2000,
      `You got ${discountPercent}% discount`
    );
  }
);

// Async thunk for removing a coupon
export const removeCouponRequest = createAsyncThunk(
  "cart/removeCoupon",
  async ({ toast }, { getState, dispatch }) => {
    const state = getState().cart;
    const cartData = [...state.cartProducts];

    removeItemSession("discountPercent");
    const orderSummary = getCartTotal(cartData, 0);
    setItemLocal("orderSummary", orderSummary);

    dispatch(cartSlice.actions.removeCouponSuccess(orderSummary));

    setToast(toast, "Coupon Removed Successfully", "success");
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: getItemLocal("cartProducts") || [],
    orderSummary: getItemLocal("orderSummary") || {
      subTotal: 0,
      quantity: 0,
      shipping: 0,
      discount: 0,
      total: 0,
    },
  },
  reducers: {
    updateCartDetails: (state) => {
      state.cartProducts = getItemLocal("cartProducts") || [];
      state.orderSummary = getItemLocal("orderSummary") || {
        subTotal: 0,
        quantity: 0,
        shipping: 0,
        discount: 0,
        total: 0,
      };
    },
    addToCartSuccess: (state, action) => {
      const { cartData, orderSummary } = action.payload;
      state.cartProducts = [...cartData];
      state.orderSummary = { ...state.orderSummary, ...orderSummary };
    },
    removeFromCartSuccess: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (e, i) => i !== action.payload.index
      );
      state.orderSummary = {
        ...state.orderSummary,
        ...action.payload.orderSummary,
      };
    },
    applyCouponSuccess: (state, action) => {
      const couponDetails = action.payload;
      state.orderSummary = { ...state.orderSummary, ...couponDetails };
    },
    removeCouponSuccess: (state, action) => {
      const couponDetails = action.payload;
      state.orderSummary = { ...state.orderSummary, ...couponDetails };
    },
  },
});

export const {
  updateCartDetails,
  addToCartSuccess,
  removeFromCartSuccess,
  applyCouponSuccess,
  removeCouponSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
