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
import { removeItem } from "../../utils/cookiestorage";

export const addToCartRequest = createAsyncThunk(
  "cart/addToCart",
  async (data1, { dispatch }) => {
    let operation = data1[0];
    let data = data1[1];
    let token = data1[2];
    let toast = data1[3];

    try {
      let res = await axios.post(
        "/cart/addtocart",
        {
          operation: operation,
          data: data,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setToast(
        toast,
        res.data.message ? res.data.message : "Something Went Worng!",
        "success"
      );

      const orderSummary = getCartTotal(res.data.products);
      return dispatch(
        cartSlice.actions.addToCartSuccess({
          cartProducts: res.data.products,
          orderSummary: orderSummary,
        })
      );
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
);

// Get Cart Products
export const getCartProducts = createAsyncThunk(
  "cart/getFromCart",
  async (data1, { dispatch, rejectWithValue }) => {
    let token = data1[0];
    let toast = data1[1];
    try {
      let res = await axios.get("/cart/getcart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const orderSummary = getCartTotal(res.data);
      // dispatch(
      //   cartSlice.actions.getCartDataSuccess({
      //     cartProducts: res.data,
      //     orderSummary: orderSummary,
      //   })
      // );
      return {
        cartProducts: res.data,
        orderSummary: orderSummary,
      };
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

// Async thunk for removing an item from the cart
export const removeFromCartRequest = createAsyncThunk(
  "cart/removeFromCart",
  async (data1, { dispatch }) => {
    let id = data1[0];
    let cartProductId = data1[1];
    let token = data1[2];
    let toast = data1[3];
    try {
      let res = await axios.delete(`/cart/delete/${id}/${cartProductId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const orderSummary = getCartTotal(res.data.products);
      dispatch(
        cartSlice.actions.removeFromCartSuccess({
          cartProducts: res.data.products,
          orderSummary: orderSummary,
        })
      );
      setToast(
        toast,
        res.data.message ? res.data.message : "Something Went Wrong",
        "success"
      );
    } catch (error) {
      console.log("error", error);
      return error;
    }
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
    loading: false,
    error: false,
  },
  reducers: {
    updateCartDetails: (state) => {
      state.cartProducts = [];
      state.orderSummary = {
        subTotal: 0,
        quantity: 0,
        shipping: 0,
        discount: 0,
        total: 0,
      };
    },
    // getCartDataSuccess: (state, action) => {
    //   state.cartProducts = [...action.payload.cartProducts];
    //   state.orderSummary = {
    //     ...state.orderSummary,
    //     ...action.payload.orderSummary,
    //   };
    // },
    addToCartSuccess: (state, action) => {
      const { cartProducts, orderSummary } = action.payload;
      state.cartProducts = [...cartProducts];
      state.orderSummary = { ...state.orderSummary, ...orderSummary };
    },
    removeFromCartSuccess: (state, action) => {
      const { cartProducts, orderSummary } = action.payload;
      state.cartProducts = [...cartProducts];
      state.orderSummary = { ...state.orderSummary, ...orderSummary };
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

  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.cartProducts = [...action.payload.cartProducts];
      state.orderSummary = {
        ...state.orderSummary,
        ...action.payload.orderSummary,
      };
      state.error = false;
    });
    builder.addCase(getCartProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
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
