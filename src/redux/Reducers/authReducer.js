import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItem, setItem } from "../../utils/cookiestorage";
import { setToast } from "../../utils/extraFunctions";
import Cookies from "js-cookie";

const initialState = {
  isLogin: false,
  token: getItem("token") || false,
  user: getItem("user") || {},
  error: "",
  loading: true,
  resetemail: "",
};

export const getLoginSuccess = createAsyncThunk(
  "authentication/getLoginSuccess",
  async (data, toast, navigate) => {
    try {
      const res = await axios.post(`/auth/login`, data);
      const resdata = await res.data;
      console.log(resdata)
      setItem("token", resdata.token);
      setItem("user", resdata.user);
      let a=getItem("token")
      console.log("a",a)
      // setToast(toast, "Signup successfully", "success");
      navigate(-1);
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
      let res = await axios.post(
        "/auth/sendotp",
        {
          data,
        }
      );
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
      console.log("in redux action", action);
      state.token = action.payload.token;
      state.isLogin = true;
      state.user = action.payload.user;
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
