import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem, setItem } from "../../utils/cookiestorage";
import { setToast } from "../../utils/extraFunctions";
import Cookies from "js-cookie";

const initialState = {
  isLogin: false,
  token: getItem("token") || "",
  user: getItem("user") || {},
  error: "",
  loading: true,
  resetemail: "",
};

export const getLoginSuccess = createAsyncThunk(
  "authentication/getLoginSuccess",
  async (data) => {
    try {
      const res = await axios.post(`/auth/login`, data);
      const resdata = await res.data;
      setItem("token", resdata.token);
      setItem("user", resdata.user);
      return resdata;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const resetpassword = createAsyncThunk(
  "authentication/resetpassword",
  async (data, toast, navigate) => {
    try {
      let res = await axios.post("/auth/sendotp", {
        data,
      });
      const resdata = await res.data;
      Cookies.set("otp", res.data.otp, {
        expires: new Date(new Date().getTime() + 5 * 60 * 1000),
      });
      setToast(toast, "Reset OTP Sent To Your Email", "success");
      navigate("/resetpassword");
      return resdata;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    removepassword: (state, action) => {
      state.resetemail = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginSuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLoginSuccess.fulfilled, (state, action) => {
      state.token = getItem("token");
      state.isLogin = true;
      state.user = getItem("user");
      state.loading = false;
    });
    builder.addCase(getLoginSuccess.rejected, (state, action) => {
      state.isLogin = false;
      state.error = action.payload.message;
      state.token = "";
      state.user = {};
      state.loading = false;
    });

    builder.addCase(resetpassword.pending, (state) => {
      state.loadingreset = true;
    });
    builder.addCase(resetpassword.fulfilled, (state, action) => {
      console.log("in redux action", action);
      state.resetemail = action.payload.email;
      state.loadingreset = false;
    });
    builder.addCase(resetpassword.rejected, (state, action) => {
      state.errorrest = action.payload.message;
      state.loadingreset = false;
    });
  },
});

export const { removepassword } = authSlice.actions;

export default authSlice.reducer;
